// Nullish coalescing operator'??' 

/*The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.*/


let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)



let user2 = "John";

console.log(user2 ?? "Anonymous"); // John (user is not null/undefined)



let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder