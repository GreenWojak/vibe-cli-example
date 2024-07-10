// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

contract Counter {
  uint public number;

  function setNumber(uint newNumber) public {
    number = newNumber;
  }

  function increment() public {
    number++;
    emit Change(number);
  }

  function decrement() public {
    number--;
    emit Change(number);
  }

  event Change(uint _value);
}