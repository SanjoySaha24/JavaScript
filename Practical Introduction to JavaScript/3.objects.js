// object -> group of key : value pair
// declare --> let obj = {}
// key : value -> property
// key : function -> method

let cap={
    name:"Steve",
    lastName: "Rogers",
    address:{
        city:"Manhatten",
        state:"New York"
    }
    ,age : 35,
    isAvenger: true,
    movies:["First Avenger", "winter soldier", "civil war"],
    sayHi: function(){
        console.log("Cap say's Hi")
    }
}
// --------------------------------------------------------------------------

// GET

// console.log(cap.name)
// console.log(cap.age)
// console.log(cap.address.state)
// console.log(cap.isAvenger)
// console.log(cap.movies[1])
// cap.sayHi()

// --------------------------------------------------------------------------

// SET/UPDATE

// console.log("cap :",cap);
// cap.age = 36
// cap.isAvenger = false;
// cap.friends = ["Tony","Bruce","Peter"]
// console.log('```````````````````````````');
// console.log("cap :",cap);
// --------------------------------------------------------------------------

// delete

// delete cap.address
// console.log("cap :", cap)

// --------------------------------------------------------------------------

// for(let key in cap){
//     console.log(key, " : ", cap[key])
// }
// --------------------------------------------------------------------------

let propkey = "age"
console.log(cap.age)
console.log(cap[propkey])
console.log(cap[propkey])
