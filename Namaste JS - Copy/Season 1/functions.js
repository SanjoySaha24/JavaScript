// function statement aka function declaration
function a(){
    console.log("a called");
}
a()

// function expression
var b = function () {
    console.log("b called");
}
b()
// anonymous function 
// function(){

// }

// named function expression
var c = function xyz() {
    console.log("c called");
}
c()

// difference between parameters & arguments
var d = function (param1, param2){
    console.log("para / argu");
}
d(88,40); // argument

// first class functions
var e = function (param1){
    return function xyz(){

    }
}
console.log(e());


// first class citizens
