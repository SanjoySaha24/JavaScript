// array
// shallow & deep copy

// const myArr = [0,1,2,3,4,5]
// const myHeroes = ["man", "fan"]
// const myArr2 = new Array(1,2,3,4)

// console.log(myArr[3]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // converts into string
// console.log(myArr);
// console.log(newArr);

const myArr = [0,1,2,3,4,5]
console.log("A", myArr);

// slice
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

// splice
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);