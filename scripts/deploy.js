const hre = require("hardhat");

async function main() {
  let Instance = await hre.ethers.getContractFactory("BasicToken");
  const BasicToken = await Instance.deploy();

  await BasicToken.deployed();

  console.log("BasicToken deployed to:", BasicToken.address);

  Instance = await hre.ethers.getContractFactory("BasicSwap");
  const BasicSwap = await Instance.deploy(BasicToken.address);

  console.log("BasicSwap dpeloyed to: ", BasicSwap.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
