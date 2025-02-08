// let user ={ name: "Rishabh"};
// let admin = user;
// console.log(admin);



// let user = {
//     name: "Rishabh",
//     age: 25
// };
// let admin = user;
// admin.name = "Rishu";  // changed by the admin
// console.log(user);


//   let obj ={
//     age:25,
//     wt:56,
//     ht:180
//   };
// console.log(obj);
// obj.color = "red"
// console.log(obj);


//Object cloning
// There are three ways to clone object

// Spread operator

// let src ={
//     name: "Rishabh",
//     age: 25,
//     wt:56
// };
// let dst = {...src};
// src.age = 22;  // changing age of src

// console.log("src:", src);
// console.log("dst:", dst);


// Assogn method

// let src = {
//     name: "Rishabh",
//     age: 25,
//     wt:56
// };
// let dest = Object.assign({},src);
// src.name = "Rishu";
// console.log(src);
// console.log(dest);


// let src = {
//     name: "Rishabh",
//     age: 25,
//     wt:56
// };

// let src2 ={
//     value:120,
//     fname: "Rishabh kumar"
// };

// let dest = Object.assign({},src, src2);
// console.log(src);
// console.log(dest);


// Iteration method


// let src = {
//     name: "Rishabh",
//     age: 25,
//     wt:56
// };
// let dest = {};
// // cloning using iteration
// for (let key in src){
//    let newKey = key;
//    let newValue = src[key];
//    // insert newKey and value in dest and create a clone
//    dest[newKey] = newValue;
// };
// src.name = "Rishu";  // changing src name
// console.log(src);
// console.log(dest);