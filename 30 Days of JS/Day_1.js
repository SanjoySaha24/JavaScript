//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 7
console.log(num);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = "Sanjoy Saha"
console.log(str);

//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const dec = true
console.log(dec);

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let no = 124
var name = "Rahul"
let judge = true
const info = {
  age: 23,
  gender: Male, 
}
let arr = [0,1,2,3,4];


console.log(typeof no);
console.log(typeof name);
console.log(typeof judge);
console.log(typeof(info));
console.log(typeof(arr));


/*Activity 4: Reassigning Variables  
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.*/

let naam = "Sanjoy"
let IntialName = naam;
naam = "JavaScript"
console.log(IntialName);
console.log(naam);


/*Activity 5: Understanding const  Task 6: Try reassigning a variable declared with const and observe the error.*/

const User = "QWERTY"
User = "WERSDF"

console.log(User);

// Feature Request
// Variable Types Console Log: 
// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let id = 109
var password = "crypt"
let see = true
const user = {Name: "Sanjoy"}
let array = [9,-1,2,7,4];


console.log(typeof id, id);
console.log(typeof password, password);
console.log(typeof see, see);
console.log(typeof user, user);
console.log(typeof array, array);


// Reassignment Demo:
// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

