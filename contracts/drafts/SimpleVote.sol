pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SimpleVote is ERC20 {

  string public constant name = "SimpleVote";
  string public constant symbol = "SIM";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

}
