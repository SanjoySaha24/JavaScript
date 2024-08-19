// Activity 1
// Task 1 & Task 2
const nm = "Sanjoy";
const age = 22;
const city = "Kolkata";

const message2 = `${nm}, ${age}, ${city}`


// Activity 2
// Task 3
const arr = [55,99,75,66,21,450]
const [first, second] = arr;

console.log(`First : ${first}`); 
console.log(`Second : ${second}`);

// Task 4
const book = {
    title: "Work",
    author: "Alex",
    year: 2010,
}
const{ title: bookTitle , author} = book;
console.log(`Title: ${bookTitle}`);
console.log(`Author: ${author}`);


// Activity 3
// Task 5
const books = ["AA", "BB", "CC"]

let updatedBooks = [...books, "DD", "EE", "FF"]

console.log(books)  
console.log(updatedBooks)

// Task 6
let total = 0
function summation(...digits) {
    digits.forEach(digits => {
        total=total+digits
    });
    console.log(`Summation is ${total}`)        
    }

summation(1,2,3,4,5,6,7,8,9,10)

// Activity 4
// Task 7
function add(num1, num2=90) {
    console.log(`Addition of ${num1} and ${num2} is ${num1+num2}`)
}
add(11)
add(5,8)

// Activity 5
// Task 8
const des = "Sanjoy";
const gender = "Male";
const town = "Kolkata";

const details={
  des,
  gender,
  town,
    info(){ 
    return `My name is ${this.des}. I live in ${this.town}.`;
  },
  others() {
    return `My gender is ${this.gender}`;
  }
};

console.log(details);
console.log(details.info());
console.log(details.others());

// Task 9
const name = "HelloWorld";
const work = "Student";

const compute={
  ...details, 
  [name]: work
};

console.log(compute);