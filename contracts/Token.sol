//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Token {
    //variables
    string public name = "Azul";
    string public symbol = "AZL";
    uint256 public totalSupply = 10000;
    address public owner;

    //mapping
    mapping(address => uint256) balances;

    //constructor
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
