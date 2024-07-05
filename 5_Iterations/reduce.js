// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval){
    //     console.log(`acc: ${acc} and currval: ${currval}`);
    //     return acc + currval
    // }, 0)
    // console.log(myTotal);
    
    
// const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc, curr)=> acc+curr)
// console.log(myTotal);


const price = [
    {
        course: "Javascript",
        price:10
    },
    {
        course: "",
        price:100
    },
    {
        course: "Javascript",
        price:1000
    },
]
const totPay = price.reduce((acc, course)=> acc+ course.price, 0)
console.log(totPay);