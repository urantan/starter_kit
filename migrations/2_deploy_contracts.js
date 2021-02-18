const MockDaiToken = artifacts.require("MockDaiToken");

const EthSwap = artifacts.require("EthSwap");
// migrations to put the projetc on the blockchain
module.exports = async function(deployer) {
    //deploy mockdai
    await deployer.deploy(MockDaiToken);
    const token = await MockDaiToken.deployed()

    //deply ethswap
    await deployer.deploy(EthSwap);
    const ethSwap = await EthSwap.deployed()

    //transfer all token to ethswap
    await token.transfer(ethSwap.address, '100000000000000000000000')
};
