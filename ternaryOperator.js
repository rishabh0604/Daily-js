// Ternary Operators

/*Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript. It is also known as conditional operator. It has three parts: a condition, statement to execute if the condition is true and the statement to execute if the condition is false.*/

//SYNTAX : (condition) ? (statement1) : (statement2);

let age = 15;
let status1 = (age > 18) ? "I can vote" : "I cannot vote";
console.log(status1);

//Multiple "?"

let age2 = 3;
let message = (age2 <= 3) ? `"Hi Baby"` : (age2 < 18) ? ("Hello!") : (age2 < 100) ? "Greetings!" : "What an unsual age!";
console.log(message);

//Non-traditional use of ‘?’

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');


let capital =  prompt("What is the capital of india?", "");
(capital == "Delhi") ? 
alert("Right") : alert("Wrong");   