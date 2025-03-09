// Using Map function for adding 10 numbers in variable or doing some calculation
// Map functin will Autoback the result

let myNumber= [1,2,3,4,5,6,7,8,9,10];

let newNums = myNumber.map( (num) => num +10 ); // Single line without scope
// console.log(newNums);

// ++++++++++++++++ For Of +++++ Loop +++++++++++
// +++++++++++++++++ Using MAP ++++++++++++++++++++

// // Map (Adding key/properties and its values)
// // Map is Datatype object

let nop = new Map();

nop.set("IN","India");
nop.set("PK", "Pakistan");
nop.set("USA","United States of America");
nop.set("KSA","Kingdome of Saudi Arabia");
nop.set("IN","India");  // It will not take double Key, only take one time India

//for of Loop will work till the size of object
// nnop is new variable to save the value

for (let nnop of nop) {  // it will print the same variable
    console.log(nnop); 
    
}

for (let [ndop,value] of nop) { // Destructure of Object by sepration of Key and its values
    // console.log(ndop);
    // console.log(value);

    // console.log(ndop,' :-: ', value); // Print Key and value seprately and put any text between.
}