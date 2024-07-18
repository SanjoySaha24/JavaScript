// Activity 1
// Task 1
var arr = [1,2,3,4,5]
console.log(arr);

// Task 2
console.log(arr[0], arr[arr.length-1]);


// Activity 2
// Task 3
arr.push(6)
console.log(arr);

// Task 4
arr.pop()
console.log(arr);

// Task 5
arr.shift()
console.log(arr);

// Task 6
arr.unshift(...[78,99,87])
console.log(arr);


// Activity 3
// Task 7
let Ar=[1,2,3,4,5,]
let doubleArr = Ar.map(num => num * 2);
console.log(doubleArr)

// // Task 8
let evenArr = Ar.filter(num => num % 2 === 0);
console.log(evenArr)

// // Task 9
let sum = Ar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// Activity 4
// Task 10
let movie = ["Avengers" , "Power Ranger" , "DC" , "Lords"]
for(let i=0; i < movie.length; i++)
    console.log(movie[i]);

// Task 11
movie.forEach(element => (console.log(element)))


// Activity 5
// Task 12
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
matrix.forEach(row => console.log(row));

// Task 13
console.log(`${matrix[0][0]}`) 
console.log(`${matrix[1][1]}`) 
console.log(`${matrix[2][2]}`)