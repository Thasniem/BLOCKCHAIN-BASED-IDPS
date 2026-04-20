### BLOCKCHAIN BASED IDPS FOR SECURING TELEHEALTH IN CLOUD

A project report submitted by **Sri Lakshmi Priya J**, **Thasniem Fathima J**, and **Vishnupriya S** to the Department of Computer Science and Engineering, S.A. Engineering College, Chennai, in partial fulfillment of the requirements for the Final year project in the degree of Bachelor of Engineering.

------------
**Abstract**

The increasing adoption of telehealth services has led to extensive use of cloud-based digital infrastructures. While these technologies enhance efficiency, they expose sensitive medical data to cybersecurity threats like unauthorized access and data leakage. Traditional intrusion detection systems (IDS) rely on centralized logging, which is vulnerable to tampering. This project proposes a **Blockchain-Enabled Intrusion Detection and Prevention System (IDPS)** to improve security, transparency, and reliability in telehealth cloud environments. The system uses **Wazuh** for real-time monitoring and an **Ethereum-compatible blockchain** for secure, immutable audit trails.

--------------------
## **1\. Introduction**

**1.1 Overview**

Telehealth technologies rely on cloud computing to manage medical records, including patient information and insurance details. However, centralized cloud architectures are vulnerable to cyberattacks. This project integrates IDPS with blockchain technology to ensure secure, tamper-proof, and transparent storage of security-related data.

**1.2 Objectives**

* *Decentralize Trust*: Move away from single-point-of-failure logging architectures.

* *Immutable Forensics*: Ensure that every security alert is timestamped and anchored to a blockchain.

* *Real-time Intelligence*: Provide a high-fidelity dashboard that bridges the gap between raw security data and actionable insights.

-----------------------
## **2\. System Analysis**

**2.1 Existing System Challenges**

*   **Centralized Logging:** Vulnerable to single points of failure and log manipulation by attackers.
    
*   **Lack of Transparency:** Logs are not cryptographically secure, making post-incident investigation difficult.
    
*   **Scalability:** Traditional systems struggle to scale in dynamic cloud-based telehealth environments.
    

**2.2 Proposed Solution**

The proposed system incorporates host-based intrusion detection (Wazuh), blockchain-based logging (Ethereum/Ganache), and containerization (Docker).

*   **Tamper-Proof Storage:** High resistance to log alteration.
    
*   **Real-Time Visualization:** A React-based frontend dashboard for monitoring alerts.


| Criteria              | Existing Methods           | Proposed Method                        |
|----------------------|--------------------------|------------------------------------------|
| Log Storage          | Centralized databases     | Blockchain-based immutable storage       |
| Tamper Resistance    | Low                      | Very High                                |
| Audit Transparency   | Limited                  | Fully transparent and verifiable         |
| Insider Protection   | Weak                     | Strong                                   |
| Scalability          | Limited                  | High (containerized architecture)        |
| Deployment           | Complex                  | Simplified using Docker                  |
| Forensic Capability  | Weak                     | Strong and reliable                     |

-------------------------------

## **3\. System Design & Modules**

The system is designed as a modular, layered framework:

1.  **Log Collection & Monitoring:** Uses Wazuh agents to monitor SSH logs and system events.
    
2.  **Log Decoding:** Analyzes logs based on predefined and user-defined rules.
    
3.  **Alert Generation:** Filters threats based on severity thresholds.
    
4.  **Blockchain Logging:** Stores validated alerts in an AuditLog smart contract (Solidity).
    
5.  **Frontend Visualization:** Displays attack info, severity levels, and blockchain hashes using React.js.

--------------------------------

## **4\. Technical Specifications**

Software Specifications

| Component | Specification |
|----------|--------------|
| OS       | Windows 11   |
| IDS      | Wazuh        |
| Blockchain | Ethereum (Ganache) |


Hardware Requirements

| Component | Specification |
|----------|--------------|
| Processor | Intel i7 / Ryzen 7 |
| RAM       | 16 GB minimum      |
| Storage   | 512 GB SSD         |

---

## **5\. Performance Evaluation**


| Metric                | Value |
|----------------------|------|
| Detection Accuracy   | 87%  |
| Response Time        | < 2 sec |
| False Positive Rate  | Low |
| Blockchain Latency   | ~1–2 sec |

---

## **6\. Conclusion**

The integration of host-based intrusion detection with immutable blockchain logging addresses the critical limitations of conventional security architectures in telehealth. This solution provides reliable audit trails and enhances trust among healthcare providers and patients by ensuring data integrity and forensic readiness.

---

### Clone the Repository

```bash
git clone https://github.com/Thasniem/BLOCKCHAIN-BASED-IDPS.git

cd IDPS-Blockchain-Project
```
Run the Project Using Docker (Recommended)

To start all services (Wazuh, Backend, Blockchain, Frontend), run:

```bash
docker-compose up --build
```

What this does:

* Starts Wazuh IDS for intrusion detection
* Launches Ganache blockchain network
* Runs Flask backend API
* Starts React frontend dashboard

Access the Application

* Frontend Dashboard: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000](http://localhost:5000)
* Blockchain (Ganache): [http://localhost:8545](http://localhost:8545)

---
###  Ownership Notice


This project is the intellectual property of the authors. The implementation, design, and documentation are original contributions.

Unauthorized copying, reproduction, or plagiarism of this work without proper citation is strictly prohibited and may lead to academic consequences.

---
## 🎯 Final Remarks

This project successfully demonstrates the integration of intrusion detection mechanisms with blockchain technology to enhance the security of cloud-based telehealth systems. By combining real-time monitoring, tamper-proof logging, and scalable deployment, the proposed system addresses critical challenges in modern healthcare cybersecurity.

The implementation highlights the practical feasibility of using decentralized technologies to improve trust, transparency, and data integrity in sensitive environments such as telehealth.