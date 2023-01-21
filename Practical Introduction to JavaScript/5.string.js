let singlequotes = "single quotes ki string";
let doublequotes = "double quotes ki string";

// console.log(singlequotes)
// console.log(doublequotes)

//  let char = singlequotes.charAt(4) // l
//  let ascii = singlequotes.charCodeAt(4)// 108
//  let substr = singlequotes.substring(2,8) 

// console.log(char)
// console.log(substr)
// console.log(ascii) // 108

// let arrStr = singlequotes.split(" ")
// console.log(arrStr)

// let arrStr = singlequotes.split("")
// console.log(arrStr) // seperates all the character of the string

// let str = arrStr.join("$")
// console.log(str) // puts $ after ecery character

singlequotes = singlequotes.trim(); // remove white space
let arrStr = singlequotes.split("")
 console.log(arrStr)
 let str = arrStr.join("+");
 console.log(str)