const cart = ["shoes", "pants", "kurtas"]

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
})

const promise = createOrder(cart)

promise.then(function(orderId){
    proceedToPayment(orderId)
})

// const GITHUB_API = "https://api.github.com/users/sanjoysaha24"
// const user = fetch(GITHUB_API)
// console.log(user);

// user.then(function(data){
//     console.log(data);
    
// })

createOrder(cart)
    .then(function(orderId){
        proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        proceedToPayment(paymentInfo);
    })
    .then(function(paymentInfo){
        proceedToPayment(paymentInfo);
    })

    // Arrow function
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) =>proceedToPayment(paymentInfo))
    .then((paymentInfo) =>proceedToPayment(paymentInfo))