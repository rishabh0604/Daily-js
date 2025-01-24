// Automatic conversion by javascript

let num1 = "6" + null;
console.log(num1);
// output : 6null    : typeof  - string


let num2 = 5 + null;
console.log(num2);
// output : 5    : typeof  - number



let num3 = "5" + 5;
console.log(num3);
// output : 55    : typeof  - string
// (+) sign is used for concatinate two strings,  thats why "5" and num 5 concatinate together and the output is 55(typeof string)



let num4 = 5 - 5;
console.log(typeof num4,num4);
// output : 0   : typeof  - number



let num5 = 5 + 5;
console.log(typeof num5,num5);
// output : 10   : typeof  - number


let num6 = "2" + "3";
console.log(typeof num6, num6);
// output : 23    : typeof  - string



let num7 = "2" * "3";
console.log(typeof num7, num7);
// output : 6   : typeof  - number



let num8 = "2" * "no";
console.log(typeof num8, num8);
// output : NaN (Not a Number)  : typeof  - number

// There are three type of conversion in javascript
//1. String()
//2. Number()
//3. Boolean()

// converting number into string

let type1 = 5;
console.log(typeof type1, (type1));

let newType1 = String(type1);
console.log(typeof newType1, type1);

// Converting Boolean into string

let result = true;
console.log(typeof result);
// output : boolean

let newResult = String(result);
console.log(typeof newResult);
// output : string


// Converting string into number

let type2 = "25";
console.log(typeof type2); // output  : string

let newType2 = Number(type2);
console.log(typeof newType2);  // output : Number



let type3 = "Hello";
console.log(typeof type3); // output  : string

let newType3 = Number(type3);
console.log(newType3);  //  NaN    .....here "Hello" is converted as NaN and NaN will be considered as Number
console.log(typeof newType3);  // output : Number


//Converting Boolean into Number

let type4 = true;
console.log(typeof type4);

let newType4 = Number(type4);
console.log(newTypee4);
console.log(typeof newType4);  


// Converting Number into Boolean


let type5 = 11;
console.log(typeof type5);

let newType5 = Boolean(type5);
console.log(newType5);
console.log(typeof newType5);  

// Converting string into boolean


let type6 = "Rishabh "; // boolean value of empty string is false and anything present inside string will be true
console.log(typeof type6);

let newType6 = Boolean(type6);
console.log(newType6);
console.log(typeof newType6);  
