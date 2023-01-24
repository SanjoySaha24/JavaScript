console.log("line no. 1",varName)
var varName =10;
console.log("line no. 3",varName)
function fn(){
    console.log("line no. 5",varName)
    console.log(varName)
    var varName=20;
    console.log(varName)
}
fn()
