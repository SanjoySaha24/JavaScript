// console.log("This is my tutorial")

// // Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// // div with id content
// let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt"
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text()
//     }).then((data)=>{
//         console.log("Inside first then")
//         console.log(data);
//     })
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")
console.log(fetch('https://regres.in/api/users/23'))
.then(res=> res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))