module.exports = function countingValleys(n, s) {
  const journey = s.split("");
  let altitude = 0;
  let valleys = 0;
  for (var step = 0; step < journey.length; step++) {
    if (journey[step] === "U") {
      if (altitude === -1) {
        ++valleys;
      }
      altitude++;
    } else if (journey[step] === "D") {
      altitude--;
    }
  }

  return valleys;
};
