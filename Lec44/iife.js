// Immediately Invoked Function Expressions (IIFE)

// It will mostly work for database, which need to Invoke Immediately through Function
// by creation of Global Scope variables the code will be poluted, thats reason we use IIFE

// IIFE
// there are two paranthesis () ()
// 1st for to write function defination, 2nd one for execution
// https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24

(function chai () // it is named IIFE because function has name chai(),
{
    console.log('DB CONNECTED1');
}) ();  // ; terminated is important to end the function

// OR with Arrow Function

(() => {
    console.log ('DB CONNECTED2');
}) ();

// // Can be input any value in IIFE fucntion

((jago) => {
    console.log (`DB CONNECTED THREE ${jago}`);
}) ('MOON');