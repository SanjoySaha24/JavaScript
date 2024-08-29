const cart  =["shoes", "pants", "kurta"]

createOrder(cart)
    .then(function(orderId) {
    console.log(orderId);
    return orderId;
    })
    .catch(function(err){
    console.log(err.message)
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message)
    })
    .then(function(orderId) {
        console.log("no matter what happens i will be called");
    });

// Producer 

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345"
            if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
            }
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment successful")
    })
}
    // Promise accept
    function validateCart(cart){
        return true;
    }
        // Promise reject
    // function validateCart(cart){
    //     return false;
    // }