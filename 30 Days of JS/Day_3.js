// Activity 1
// Task 1

let x =-70
if(x>0){
    console.log("Positive");
}
else if(x<0){
    console.log("Negative");
}
else{
    console.log("0");
}


// Task 2

let y=24
if(y>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

// Activity 2
// Task 3

let a =2000
let b =220
let c =240
if(a>b)
    {
        if(a>c)
            console.log("Largest is "+a);
        else
            console.log("Largest is "+c); 
    }
    else 
        if(c>b)
        {
            if(a>c)
                console.log("Largest is "+a);
            else
                console.log("Largest is "+c); 
        }
    else 
        if(b>a)
        {
            if(b>c)
                console.log("Largest is "+b);
            else
                console.log("Largest is "+c); 
        }


// Activity 3
// Task 4

let day = 14
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
        
        default:
        console.log("Error");
        break;
}


// Activity 3
// Task 5

let score = 55
switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    case score >= 50:
        console.log("E");
        break;
    case score < 40:
        console.log("F");
        break;

        default:
        console.log("Error");
        break;
}

// // Activity 4
// // Task 6

let num =265
let sol = num%2==0 ? "even":"odd"
console.log(sol);

// // Activity 5
// // Task 7

let leap = 2021
if(leap%4 == 0 && leap%100 !== 0 || leap%400 == 0 ){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}


// Feature Request ?