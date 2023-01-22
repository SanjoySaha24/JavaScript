// types of function
// function statement
// define

// function sayHello(param){
//     console.log("Hello",param)
    // if no value passed, undefined is passed
//}

// function invocation
// sayHello("10")
// console.log("-------------------------");
// sayHello("Hello")
// console.log("-------------------------");
// sayHello([1,2,3,4,5])
// console.log("-------------------------");
// sayHello({name: "Sanjoy"});
// console.log("-------------------------");

//-----------------------------------------------------------
// Functions are treated as Variables

// let a=[1,2,3,4,5]
// let b=a
// console.log(b)
//-----------------------------------------------------------

// Function expression

// let fnContainer = function fn(){
//     console.log("I am expression")
// }
// fnContainer()
//-----------------------------------------------------------

// IIFE ~ Immediately invoked Function Expression

// (function fn(){
//     console.log("I am happy")
//     console.log("Have to work Hard")
// })()
// OUTPUT ~ I am happy
//          Have to work Hard

//-----------------------------------------------------------

// Arrow Function
// let fn = num => num * num
// console.log(fn(5))
//-----------------------------------------------------------

//First Class Citizen ~ functions are treated as variables
                        // 1. assignment -> fn expression
                        // variable can be passed as a parameter
                        // 2. function can be passed as a parameter
                        // variable can be returned from a function
                        // 3. function cna be returned from a function

function sayHello(param){
    console.log("hello", param)
    param()
    return "jklmn"
}
//address
function smaller(){
    console.log("Hello I am smaller")
}
let rVal = sayHello(smaller)
console.log(rVal)