// for (let index = 0; index < 10; index++) {  
//     console.log(index);
// }


// for (let index = 0; index < 10; index++) {  
//     if (index == 5) {
//         console.log("5 is best");
//     }
//     console.log(index);
// }


// for (let i = 0; i <=3; i++) {
//     console.log(`Outer loop value: ${i}`);   
// for (let j = 0; j <=3; j++) {
// //    console.log(`Inner loop value: ${j} and inner loop ${i}`);
// console.log(i+ '*' + j + '=' + i*j);
// }
// }


// let myArr = ["flash","batman","superman"]
// console.log(myArr.length);
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//  console.log(element);   
// }


// break 
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(index);
// }


//continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(index);
}