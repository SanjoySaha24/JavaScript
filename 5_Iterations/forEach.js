// const sub = ["kk", "kkk", "ll", "lll"]
// sub.forEach(function(val){
    //     console.log(val);
    // })
    
    
// const sub = ["kk", "kkk", "ll", "lll"]
// sub.forEach((item) => {
    //     console.log(item);
    // })
    
    
// const sub = ["kk", "kkk", "ll", "lll"]
// function printMe(item){
    //     console.log(item);
    // }
    // sub.forEach(printMe)
    
    
// const coding = ["kk", "kkk", "ll", "lll"]
// coding.forEach((item, index, arr) => {
//     console.log(item, index,arr);
// })

const myCoding =[
    {
        languageName: "JavaScript",
        langFileName: ".js"
    },
    {
        languageName: "Java",
        langFileName: ".java"
    },
    {
        languageName: "Python",
        langFileName: ".py"
    },
]
myCoding.forEach((item)=>{
    // console.log(item.langFileName);
    console.log(item.languageName,":-",item.langFileName);
})