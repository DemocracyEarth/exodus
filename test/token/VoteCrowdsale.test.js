import {TestApp } from 'zos';

const { ether } = require('../helpers/ether');
const { expectThrow } = require('../helpers/expectThrow');
const { EVMRevert } = require('../helpers/EVMRevert');
const { assertRevert } = require('../helpers/assertRevert');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

const VoteCrowdsale = artifacts.require('VoteCrowdsale');
const Vote = artifacts.require('Vote');

contract('VoteCrowdsale', function ([_, wallet, testAddress, owner, purchaser]) {
  // const rate = new BigNumber('1.2e-19');
  const rate = new BigNumber(1);
  const cap = ether(346821);
  const lessThanCap = ether(208093);
  // const tokenSupply = new BigNumber('5e26');
  const tokenSupply = new BigNumber(500000000);
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
  
  beforeEach(async function () {
    this.token = await Vote.new(owner);
    // this.app = await TestApp({ from: testAddress })
    // this.token = await this.app.createProxy(Vote, 'Vote', 'initialize', [owner]);
  });

  it('requires a non-null token', async function () {
    await assertRevert(
      VoteCrowdsale.new(rate, wallet, ZERO_ADDRESS, cap)
    );
  });

  it('rejects a cap of zero', async function () {
    await expectThrow(
      VoteCrowdsale.new(rate, wallet, this.token.address, 0),
      EVMRevert,
    );
  });

  context('with crowdsale', function () {
    beforeEach(async function () {
      this.crowdsale = await VoteCrowdsale.new(rate, wallet, this.token.address, cap);
      await this.token.transfer(this.crowdsale.address, tokenSupply);
    });

    describe('accepting payments', function () {
      it('should accept payments within cap', async function () {
        await this.crowdsale.send(cap.minus(lessThanCap));
        // await this.crowdsale.send(lessThanCap, { from: purchaser });
      });

      // it('should reject payments outside cap', async function () {
      //   await this.crowdsale.send(cap);
      //   await expectThrow(
      //     this.crowdsale.send(1),
      //     EVMRevert,
      //   );
      // });

      // it('should reject payments that exceed cap', async function () {
      //   await expectThrow(
      //     this.crowdsale.send(cap.plus(1)),
      //     EVMRevert,
      //   );
      // });
    });

    // describe('ending', function () {
    //   it('should not reach cap if sent under cap', async function () {
    //     await this.crowdsale.send(lessThanCap);
    //     (await this.crowdsale.capReached()).should.equal(false);
    //   });

    //   it('should not reach cap if sent just under cap', async function () {
    //     await this.crowdsale.send(cap.minus(1));
    //     (await this.crowdsale.capReached()).should.equal(false);
    //   });

    //   it('should reach cap if cap sent', async function () {
    //     await this.crowdsale.send(cap);
    //     (await this.crowdsale.capReached()).should.equal(true);
    //   });
    // });
  });
});