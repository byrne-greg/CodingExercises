module.exports = function changeInCoins(pennies, denominations) {
  let leftoverChange = pennies;
  let changeInCoins = [];

  function removeCoins(
    coinValueInPennies,
    typeOfCoinDesc,
    leftoverChange,
    changeInCoins
  ) {
    const numOfCoinType = Math.floor(leftoverChange / coinValueInPennies);
    changeInCoins.push([numOfCoinType, typeOfCoinDesc]);
    return leftoverChange - numOfCoinType * coinValueInPennies;
  }

  denominations.sort((a, b) => {
    if (a.pennyAmount > b.pennyAmount) {
      return -1;
    } else if (a.pennyAmount < b.pennyAmount) {
      return 1;
    } else {
      return 0;
    }
  });

  denominations.forEach(coinType => {
    if (leftoverChange >= coinType.pennyAmount) {
      leftoverChange = removeCoins(
        coinType.pennyAmount,
        coinType.description,
        leftoverChange,
        changeInCoins
      );
    }
  });

  return changeInCoins;
};
