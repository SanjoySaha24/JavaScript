// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedate = new Date(2023, 0, 2, 5, 3)
// console.log(myCreatedate.toDateString());
// console.log(myCreatedate.toLocaleString());

// let myCreatedate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})