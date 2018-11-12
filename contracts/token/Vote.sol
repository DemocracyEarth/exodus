pragma solidity ^0.4.24;
import "openzeppelin-eth/contracts/token/ERC20/StandaloneERC20.sol";

contract Vote is StandaloneERC20 {
    string public _name;
    string public _symbol;
    uint8 public _decimals;
    uint256 public _INITIAL_SUPPLY;
    address[] _minters;
    address[] _pausers;

    function initialize(address initialAccount) public initializer {
        _name = "Democracy Earth Vote Token";
        _symbol = "VOTE";
        _decimals = 18;
        _INITIAL_SUPPLY = 100000000 * 10**uint256(_decimals);

        StandaloneERC20.initialize(_name, _symbol, _decimals, _INITIAL_SUPPLY, initialAccount, _minters, _pausers);
    }
}