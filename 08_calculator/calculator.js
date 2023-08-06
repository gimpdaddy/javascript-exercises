const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let sum = 0;
  for (element of array) {
    sum += element;
  }
  return sum;
  };

const multiply = function(array) {
	let sum = 1;
  for (element of array) {
    sum *= element;
  };
  return sum;
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(fact) {

  let result = 1;

  if (fact === 0) return result;

  for (i = 0; i < fact; i++) {
    result *= (fact - i);
  }

  return result;

};

// 5! = 5 * (5-1) * (5-2) * (5-3) * (5-4)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
