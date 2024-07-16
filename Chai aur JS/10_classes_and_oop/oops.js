// object literal
/*
const user ={
    username: "Sanjoy",
    loginCount: 5,
    signedIn: true,

    getUserDetail: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
// console.log(user.getUserDetail());
console.log(this); 


Constructor function
const promiseOne = new Promise() */


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = User("Sanjoy", 15, true)
const userTwo = User("Sanjoy Saha", 11, false)
console.log(userOne.constructor);
console.log(userTwo);