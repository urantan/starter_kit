//main entry file to the project
require('babel-register');
require('babel-polyfill');

//dev network gnashe
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  //compiler used to compile smart contracts and where they are in the projects
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        version: "0.7.4",
        enabled: true,
        runs: 200
      }
    }
  }
}
