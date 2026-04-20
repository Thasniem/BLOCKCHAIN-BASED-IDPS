### BLOCKCHAIN BASED IDPS FOR SECURING TELEHEALTH IN CLOUD
======================================================

A project report submitted by **Sri Lakshmi Priya J**, **Thasniem Fathima J**, and **Vishnupriya S** to the Department of Computer Science and Engineering, S.A. Engineering College, Chennai, in partial fulfillment of the requirements for the Final year project in the degree of Bachelor of Engineering.

**Abstract**
------------

The increasing adoption of telehealth services has led to extensive use of cloud-based digital infrastructures. While these technologies enhance efficiency, they expose sensitive medical data to cybersecurity threats like unauthorized access and data leakage. Traditional intrusion detection systems (IDS) rely on centralized logging, which is vulnerable to tampering. This project proposes a **Blockchain-Enabled Intrusion Detection and Prevention System (IDPS)** to improve security, transparency, and reliability in telehealth cloud environments. The system uses **Wazuh** for real-time monitoring and an **Ethereum-compatible blockchain** for secure, immutable audit trails.

**1\. Introduction**
--------------------

### **1.1 Overview**

Telehealth technologies rely on cloud computing to manage medical records, including patient information and insurance details. However, centralized cloud architectures are vulnerable to cyberattacks. This project integrates IDPS with blockchain technology to ensure secure, tamper-proof, and transparent storage of security-related data.

### **1.2 Objectives**

**2\. System Analysis**
-----------------------

### **2.1 Existing System Challenges**

*   **Centralized Logging:** Vulnerable to single points of failure and log manipulation by attackers.
    
*   **Lack of Transparency:** Logs are not cryptographically secure, making post-incident investigation difficult.
    
*   **Scalability:** Traditional systems struggle to scale in dynamic cloud-based telehealth environments.
    

### **2.2 Proposed Solution**

The proposed system incorporates host-based intrusion detection (Wazuh), blockchain-based logging (Ethereum/Ganache), and containerization (Docker).

*   **Tamper-Proof Storage:** High resistance to log alteration.
    
*   **Real-Time Visualization:** A React-based frontend dashboard for monitoring alerts.
    

**3\. System Design & Modules**
-------------------------------

The system is designed as a modular, layered framework:

1.  **Log Collection & Monitoring:** Uses Wazuh agents to monitor SSH logs and system events.
    
2.  **Log Decoding:** Analyzes logs based on predefined and user-defined rules.
    
3.  **Alert Generation:** Filters threats based on severity thresholds.
    
4.  **Blockchain Logging:** Stores validated alerts in an AuditLog smart contract (Solidity).
    
5.  **Frontend Visualization:** Displays attack info, severity levels, and blockchain hashes using React.js.
    

**4\. Technical Specifications**
--------------------------------

**ComponentSpecificationOperating System**

Linux (Ubuntu)

**Intrusion Detection**

Wazuh

**Blockchain**

Ethereum (Ganache)

**Smart Contracts**

Solidity (Hardhat)

**Backend**

Python / Flask

**Frontend**

React.js

**Deployment**

Docker / Docker Compose

**5\. Conclusion**
------------------

The integration of host-based intrusion detection with immutable blockchain logging addresses the critical limitations of conventional security architectures in telehealth. This solution provides reliable audit trails and enhances trust among healthcare providers and patients by ensuring data integrity and forensic readiness.

