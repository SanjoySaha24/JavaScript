// const oldarr = ['vinod','bahadur','thapa'];

// console.log(oldarr[0]);
// console.log(oldarr[1]);
// console.log(oldarr[2]);

// const newarr = oldarr.map(function(value, i, arr){
     // return i + " : " + value + "lol"
//     console.log(arr)
// });
// console.log(newarr)

const studentdata = [
    {id:1, name:"vinod", degree:"MCS"},
    {id:2, name:"Thapa", degree:"MCS"},
    {id:3, name:"ThapaTechnical", degree:"MCS"},
]
// console.log(studentdata[2].degree)

const newdata = studentdata.map((cvalue) => {
    return `My name is ${cvalue.name}. highest degree ${cvalue.degree}`;
})
console.log(newdata);