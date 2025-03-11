// For each is built in Function
// already injected in Array and in object

// For Each function called, Call Back Function & thats why we will not write name of function

const coding = ["JavaScript", "Python", "Visual Basic", "HTML", "CSS","PHP"];

// coding.forEach( function (ads) { // no need to put function name
//     console.log(ads); // it will print each value of "Coding" Array
// }); 
// // OR

// coding.forEach( (ads) => { 
//     // console.log(ads); // 
// }); 

// +++++++++++++++++  calling function "Printme" in loop. +++++++++++++++

// function printme(item){ // geting Array values in items
//     console.log(item);
// }

// coding.forEach(printme); // coding Array name & put "Printme" function in loop


// +++++++++++++++++++++ Other Parameters"forEach method"
// items = (each item's value)
// index = (for index number)
// arr (for full array)

    // coding.forEach( (item, index, arr)=> {
    //  console.log(item, index, arr); // it will print Value, than index number and than full array
    // })

// +++++++++++++++  Object inside Array +++++++++

// let buck = [
//     {
//         id : "15124",
//         name: "Ali",
//         class: "10th",
//         sub: "Python"
//     },
//     {
//         id : "15125",
//         name: "Baber",
//         class: "10th",
//         sub: "Java"
//     },
//     {
//         id : "15126",
//         name: "Kamran",
//         class: "10th",
//         sub: "Php"
//     }
// ];

// buck.forEach( (item)=> {
// console.log(item.id); // it will print Object's Property id
// })