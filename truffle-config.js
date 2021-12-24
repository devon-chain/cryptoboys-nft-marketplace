require("babel-register");
require("babel-polyfill");
var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "";
const dhobyghautNetwork = "https://testnet-fx-json-web3.functionx.io:8545"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    dhobyghaut: {
      provider: function () {
        return new HDWalletProvider(mnemonic, dhobyghautNetwork);
      },
      gasPrice: 4000000000000,
      network_id: "90001", // Match any network id
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "pragma",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
