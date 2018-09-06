pragma solidity ^0.4.21;
import "openzeppelin-zos/contracts/token/ERC20/DetailedPremintedToken.sol";

contract Vote is DetailedPremintedToken {
    string private constant name = "Democracy Earth Vote Token";
    string private constant symbol = "VOTE";
    uint8 private constant decimals = 4;
    uint256 private constant INITIAL_SUPPLY = 20000000 * 10**uint256(decimals);

    function initialize(address initialAccount) public isInitializer("Votest", "0")  {
        DetailedPremintedToken.initialize(initialAccount, name, symbol, decimals, INITIAL_SUPPLY);
    }
}