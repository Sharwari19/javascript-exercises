const add = function(num1, num2) {

  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {

  return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(base, power) {

  let result = 1;

  for(let i = 0; i < power; i++)
  {
    result = base * result;
  }

  return result;


  // return Math.pow(base, power);
	
};

const factorial = function(num) {

  let result = 1;

  if(num === 0)
  {
    return result;
  }

  for(let i = num; i > 0; i--)
  {
    result = result * i;
  }

  return result;
};

// add(30, 45);
// subtract(31, 9);
// sum(100, 67);
// multiply(4, 8);
// power(10, 9);
// factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
