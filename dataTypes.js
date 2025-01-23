// There are primarily five primitive datatypes :

// Numbers
// Strings
// Boolean
// Undefined
// Null


//Numbers

let integerNumber = 50;
console.log(typeof(integerNumber));  //number

let floatNumber = 2.14;
console.log(floatNumber);  //number

let output = integerNumber + floatNumber;
// Result will be a floating number
console.log(output);


// Strings

let str1 = "Rishu";
console.log(str1);

let str2 = "Rishabh";
console.log(typeof(str2));

//Boolean

let isSleeping = 'true';
let isRunning = 'false';

if(isSleeping){
    console.log("He is Sleeping");
}else{
    console.log("He is Running");
}


let x = 10;
let y = 10;

let isGreater = x > y;
console.log(isGreater);


//Undefined

let range;
console.log(range);


//Null

let work = null;
console.log(work);
console.log(typeof(work));