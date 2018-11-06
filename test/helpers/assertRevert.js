/* README - debug
* have come across two different version of assertRevert() from Zeppelin,
* most likely part of natural evolution of codebase. I'm leaving both in here 
* for now as I'm getting mixed behaviors: old one works with Vote.test.js, new 
* one is supposed to be for crowdsale stuff.
*/

// ####
// old version
// ####

export default async promise => {
  try {
    await promise;
    assert.fail('Expected revert not received');
  } catch (error) {
    const revertFound = error.message.search('revert') >= 0;
    assert(revertFound, `Expected "revert", got ${error} instead`);
  }
};

// ####
// new version
// ####

// const should = require('chai')
//   .should();

// async function assertRevert (promise) {
//   try {
//     await promise;
//   } catch (error) {
//     error.message.should.include('revert', `Expected "revert", got ${error} instead`);
//     return;
//   }
//   should.fail('Expected revert not received');
// }

// module.exports = {
//   assertRevert,
// };
