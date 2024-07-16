// Activity 1: For Loop
// Task 1

for(let i=1; i<=10; i++){
    console.log(i);
}

// Task 2

let n=5
for(let i=1; i<=10; i++){
    console.log(i*n);
}


// Activity 2: While Loop
// Task 3

let index =1
let sum =0
while(index<=10){
        sum+=index
        index++
        console.log(sum);
    }
    
// Task 4

let count =10
while (count>=1) {
    console.log(count);
    count--
}

// Activity 3: Do...While loop
// Task 5

let cnt = 1
do{
    console.log(cnt);
    cnt++
}
while(cnt<=5)

// Task 6

function factorial(num){
    let factNum = 1 
    let index = num 
    do{
      factNum *= index
      index--
    }
    while( index > 0 )
      console.log(`${factNum}`)
    }
    let factNum = 4
  factorial( factNum )


// Activity 4: Nested Loops  
// Task 7

for(i=1;i<=5;i++){
    let pattern = "";
    for(j=1;j<=i;j++){
        pattern += "* "
    }
        console.log(pattern);
}

// Activity 5: Loop control Statements 
// Task 8

for(let ind = 0;ind <=10;ind++){
    if(ind === 5) 
        continue
    console.log(`ind : ${ind}`)
  }
  
// Task 9 

  for(let ind = 0;ind <= 10;ind++){
    console.log(`ind : ${ind}`)
    if(ind === 7) 
        break
  }


// Feature request ?