const Migrations = artifacts.require("Migrations");
// migrations to put the projetc on the blockchain
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
