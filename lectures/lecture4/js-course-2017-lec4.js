// BASIC FUNCTION

// function hello(name) {
//   console.log(name);
// }

// hello("Masters Academy");

// let greeting = function(name) {
//   console.log("Привет", name);
// }

// greeting("Masters Academy");

// const greeting = (name, lastName) => {
//     console.log("Привет", name + lastName);
// }

// greeting("Masters", "Academy");


//
// Return
//


// const myFunc = (value) => {
//   return console.log(value);
//   console.log('value');
// };

// myFunc(5);

// THIS

// const greeting = (name) => {
//     console.log("Привет", name, this);
// }

// const greeting = function(name) {
//     console.log("Привет", name, this);
// }

// greeting("Masters Academy");

// const greeting = function(name) {
//     console.log("Привет", name, this);
// }

// greeting('Masters Academy');


// const multiply = function(a, b) {
//     return a * b;
// }

// const multiply2 = a => a

// if (sdasdas) return sdasds;

// multiply(6,6);
// multiply2(5,5);

// const myFunction = multiply(3,4);


// function calculate(a, b, func) {
//     return func(a, b)
// }

// console.log( calculate( 3, 4, multiply ) )

// multiply(multiply(3,4),4);


//
// IIFE (immediately-invoked function expression)
//


// (function() {

//     const myName = "Aleksandr";

//     const multiplyTwo = (a) => {
//         console.log(a * 2);
//     }

//     multiplyTwo(10);

// })();

// console.log(myName);

// multiplyTwo(10);


//
// Closure
//


// function initName() {
//     const name = 'Masters'; // name is a local variable created by initName

//     return function displayName() { // displayName() is the inner function, a closure
//         const last = 'Academy';
//         console.log(name + ' ' + last); // use variable declared in the parent function
//     }

//     console.log(last);

//     displayName();
// }

// const displayName = initName();
// displayName()


//
// ARRAY
//

// var aa = [];

// var aa = ['first', 'second', 'third'];
// var aa = [2,2,3];
// var bb = new Array(1, 2, 3);
// var cc = new Array(3);

// console.log(cc);

var exampleArray = ['iPhone', 'Samsung', 'Vertu', 'Sony'];

// console.log(exampleArray.length);

// var first = exampleArray[1];

// console.log(first);

// var last = exampleArray[exampleArray.length - 1];

// console.log(last);

// exampleArray.forEach(function(item, index, array) {
//     console.log(item, index);
// });

// var newLength = exampleArray.push('Nokia');

// var last = exampleArray[exampleArray.length - 1];

// console.log(exampleArray);

// var removeLast = exampleArray.pop();

// console.log(removeLast);

// console.log(exampleArray);

// var removeFirst = exampleArray.shift();

// console.log(exampleArray);

// console.log(exampleArray);

// var position = exampleArray.indexOf('Vertu');

// console.log(exampleArray);

// var removedItem = exampleArray.splice(2, 2);
// pos defines position in array
// n defines the number of items to be removed

// console.log(exampleArray);

// var arrayCopy = exampleArray.slice();

// console.log(arrayCopy);
const rfdsfdesult = exampleArray;
const saveArr = exampleArray;
 exampleArray = [
    'Siemens',
    ...exampleArray
]
exampleArray.push('test')
console.log(saveArr)
console.log(exampleArray)
console.log(saveArr)
const result = exampleArray
    .filter( v => v === 'iPhone')
    .map( (value, index, array) => value.toUpperCase() );

// console.log(exampleArray);
// console.log(result);


const re = [4,6,8].reduce((sum, v) => sum + v, 0)

console.log(re);



//

const cardNubmer = '1234 1234 1234 1234';

function checkCard(number){
    return true/false;
}

checkCard(cardNubmer);

//
//
//

// ['Siemens', 'iPhone', 'Samsung', 'Vertu', 'Sony', 'test']

// m
// a


