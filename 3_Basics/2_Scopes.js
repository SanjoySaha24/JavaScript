// let a =10
// if(true){
//     let a =100
//     console.log("Inner scope: ", a);
// }
// console.log("Global Scope: ", a);

// function one() {
//     const username = "hello"
    
//     function two() {
//         const website = "wait"
//         console.log(username);
//         console.log(website);
        
//     }
//     two()
// }
// one()

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website ="youtube"
//     console.log(username + website);
// }
// console.log(website);
// }
// console.log(username);

function addOne(num) {
    return num +1
}
console.log(addOne(6));

addTwo(5)
const addTwo = function(num){
    return num+2
}

