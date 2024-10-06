// The `setTimeout` function in JavaScript is used to execute a piece of code after a specified delay. It is part of the WindowOrWorkerGlobalScope interface and is commonly used for tasks like delaying the execution of functions or implementing animations.

// ### Syntax

// ```javascript
// setTimeout(function, delay, arg1, arg2, ...)
// ```

// - **`function`**: The function to execute after the delay. This can be an anonymous function, a named function, or a reference to a function.
// - **`delay`**: The time, in milliseconds, to wait before executing the function. The minimum value is typically around 4 milliseconds (depending on the browser or environment). A delay of `0` does not mean the function will execute immediately; it only means the function will execute as soon as possible after the current code execution.
// - **`arg1, arg2, ...`** (optional): Additional arguments to pass to the function when it is executed.

// ### Example Usage

// **Basic Example**

// ```javascript
// setTimeout(function() {
//     console.log('This message is shown after 2 seconds');
// }, 2000);
// ```

// In this example, the anonymous function is executed after a delay of 2000 milliseconds (2 seconds).

// **Named Function Example**

// ```javascript
// function showMessage() {
//     console.log('This message is shown after 1 second');
// }

// setTimeout(showMessage, 1000);
// ```

// Here, the named function `showMessage` is passed to `setTimeout` and will be executed after 1000 milliseconds (1 second).

// **Function with Arguments**

// ```javascript
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// setTimeout(greet, 1500, 'Alice');
// ```

// In this case, the `greet` function will be called with the argument `'Alice'` after 1500 milliseconds (1.5 seconds).

// ### Clearing a Timeout

// If you want to cancel a timeout before it executes, you can use the `clearTimeout` function. This is useful if you need to abort a scheduled task.

// **Example**

// ```javascript
// const timeoutId = setTimeout(function() {
//     console.log('This message will not be shown');
// }, 3000);

// clearTimeout(timeoutId);
// ```

// In this example, `clearTimeout` is called with the `timeoutId` returned by `setTimeout`, which prevents the function from being executed.

// ### Key Points

// - **Return Value**: `setTimeout` returns a timeout ID (a number or an object, depending on the environment) that can be used with `clearTimeout` to cancel the timeout.
// - **Minimum Delay**: The actual delay might be longer than the specified value due to browser optimizations. For example, in some environments, if the delay is less than 4 milliseconds, it may be clamped to a minimum value.

// Using `setTimeout` is a common way to handle asynchronous code in JavaScript, and it's useful for various timing-related tasks in web development.

// setTimeout(function() {
//     console.log(1);
// }, 2000);


// function x(){
//     for(let i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//         console.log("namaste JS");
//     }
// }
// x()


function x(){
    for(let i=0; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
        console.log("namaste JS");
    }
}
x()