const EthSwap = artifacts.require("EthSwap");
// migrations to put the projetc on the blockchain
const MockDaiToken = artifacts.require("MockDaiToken");
module.exports = async function(deployer) {
deployer.deploy(MockDaiToken);
const token = await MockDaiToken.deployed();
deployer.deploy(EthSwap);
const ethSwap = await EthSwap.deployed();
await token.transfer(ethSwap.address, '10000000000000000000')
};
