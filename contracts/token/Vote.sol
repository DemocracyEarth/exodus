pragma solidity ^0.4.21;
import "openzeppelin-zos/contracts/token/ERC20/DetailedPremintedToken.sol";

contract Vote is DetailedPremintedToken {
    string private constant name = "Democracy Earth Vote Token";
    string private constant symbol = "VOTE";
    uint8 private constant decimals = 18;
    uint256 private constant INITIAL_SUPPLY = 500000000;

    function initialize(address initialAccount) public isInitializer("Vote", "0")  {
        DetailedPremintedToken.initialize(initialAccount, name, symbol, decimals, INITIAL_SUPPLY);
    }
}