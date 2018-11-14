'use strict';
require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic;

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      network_id: '*'
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b1825422de3d471eba20968cf22b85f1")
      },
      network_id: 4
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/1158c2468d8f4826b05ff6997368fdd4")
      },
      network_id: 3,
      gasPrice: 1000000000,
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/b1825422de3d471eba20968cf22b85f1")
      },
      network_id: 42,
      gasPrice: 2,
    }
  },
};