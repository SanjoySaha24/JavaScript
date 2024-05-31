// const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const other = 23.8966
console.log(other.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ MAths +++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));
// console.log(Math.random());

const min = 10
const max = 10
console.log(Math.floor(Math.random() * (max-min+1)) + min);