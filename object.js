// let user = {    // an object
//     name: "Rishabh",   // by key "name" store value
//     age: 25     // by key "age" store value
// };
// console.log(user);

// // get property values of the object:
// console.log(user.age);

// // To remove a property, we can use the delete operator:
// delete user.age;
// console.log(user);


// Property value shorthand

// function makeUser(name,age){
//     return {
//         name: name,
//         age: age
//     };
// }
// let user = makeUser("Rishu", 25);
// console.log(user);


// Property existence test, “in” operator

// let user = { name: "John", age: 30 };
// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user ); // false, user.blabla doesn't exist

// Square brackets

// let user = {
//     name: "Rishabh",
//     age: 25
// };

// let key = prompt("What do you want to know about the user?", "name");
// alert(user[key]);