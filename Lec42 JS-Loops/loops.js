// for (let i=1; i<=10 ; i++)
// {
//     console.log("This is = "+i);
// }

// let cars = ["BMW", "Volvo", "Hyundai", "Nissan", "GMC", "Mercedese","KIA"];

// for (let i=0;i<cars.length;i++ )
// {
//     console.log(cars[i]);
// }

// Break means, get out from the Loop
// for (let i=10;i>=0;i--)
// {
//     if (i==5){   //if Condition match than break from the loop 
//         break; 
//     }
//     else
//     {
//         console.log("This is "+i);
//     }
// }

// Continue means - Skip 
// for (let i=10;i>=0;i--)
// {
//     if (i==5){   //if Condition match than 5 will be skip or ignored 
//         continue; 
//     }
//     else
//     {
//         console.log("This is "+ i);
//     }
// }

//While Loop
// let i=1;
// while(i<=10){
//     console.log("This is "+i+" time");
//     i++;
// }

// Do -While Loop
// let i=1;
// do{
//     console.log("This is "+i);
//     i++;
// } while (i<=10);

// CONCENATED TWO STRINGS BY FOLLOWING METHODS

// Method 1
// ===========

let do1= "HELLO";
let do2=",how are you ?";
// console.log(do1+do2); 

// Method 2 (with Backticks ` ` and $ sign)
// ===========

console.log(`${do1} ${do2}`);

// Find length of any variable by following

console.log(do1.length);

// Convert any variables value into Upper or Lower case by

console.log(do1.toLowerCase());
console.log(do2.toUpperCase());

// Fetch value from any string by Substring function
console.log(do2.substring(5));

// Fetch value from string start from and end till
console.log(do2.substring(5,8));

// Split any String by any WORD or letter
console.log(do2.split(' ')); // it split by space ' '

// Single \ (backslash escap) in String
// The backslash escape character (\) turns special characters into string characters:

//  \" inserts a double quote in a string:
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

// Six other escape sequences are valid in JS:
// \b Backspace, \f Form Feed, \n New Line, \r Carriage Return, \t Horizontal Tablulator, \v Vertical Tabulator
console.log("We are the \n so-called Vikings from the north."); //new line
console.log("We are the\b so-called Vikings from the north."); // backspace
console.log("We are the \r so-called Vikings from the north.");

let ba1 = "tow this,";
let ba2= "now tow this,";
let ba3 = "now stop it.";
// join any Array items by following command
console.log(ba1.join(` `)); // Join by space