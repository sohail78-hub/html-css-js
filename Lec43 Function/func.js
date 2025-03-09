// Function Syntax for define:
// 1. <function> 2. <name of function> 3. { instruction }

//Function Use - Call the function, below is the Syntax:
// <name of function>();

// function abc() {
//     let bnn = "This is the function sentence.";
//     console.log(bnn);
// }

// abc();

// Creating Table by fucntion

// function tbl (){
//     let xtbl= 3;
//     for (i=1;i<=10;i++){
//         console.log(xtbl+" x "+i+" = "+xtbl*i);
//     }
// }

// tbl ();

// Passing Parameters of variable from function

// function ttbb(num){  // in this (num) called parameter
//     for (i=1;i<=10;i++){
//         console.log(num+" x "+i+" = "+num*i);
//     }
// }

// ttbb(6); // in this (6) is called argument.

// Passing multiple Parameters 

// function ttbb(num1, num2){  // multiple parameters
//     for (;num1<=10;num1++){
//         console.log(num2+" x "+num1+" = "+num2*num1);
//     }
// }

// ttbb(1,4); // multiple arguments

// Average function

// function avg(num1,num2,num3,num4) {
//     console.log((num1+num2+num3+num4)/4);
// }

// avg(6,8,12,14);

// // Function Return (return of value from function)

// function ss1(num1, num2, num3){
//     let avg = ((num1+num2+num3)/3);
//     console.log("Inside Function Avg: "+ avg);
//     return avg;
// }

// let ans= ss1(15,33,18); // it will store the return of function in "ans" variable
// console.log(ans);

// Function Return without declaration of any Variable

// function avg(num1,num2,num3) {
//     return ((num1+num2+num3)/3);
// }
// console.log(avg(3,4,3));

// Store Function in Variable

// let getMultiplication = function (a,b) {
//     return a*b;
//     }
    
//     // let ans = getMultiplication(2,20);
//     // console.log(ans);
//     // OR
//     console.log(getMultiplication(2,20)); //without storing results in variable.

// Arrow Function (in this no need to write function)

// let Avg2 = (a,b) => {
//     return a**b;
// }

// console.log(Avg2(2,3));

// // OR we can write same function without Arrow
// let Avg3 = function (c,d) {
//     return c**d;
// }

// console.log(Avg3(2,3));