var MetaCoin = artifacts.require("./EmploymentContract.sol");

module.exports = function(deployer) {
  deployer.deploy(MetaCoin);
};
