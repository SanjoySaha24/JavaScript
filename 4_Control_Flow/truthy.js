const userEmail = "true"
const userEmailo = []

if(userEmail){
    console.log("Got mail");
}
else{
    console.log("No mail");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} 

if(userEmail.length === 0){
    console.log("empty array");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

/*
false == 0 -> true 
false == '' -> true 
0 == '' -> true 
*/

// Nullish Coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 15
// val4 = null ?? 10 ?? 20

// console.log(val1);

// Ternary operator
//  condition ? true : false

