// let user = {
//     fName: "Rishabh",
//     age: 25
// };
// user.sayHi = function(){
//     console.log(this.fName);
//     console.log(this.age);
// };

// user.sayHi();

// Arrow functions have no “this”

// let user = {
//   firstName: "Ilya",
//   lastName: "Devi",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya


// creating calculator

let calculator = {
    sum(){
        return this.a + this.b;
    },
    sub(){
        return this.a - this.b;
    },
    read(){
        this.a = +5;
        this.b = +5;
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.sub());
