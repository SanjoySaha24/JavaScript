// Activity 1
let a= 49
let b= 29

let add = a+b
let sub = a-b
let multi = a*b
let div = a/b
let rem = a%b
console.log(add);
console.log(sub);
console.log(multi);
console.log(div);
console.log(rem);


// Activity 2

console.log(a+=b)
console.log(a-=b)

// Activity 3
console.log(a>b);
console.log(a<b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);

// Activity 4
console.log(a>5 && b>5);
console.log(a%5 === 0 || b%5 == 0);
console.log(a != b);

// Activity 5
console.log(a> 5? "a greater than 5" : "a less than 5");


// Feature Request:
// 1:
console.log("a+b: " + (a + b))
console.log("a-b: " + (a - b))
console.log("ab: " + (a * b))
console.log("a/b: " + (a / b))
console.log("a%b: " + (a % b))

// 2:
console.log("((a + b) > (a - b)) && ((a * b) < (a / b)): " + (((a + b) > (a - b)) && ((a * b) <= (a / b))))
console.log("((a + b) > (a - b))  || ((a * b) < (a / b)): " + (((a + b) >= (a - b)) || ((a * b) < (a / b))))

// 3:
a = -45
a > 0 ? console.log("a is positive") : console.log("a is negative")