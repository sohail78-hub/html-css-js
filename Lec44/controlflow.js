// Multiple Control flow by "If-else" statement

// or Switch else

let isLoggedIn = true;
let isDebbitCard = true;
let loggedInFromGoogle = false;
let loggedInFromEmail = true;

// && statement check both condition must be true
// if (isLoggedIn && isDebbitCard) {
//     console.log("Authentic User");
// } else
// {console.log("Not Valid for Shopping")};

// || statement check atleast one condition must be true
// if (isLoggedIn || isDebbitCard) {
//     console.log("Authentic User");
// } else
// {console.log("Not Valid for Shopping")};

// to check all conditions & must be true

// if(isLoggedIn && isDebbitCard && loggedInFromEmail || loggedInFromGoogle) {
//     console.log("Authentic User");
// } else
// {console.log("Not Valid for Shopping")};


//+++++++++++++++++++++++++ Switch Statement +++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Check of Months
// let month =10; 

// switch (month) {
//     case 1:
//     console.log("January");
//     break;

//     case 2:
//     console.log("Feburary");
//     break;
    
//     case 3:
//     console.log("March");
//     break;

//     case 4:
//     console.log("April");
//     break;

//     case 5:
//     console.log("May");
//     break;

//     case 6:
//     console.log("June");
//     break;

//     case 7:
//     console.log("July");
//     break;
//     case 8:
//     console.log("August");
//     break;
//     case 9:
//     console.log("September");
//     break;
//     case 10:
//     console.log("October");
    
//     case 11:
//     console.log("November");
    

//     default:
//         console.log("December");
//         break;

// }

// +++++++++++++++++++++++ Truthy / Falsy Value ++++++++++++++++++++++++++++++++++++++
// if only check the email exist or not than

// let userEmail= "";

// if (userEmail) { // if value is Ture (available), if no value inside than it reflect flase / 0;
//     console.log(`User has email ${userEmail}`);
// }
//     else {
//     console.log ("User don't have email");
// }
// +++++++++++++++++++++++ Truthy / Falsy Value ++++++++++++++++++++++++++++++++++++++

// "" if blank string value consider false / 0.
// [] if blank array value consider True

// Falsy Values 
//  false, 0, -0, BigInt 0n, "", null, undefined, Nan

// Other than above values are Truthy Values likely

// "0" (in string 0),
// 'false' in string,
// " " space in string,
// [] empty array,
// {} empty object,
// function(){} is called empty function also truthy value

// ++++++++++++++++ Check Array Empty or not +++++++++++++++++++
// to check Array value by if condition

// let userEmail2= []; // by default it is ture thats why we are using following condition

// if (userEmail2.length === 0) { // this will check if Array is empty or false
//     console.log("Array is empty");

// }

// else {
//     console.log("Array is not empty");
// }

// ++++++++++++++++ Check Object Empty or not +++++++++++++++++++

// let newObject = {}; // by default it is ture thats why we are using following condition

// if (Object.keys(newObject).length === 0) {
//     console.log("Object is True / Empty");
// }
// else {
//     console.log("Object is false / not empty");
// }

//++++++++++++++++++++ Nullish coalescing Operator (??)
// it is for "null" and  "undefined" values


let val1;  // it will return undefined / null

// val1 = null ?? 10; // if value is null than put 10 in it.
val1 = null ?? undefined ?? 10; // it also work, if value is null than put undefined or if undefined put 10 (multiple condition)
console.log(val1);

// +++++++ Terniary Operator
// Terniary Operator works like if/else like following:

// Condition ? ture : false;
let iceCreamPrice = 70;

(iceCreamPrice <= 80) ? console.log("Ice cream is Less than 80") : console.log("Ice cream is Over than 80");

// Multiple Terniary Operator also can work

// function example() {
//     return condition1 ? value1
//       : condition2 ? value2
//       : condition3 ? value3
//       : value4;
//   }