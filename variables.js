// A variable is a "named storage" for data. 

// var

// The var keyword was the traditional way of declaring variables in JavaScript. 
// Variables declared with var are function-scoped or globally-scoped, but not block-scoped. 
// This means that variables declared with var are hoisted to the top of their function or global scope. 

var age  = 25;

if(true){
    console.log(age); 
}


function example(){
   var x = 10;
   console.log(x);
}
example();
console.log(x); // Throws ReferenceError: x is not defined


// Re assignment using var

var num = 15;
console.log(num);   // output : 15

num = 22;
console.log(num);  // output : 22


// let

// The let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined.
// Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.


let x = 22;
if (true){
let y = 20;
console.log(x);   // OUTPUT : 22
console.log(y);   // OUTPUT : 20
}
console.log(x);    // output : 22
console.log(y);    // output : Error : y is not defined


// Reassignment using let

let x = 10;
console.log(x); // output : 10

x = "Rishabh"
console.log(x);  // Rishabh


// const

// The const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized.
// This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

const marks = (43);
console.log(marks);

marks = (55);
console.log(marks);  // output : error



const person = {
    name : "Rishabh",
    age : 25
};
console.log(person.name);  // output : "Rishabh"
console.log(person.age);   // output : 25

// Modefying object properties is allowed
person.name = "Rishu"
console.log(person.name);   // output : Rishu

