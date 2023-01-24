// following two lines will run successfully due to hoisting
// hoisting works differently for variables
console.log(a)
greet()
function greet(){
    console.log("Good Morning")
}
var a = 9; // declaration hoisted to the top but initialization is not
console.log(a)
