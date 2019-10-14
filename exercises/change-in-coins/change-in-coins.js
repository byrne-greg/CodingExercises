module.exports = function changeInCoins(pennies) {
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

  // 2 euro coins
  if (leftoverChange >= 200) {
    leftoverChange = removeCoins(200, "2-Euro", leftoverChange, changeInCoins);
  }

  // 1 euro coins
  if (leftoverChange >= 100) {
    leftoverChange = removeCoins(100, "1-Euro", leftoverChange, changeInCoins);
  }

  // 50 cent coins
  if (leftoverChange >= 50) {
    leftoverChange = removeCoins(50, "50-cent", leftoverChange, changeInCoins);
  }

  // 20 cent coins
  if (leftoverChange >= 20) {
    leftoverChange = removeCoins(20, "20-cent", leftoverChange, changeInCoins);
  }

  // 10 cent coins
  if (leftoverChange >= 10) {
    leftoverChange = removeCoins(10, "10-cent", leftoverChange, changeInCoins);
  }

  // 5 cent coins
  if (leftoverChange >= 5) {
    leftoverChange = removeCoins(5, "5-cent", leftoverChange, changeInCoins);
  }

  // 2 cent coins
  if (leftoverChange >= 2) {
    leftoverChange = removeCoins(2, "2-cent", leftoverChange, changeInCoins);
  }

  // 1 cent coins
  if (leftoverChange >= 1) {
    leftoverChange = removeCoins(1, "1-cent", leftoverChange, changeInCoins);
  }

  return changeInCoins;
};
