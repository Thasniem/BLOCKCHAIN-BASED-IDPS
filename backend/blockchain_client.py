from web3 import Web3
import time
import datetime

GANACHE_URL = "http://ganache:8545"

CONTRACT_ADDRESS = "0x8FEBCB78faD33938b32702eaFdd89339a6e213dD"

ABI = [
    {
        "inputs": [
            {"internalType": "string", "name": "_hash", "type": "string"},
            {"internalType": "string", "name": "_severity", "type": "string"}
        ],
        "name": "addAlert",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAlertCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "alerts",
        "outputs": [
            {"internalType": "string", "name": "alertHash", "type": "string"},
            {"internalType": "uint256", "name": "timestamp", "type": "uint256"},
            {"internalType": "string", "name": "severity", "type": "string"}
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

w3 = None
contract = None
account = None


def connect_blockchain():

    global w3, contract, account

    while True:
        try:
            w3 = Web3(Web3.HTTPProvider(GANACHE_URL))

            if w3.is_connected():

                account = w3.eth.accounts[0]

                contract = w3.eth.contract(
                    address=CONTRACT_ADDRESS,
                    abi=ABI
                )

                print("Connected to Ganache blockchain")
                break

        except Exception:
            pass

        print("Waiting for Ganache...")
        time.sleep(3)


connect_blockchain()


def log_alert(event_type, source_ip):

    try:
        # Create a hash from the alert data
        alert_hash = f"{event_type}:{source_ip}:{int(time.time())}"

        tx = contract.functions.addAlert(
            alert_hash,
            "high"  # default severity
        ).transact({"from": account})

        w3.eth.wait_for_transaction_receipt(tx)

        print("Blockchain log stored:", alert_hash)

    except Exception as e:

        print("Blockchain logging failed:", e)


def get_blockchain_events():
    """Get blockchain audit events - mock data for now"""
    # Mock data until contract is properly deployed
    return [
        {
            "txHash": "0x1234567890abcdef",
            "rule": "Appointment Booked",
            "timestamp": str(datetime.datetime.now()),
            "severity": "low"
        },
        {
            "txHash": "0xfedcba0987654321",
            "rule": "Security Alert",
            "timestamp": str(datetime.datetime.now() - datetime.timedelta(minutes=5)),
            "severity": "high"
        }
    ]