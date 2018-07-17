'use strict';

// task 1 
var variable1 = 'Hello';
var variable2 = 'World';

var newVariable = variable1 + ' ' + variable2;
console.log('it\'s a task number 1 ' + newVariable);

// task 2 
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
var result = multiply(2);
console.log(result);

// task 3
var avarage = function avarage() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = args.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum / args.length); // 6
};
avarage(1, 2, 3, 4, 5, 6);

// task 4 
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
avarage.apply(undefined, grades);

// task 5 
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName + ' and ' + lastName);
