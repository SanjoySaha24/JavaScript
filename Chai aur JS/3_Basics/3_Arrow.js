// this keyword, not used in arrow function
// this keyword works in object

// const user ={
//     username:"sanjoy",
//     roll: 89,
//     welcome: function(){
//         console.log(`${this.username}, welcome`);
//         console.log(this);
//     }
// }
// user.welcome()
// user.username = "Sam"
// user.welcome()
// console.log(this);


// function chai(){
//     let username = "sanjoy"
//     console.log(this.username);
// }
// chai()


// Arrow function
// const chai = () => {
//     let username = "sanjoy"
//     console.log(this.username);
// }
// chai()

// Explicit
// const add = (n1,n2)=>{
//     return n1+n2
// }
// console.log(add(3,8));

// Implicit
const add = (n1,n2)=> (n1+n2)
console.log(add(3,8));

const sub = (f,k)=>({user:"Sanjoy"});