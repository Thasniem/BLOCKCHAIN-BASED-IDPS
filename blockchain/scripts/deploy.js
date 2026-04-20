const hre = require("hardhat");

async function main() {
    console.log("Deploying AuditLog contract...");

    const AuditLog = await hre.ethers.getContractFactory("AuditLog");
    const auditLog = await AuditLog.deploy();

    // Ethers v6 FIX
    await auditLog.waitForDeployment();

    const address = await auditLog.getAddress();
    console.log("AuditLog deployed to:", address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
