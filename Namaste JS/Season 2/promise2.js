const cart  =["shoes", "pants", "kurta"]

const promise = createOrder(cart); // orderId
// console.log(promise);

promise
    .then(function(orderId) {
    console.log(orderId);
    })
    .catch(function(err){
    console.log(err.message);
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

    // Promise accept
    function validateCart(cart){
        return true;
    }
        // Promise reject
    // function validateCart(cart){
    //     return false;
    // }