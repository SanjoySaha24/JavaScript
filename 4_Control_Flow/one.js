// if
const isUserloggedIn = true
if(isUserloggedIn){
    
} 

// comparison operators
// <, >, <=, >=, == (to check), 
// !=, === (to strictly check type of datatype)


// let, const -> creates private scope
// var -> creates global scope
// const score=200;
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// implicit code
const balance = 1000
if(balance > 500) console.log("test"), console.log("test 1");


const userLog = true
const debitCard = true
const logIn = false
if(userLog && debitCard && logIn){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}