// What is async?
// What is await?
// working behind the scene
// examples
// error handling
// interviews
// async await vs Promise.then/.catch


// create a promise 
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved value")
// })

// always returns a promise
// async function getData(){
//     return p
// } 

// const dataPromise = getData();
// // console.log(dataPromise);
// dataPromise.then((res) => console.log(res))


// Promise is asynchronous
// using async with await to handle promises
// await is a keyword used only inside an async function to handle promises

// const p = new Promise((resolve, reject) =>{
//     resolve("Promise resolved value")
// })

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();


// DEEP DIVE
// const p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Promise resolved value")
//     }, 20000)
// })

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("Promise resolved value")
//     }, 4000)
// })

// async function handlePromise(){
//     console.log("Hello world!");
//     // JS engine waiting for promise to be resolved
//     const val = await p1;
//     console.log("Namaste JS");
//     console.log(val);
    
//     const val2 = await p2;
//     console.log("Namaste JS 2");
//     console.log(val2);
// }
// handlePromise();


// Fetch = returns a response
const API_URL = "https://api.github.com/users/sanjoysaha24"

async function handlePromise(){
    
    const data = await fetch(API_URL)
    const jsonValue = await data.json()
    console.log(jsonValue);
    
}
    // fetch() => Response.json() => jsonValue

handlePromise().catch((err) => console.log(err));

