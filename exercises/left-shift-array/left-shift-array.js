module.exports = function leftShiftArray(array) {
  function swap(indexA, indexB, array) {
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  let numOfShifts = 0;

  let isSwapping = true;
  while (isSwapping) {
    isSwapping = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > i + 3) {
        numOfShifts = "Too chaotic";
        break;
      }

      while (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        numOfShifts++;
        isSwapping = true;
      }
    }
  }

  return numOfShifts;
};
