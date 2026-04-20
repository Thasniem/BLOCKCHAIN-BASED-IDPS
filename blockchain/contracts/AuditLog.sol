// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AuditLog {
    struct Alert {
        string alertHash;
        uint256 timestamp;
        string severity;
    }

    Alert[] public alerts;

    event AlertAdded(string alertHash, uint256 timestamp, string severity);

    function addAlert(string memory _hash, string memory _severity) public {
        alerts.push(Alert(_hash, block.timestamp, _severity));
        emit AlertAdded(_hash, block.timestamp, _severity);
    }

    function getAlertCount() public view returns (uint256) {
        return alerts.length;
    }
}
