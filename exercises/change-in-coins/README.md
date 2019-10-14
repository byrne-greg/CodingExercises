# Change in Coins

## Problem Statement:

Gary works at a penny-exchange stall. Every day, customers come to him with bags of pennies and exchanges them for the largest denomination coins he can offer.

Complete a function that calculates the minimum number of coins needed to exchange for the penny amount. It allows for an integer value of pennies and returns a multi-dimensional array of value pairs consisting of (a) the number of coins of that denomination, and (b) the denomination description.

## Examples:

Input: 
```
pennies = 137, [ { description: "10-cent", pennyAmount: 10}, {description: "5-cent, pennyAmount: 5}, {description: "2-cent", pennyAmount: 2}, {description: "1-cent", pennyAmount: 1} ]
```
Output: 
```
[[13, "10-cent"], [1, "5-cent"], [1, "2-cent"], [1, "1-cent"]]
```

## Function Description

Complete the `changeInCoins` function. It must return a returns a multi-dimensional array of value pairs consisting of (a) the number of coins of that denomination, and (b) the denomination description.

`changeInCoins` has the following parameter(s):

```
pennies: the integer value of pennies to exchange
denominations: array of objects where each consists of:
      description: the string text description of the coin denomination
      pennyAmount: the integer value of the coin denomination in pennies
```