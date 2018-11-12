pragma solidity ^0.4.24;
import "zos-lib/contracts/Initializable.sol";
import "openzeppelin-eth/contracts/token/ERC20/StandaloneERC20.sol";

contract Vote is Initializable {
    StandaloneERC20 public token;
    
    function initialize(StandaloneERC20 _token) public initializer {
        token = _token;
    }
}
