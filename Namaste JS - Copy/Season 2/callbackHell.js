// console.log("Namaste");
// setTimeout(function(){
//     console.log("JavaScript");
// },5000)
// console.log("Season 2");

const cart = ["shoes", "pants", "kurtas"]
api.createOrder(cart, function(){
    api.proceedToPayment(function (){

        api.showOrderSummary(

            function(){
             api.updateWallet()
            }
        )
    })
})