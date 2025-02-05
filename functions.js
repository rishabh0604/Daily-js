// function msg() {
//     alert("Hello World");
// }
// msg();


// function google(){
//     console.log("Hello")
// }
// google();


// function greet(name){
//     console.log(`Namaste ${name}`)
// }
// greet("Raaj");


// function table(count){
//     for(let i=1; i<=10; i++){
//         console.log(i*count);
//     }
// }
// table(3);


// Local variables

// A variable declared inside a function is only visible inside that function.

// function showMessage(){
//     let message = "Hello, I'am Rishabh!";
//     console.log(message);
// }
// showMessage();  // prints: Hello I'am Rishabh!
// console.log(message);   // <-- Error! The variable is local to the function



// let username = "Rishabh";
// function showMessage(){
//     username = "Rishu"  // changed the outer variable

//     let message = " Hello " + username;
//     console.log(message);
// }
// console.log(username);  // Rishabh before the function call
// showMessage();
// console.log(username); // Rishu, the value was modified by the function



// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// console.log( userName ); // John, unchanged, the function did not access the outer variable


// Parameters
// We can pass arbitrary data to functions using parameters.

// function showMessage(from, text){
//     console.log(from + " : " + text);
// }
// showMessage("Rishu", "Hello!");
// showMessage('Rishu', "How are u?");



// Returning a value

// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:


// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 5);
// alert( result ); // 3



// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return confirm("Do you have permission from your parents?");
//     }
// }
// let age = prompt("How old are you?, 18 ");
// if( checkAge(age)){
//     alert("Access granted");
// }else{
//     alert("Access denied")
// }

