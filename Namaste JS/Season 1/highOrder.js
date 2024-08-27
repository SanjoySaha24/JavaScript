const radius = [3,1,2,4]

function area(radius){
    return Math.PI * radius*radius
}
function circumference(radius){
    return 2* Math.PI * radius
}
function diameter(radius){
    return 2 * radius
}

Array.prototype.calculate = function(logic){
    const output = []
    for(let i=0; i<this.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

// function calculate(radius, logic){
//     const output = []
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


// const val = [3,1,2,4]

// function radius(val){
//     const output = []
//     for(let i=0; i<val.length; i++){
//         output.push(Math.PI * val[i]*val[i])
//     }
//     return output;
// }
// console.log(radius(val));


// function circum(val){
//     const output = []
//     for(let i=0; i<val.length; i++){
//         output.push(2 * Math.PI * val[i])
//     }
//     return output;
// }
// console.log(circum(val));

// function dia(val){
//     const output = []
//     for(let i=0; i<val.length; i++){
//         output.push(2 * val[i])
//     }
//     return output;
// }
// console.log(dia(val));
