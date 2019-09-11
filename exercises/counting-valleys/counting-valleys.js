module.exports = function countingValleys(n, s) {
  const journey = s;
  const totalSteps = n;
  let altitude = 0;
  let valleys = 0;
  for(var step = 0; step < totalSteps; step++) {
     
      if(journey.charAt(step) === 'U') {
          if(altitude === -1) {
              ++valleys;
          }
          altitude++;
      } else if(journey.charAt(step) === 'D') {  
          altitude--;
      }        
  }
  
  return valleys;

};
