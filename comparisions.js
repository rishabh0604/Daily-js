/*Comparison operators, such as greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them. These return a boolean value in the output.*/


/*Strict Equality v/s Loose Equality
Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.

Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.*/



console.log(5 > 1);  // output ; True
console.log(2 == 1); // output : false
console.log(2 != 1); // output : True

// Assigning comparision in a variable

let result = 2 < 5;
console.log(result); // output : true

//Comparision of diffrent types

console.log("2" > 1);  //output : True, "2" becomes number
console.log("01" == 1);  //output : True, "01" becomes number

//For boolean values, true becomes 1 and false becomes 0.

console.log(true == 1);  //output: True
console.log(false == 0); //output: True

//Strict equality using === 

const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num);  // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

//Loose equality using ==

const number = 0;
const big = 0n;
const string1 = "0";
const object = new String("0");

console.log(number == string1); // true
console.log(big == number); // true
console.log(string1 == big); // true

console.log(number == object); // true
console.log(big == object); // true
console.log(string1 == object); // true