pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";


contract SimpleCappedCrowdsale is CappedCrowdsale {

    constructor (
        uint256 rate,
        address wallet,
        IERC20 token,
        uint256 cap
    )
        public
        Crowdsale(rate, wallet, token)
        CappedCrowdsale(cap)
    {
    }

}
