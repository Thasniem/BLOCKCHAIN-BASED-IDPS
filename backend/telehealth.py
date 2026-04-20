from flask import Blueprint, request, jsonify

telehealth = Blueprint('telehealth', __name__)

appointments = []

@telehealth.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")

    return jsonify({
        "message": f"{username} logged in successfully"
    })


@telehealth.route("/book", methods=["POST"])
def book_appointment():
    data = request.json

    patient = data.get("patient")
    doctor = data.get("doctor")
    time = data.get("time")

    appointment = {
        "patient": patient,
        "doctor": doctor,
        "time": time
    }

    appointments.append(appointment)

    return jsonify({
        "message": "Appointment booked",
        "appointment": appointment
    })


@telehealth.route("/appointments", methods=["GET"])
def get_appointments():
    return jsonify(appointments)