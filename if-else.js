/*The “if” statement

The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.*/

let year = prompt("In which year you was born?", "");
if (year == 2000) {alert("You are right!")};


let age = 25;
if (age == 22){
    console.log("U are Right");
}


/*The “else” clause

The if statement may contain an optional else block. It executes when the condition is falsy.*/

let birthYear = 2000;
if ( birthYear  == 2000){
    console.log("You guessed it Right")
}else{
    console.log("How you can be so wrong?")
}


let newYear = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (newYear == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}


/*Several conditions: “else if”

Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.*/

let dob = prompt('In which year u were born?', '');

if (dob < 2015) {
  alert( 'Too early...' );
} else if (dob > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}




