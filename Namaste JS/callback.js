// what is callback function in JS
// -> gives power of ashcronity
// setTimeout(function(){
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){
//     console.log("y");
// })

function county(){
    let count=0
document.getElementById("clickMe").addEventListener("click", function xyz(){
console.log("Button Clicked", count++);
})
}
county()