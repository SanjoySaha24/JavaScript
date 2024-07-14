// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 

// const tinderUser = new Object(){} -> Singleton object
// const tinderUser = {} -> Non-Singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sanjoy"
tinderUser.isLog = false

// console.log(tinderUser);

const regularUser = {
    email:"sone@gmai.com",
    fullname:{
        userFullname:{
            firstname: "sanjoy",
            lasstname: "saha",
        }
    }
}
// console.log(regularUser.fullname.userFullname);

// Combine
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users =[ {
    id: 1,
    name: "snajoy",
},
{
    id: 2,
    name: "snajoppy",
},
 {
    id: 3,
    name: "wwsnajoy",
},
]

users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLog'));

const course = {
    coursename: "js in hindi",
    price: "22",
    courseIns: "sanjoy"
}
        // Rename
const {courseIns:IN} = course
console.log(IN);

// const navbar = ({company}) => {

// }
// navbar(company = "sanjoy") // Object Destructuring

// JSON
// {
//     "name": "Sanjoy",
//     "id": "123abc",
// }

[
    {},
    {},
    {}
]