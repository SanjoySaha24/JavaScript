// function a(){
// console.log(b);
// }
// var b=10
// a()

// function a() {
//     c();
//     function c() {
//     console.log(b); // 10
//     }
//     }
//     var b = 10;
//     a();


//     function a() {
//         c();
//         function c() {
//         var b = 100;
//         console.log(b); 
//         }
//         }
//         var b = 10;
//         a();


        function a() {
            var b = 10;
            c();
            function c() {
            console.log(b); 
            }
            }
            a();
            console.log(b);