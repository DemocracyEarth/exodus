pragma solidity ^0.4.24;
import "openzeppelin-eth/contracts/token/ERC20/StandaloneERC20.sol";

contract Vote is StandaloneERC20 {
    string private constant _name = "Democracy Earth Vote Token";
    string private constant _symbol = "VOTE";
    uint8 private constant _decimals = 18;
    uint256 private constant _INITIAL_SUPPLY = 100000000 * 10**uint256(_decimals);
    address[] _minters;
    address[] _pausers;

    function initialize(address initialAccount) public initializer {
        StandaloneERC20.initialize(_name, _symbol, _decimals, _INITIAL_SUPPLY, initialAccount, _minters, _pausers);
    }
}