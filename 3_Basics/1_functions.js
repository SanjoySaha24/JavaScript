
// function myName(){
//     console.log("S");
//     console.log("A");
//     console.log("N");
// }
// myName()

// function sum(n1, n2){
//     console.log(n1 + n2);
// }
// sum(3,9)

// function sum(n1, n2){
//     return n1+n2;
// }
// const res = sum(3,5)
// console.log("Result: ",res);


// function sum(n1, n2){
//     let res = n1+n2;
//     return res; // after result nothing gets print
// }
// const res = sum(3,5)
// console.log("Result: ",res);


// function logIn(username){
//     return `${username} just logged in`
// }
// console.log(logIn("hitesh"));

// function logIn(username){
//     if(username === undefined){
//         console.log("enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(logIn());

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));

const user = {
    use:"hitesh",
    price: 199
}

function handle(anyobj) {
    console.log(`Username ${anyobj.use}`);
}
handle({
    use:"sam",
    price: 400
})


// const myN = [200, 400, 100]
function retu(getA){
    return getA[1]
}
// console.log(retu(myN));
console.log(retu([200, 400, 100]));