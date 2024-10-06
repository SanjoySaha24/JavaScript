// "use strict"

// this in global space
console.log(this); // globalObject - window, global
 
// this inside a function
function x(){
    // this inside functional space
    // value depends on strict / non strict mode
    console.log(this);
}
x()
// this inside non-strict mode - (this substitution)
// in strict mode, value of this in function is undefined

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in strict mode

// this keyword value depends on how this is called (window)

x() // undefined
window.x() // window

// this inside a object's method
const obj = {
    a: 10,
    x: function(){
        console.log(this.a);
        
    }
}
obj.x()

// call apply bind methods (sharing methods)
// ??


// this inside arrow function

// this inside nested arrow function

// this inside DOM