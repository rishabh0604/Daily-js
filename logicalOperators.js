/*Logical operators

There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.*/


// AND (&&)

/*The logical AND operator is denoted by '&&'. It is used to evaluate whether both of the given expressions or operands are true. It returns true only if both expressions or operands are true. If any one of the expressions or operands is false or evaluates to 0, the logical AND operator returns false.*/

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false);  // false


let hour = 12;
let minute = 30;

if (hour == 12 && minute ==30){
    console.log("The time is 12.30");
}


let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0
 

//OR (||)

/*The logical OR operator is denoted by '||'. It is used to evaluate whether any one of the given expressions or operands is true. It returns false only if both expressions or operands are false. If any one of the expressions or operands is true or evaluates to 1, the logical OR operator returns true.*/

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false


let time = 9;

if (time < 10 || time > 18) {
  console.log( 'The office is closed.' );
}


let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}


//NOT (!)
/*The logical NOT operator is denoted by '!'. It is used to make truthy values falsy and vice-versa. It returns false if input is a true.*/

let alert4 = false;
let alert5;
let alert6 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!alert4);      // true
console.log(!alert5);      // true
console.log(!alert6);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false