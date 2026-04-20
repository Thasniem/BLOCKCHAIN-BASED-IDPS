import json
import time
import threading
import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
from blockchain_client import log_alert, get_blockchain_events
from telehealth import telehealth

# ---------------- FLASK APP ----------------
app = Flask(__name__)
CORS(app)  # allow React frontend (localhost:3000) to access API

app.register_blueprint(telehealth, url_prefix="/telehealth")

ALERT_FILE = "/wazuh_logs/alerts/alerts.json"

appointments = []


# ---------------- TELEHEALTH APPOINTMENT API ----------------
@app.route("/appointment", methods=["POST"])
def appointment():

    data = request.get_json()

    patient = data.get("patient", "")
    doctor = data.get("doctor", "")
    time_value = data.get("time", "")

    appointments.append({
        "patient": patient,
        "doctor": doctor,
        "time": time_value
    })

    # Log to blockchain
    log_alert("Appointment Booked", request.remote_addr)

    # -------- Simulated Attack Detection --------
    if "<script>" in patient.lower():

        alert = {
            "timestamp": str(datetime.datetime.now()),
            "rule": {
                "description": "XSS attempt detected",
                "level": 12
            },
            "data": {
                "srcip": request.remote_addr
            }
        }

        try:
            with open(ALERT_FILE, "a") as f:
                f.write(json.dumps(alert) + "\n")

            print("Simulated Wazuh alert written")

        except Exception as e:
            print("Error writing alert:", e)

    return jsonify({"message": "Appointment stored"})


# ---------------- ALERT API FOR DASHBOARD ----------------
@app.route("/alerts")
def get_alerts():

    wazuh_alerts = []

    try:
        with open(ALERT_FILE) as f:
            for line in f:

                alert = json.loads(line)

                wazuh_alerts.append({
                    "rule": alert.get("rule", {}).get("description"),
                    "level": alert.get("rule", {}).get("level"),
                    "srcip": alert.get("data", {}).get("srcip", "N/A")
                })

    except Exception as e:
        print("Error reading alerts:", e)

    return jsonify(wazuh_alerts[-20:])


# ---------------- BLOCKCHAIN EVENTS API ----------------
@app.route("/blockchain-events")
def get_blockchain_events_endpoint():
    print("Getting blockchain events...")
    events = get_blockchain_events()
    print(f"Found {len(events)} events")
    return jsonify(events)


# ---------------- HEALTH CHECK ----------------
@app.route("/health")
def health():
    return jsonify({"status": "ok"})


# ---------------- WAZUH MONITOR THREAD ----------------
def monitor():

    print("Monitoring Wazuh alerts...")

    seen = set()

    while True:

        try:
            with open(ALERT_FILE) as f:

                for line in f:

                    if line in seen:
                        continue

                    alert = json.loads(line)

                    severity = alert.get("rule", {}).get("level", 0)

                    if severity >= 10:

                        src_ip = alert.get("data", {}).get("srcip", "unknown")

                        log_alert("Intrusion Detected", src_ip)

                        print("Logged to blockchain:", src_ip)

                    seen.add(line)

        except FileNotFoundError:
            pass

        time.sleep(5)


# ---------------- START MONITOR THREAD ----------------
threading.Thread(target=monitor, daemon=True).start()


# ---------------- START SERVER ----------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)