// task 1 
const variable1 = 'Hello';
const variable2 = 'World';

const newVariable = `${variable1} ${variable2}`
console.log(`it's a task number 1 ${newVariable}`);

// task 2 
const multiply = (x, y = 1) => {return x * y};
const result = multiply(2);
console.log(result);

// task 3
const avarage = (...args) => {
  
    const sum = args.reduce((a, b) => a + b, 0);
    console.log(sum / args.length); // 6
}
avarage(1,2,3,4,5,6);

// task 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
avarage(...grades);

// task 5 
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName , , lastName ] = data
console.log(`${firstName} and ${lastName}`)


