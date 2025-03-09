let arr33 = {};
// console.log(typeof arr33); 

// // Adding Properties in Object
arr33.name = "firstUser"
arr33.id = "1333"
arr33.isLoggedIn = false

// console.log(arr33);

// Merge two Object or Array

let obj1 = { 1:"a", 2:"b"};
let obj2 = { 3:"c", 4:"d"};
let obj3 = {5:"e", 6:"f"};

// console.log(obj1);
// console.log(obj2);

// Merge both obj1 and obj2

// console.log(obj1,obj2); // it will show Object seperately

// To combine properties of multiple objects than use following

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// let obj1_2= Object.assign (obj1,obj2,obj3); // obj1 is Target and obj2 is Source
// console.log(obj1_2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// let obj1_3= Object.assign ({}, obj1, obj2, obj3); // {} is Target object and obj1, obj2, obj3 are sources
// or we can write below "spread method by adding ... "

let obj1_3= {...obj1, ...obj2, ...obj3}; // it will work like Object.assign (first one will remain Target object)
console.log(obj1_3);

// To get values from database or array we do following

console.log(Object.keys(arr33)); // it will fetch keys from arr33 Object / Array
console.log(Object.values(arr33)); // it will fetch values from arr33 object /array
console.log(Object.entries(arr33)); // it will fetch keys and values from arr33 object /array

// Finding Property from any object / array by True/False
// console.log(arr33.hasOwnProperty('name')); // it will check property name and result True
