'use strict';
require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");

/* README - debug
* have played around with `gas` and `gasPrice`,
* adding the `solc`, all attempts to solve gas 
* issues.  
*/

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
    }
  },
};