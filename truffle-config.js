'use strict';
require('babel-register');
require('babel-polyfill');

/* README - debug
* have played around with `gas` and `gasPrice`,
* adding the `solc`, all attempts to solve gas 
* issues.  
*/

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 5,
      gasPrice: 10000000000000000000000,
      network_id: '*'
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};