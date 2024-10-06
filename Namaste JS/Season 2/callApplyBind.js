let name1 = {
    firstname: "Sanjoy",
    lastname: "Saha",
}
let name2 = {
    firstname: "Sachin",
    lastname: "Saha",
}

let print = function(home, state){
        console.log(this.firstname + " " + this.lastname+ " from " + home + " , " + state);       
    }
// call
print.call(name1, "Malda", "West Bengal")
print.call(name2, "Ma", "West ")

// apply
print.apply(name2, ["Ma", "West "])

// bind
let printMyName = print.bind(name2, "kol", "WB");
// console.log(printMyName);
printMyName()