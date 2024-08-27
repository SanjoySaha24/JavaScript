const arr = [5,1,3,2]

function double(x){
    return x*2
}

function triple(x){
    return x*3
}

const output = arr.map(double)
console.log(output);

const out = arr.map(triple)
console.log(out);

const outputy = arr.map(function binary(x){
    return x.toString(2);
})
console.log(outputy);