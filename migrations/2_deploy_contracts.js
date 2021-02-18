const EthSwap = artifacts.require("EthSwap");
// migrations to put the projetc on the blockchain
module.exports = function(deployer) {
  deployer.deploy(EthSwap);
};
