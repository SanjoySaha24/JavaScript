// IIFE stands for Immediately Invoked Function Expression. 
// It is a design pattern in JavaScript where a function is defined and 
// executed immediately after it's declared.
// Used to remove global scope pollution

// Using function keyword
(function() {
    // function body
})();

// Using arrow function
(() => {
    // function body
})();


(function chai(){
    console.log(`DB connected`);
})();


(() =>{
console.log("lol");
})();


((name) =>{
    console.log(`hi ${name}, DB connected`);
})('Sanjoy')