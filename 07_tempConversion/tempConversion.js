const convertToCelsius = function(tempInF) {

  let tempInC = Math.round((tempInF - 32) * (5/9) * 10)/ 10;
  return tempInC;

};

const convertToFahrenheit = function(tempInC) {

  let tempInF = Math.round(((tempInC * 9)/5 + 32) * 10) / 10;
  return tempInF;
  
};

convertToCelsius(32);
convertToFahrenheit(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// x °C ≘ (x × ⁠9/5 + 32) F

// 	x °F ≘ (x − 32) × 5/9 C ⁠