// Stack (Primitive), Heap(Non-Primitive)

let myYoutube = "hitesh"
let another = myYoutube
another = "chai"

console.log(myYoutube);
console.log(another);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userOne.email);