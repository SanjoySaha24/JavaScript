// const marvel = ["aa", "ss", "ll"]
// const dc = ["aap", "sso", "llp"]

// // concat
// let ff = marvel.concat(dc)
// console.log(ff);

// // Spread operator
// const all = [...marvel, ...dc]
// console.log(all);

// const an = [1,2,3, [4,5,6],7,[6,7, [4,5]] ]
// const rel = an.flat(Infinity)
// console.log(rel);

console.log(Array.isArray("Sanjoy"));

console.log(Array.from("Sanjoy"));

// interesting
console.log(Array.from({name:"Sanjoy"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));