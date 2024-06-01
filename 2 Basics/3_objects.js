// singleton
// object.create

// object literals

const mySym = Symbol("key1") // Symbol
const jsUser = {
    name: "Sanjoy",
    "full name": "Sanjoy Saha",
    [mySym]: "mykey1", // Symbol
    age:18,
    location:"Kol",
    email:"sanjoy@f",
    isLoggedIn:false,
    lastLogIn : ["ll", "lllk"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "sanjoy@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "sa@gmail.com"
// console.log(jsUser);

jsUser.greet = function(){
    console.log("Hello World");
}

jsUser.greetTwo = function(){
    console.log(`Hello World, ${this.name}`);
}

console.log(jsUser.greet());
console.log(jsUser.greetTwo());