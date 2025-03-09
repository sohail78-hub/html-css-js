// // In Object Data type there are Key and Values, it called collection of "Key Value Pair"
// // reference / variable name saved in "Stack Memory"
// // values of variables / functions saved in "Heap Memory"

// // Heap space is used by java runtime to allocate memory

// let obj = {
//     name: 'Sohail',  // name is Key and 'Sohail' is Value
//     age: 25,
//     do2: function()
//     {
//         console.log("Print this");

//     }
// };

// console.log(obj);
// obj.do2(); // Call of Function from Object

// console.log(typeof(obj.age));

// // ARRAY - (Creation of array - Method 1)
// let arr = [1,2,3,4,5,7];
// console.log(arr);

// ARRAY CONSTRACTOR (Both - Method 2)
// // Syntax is different

// let brr = new Array('bar', 1, 3, 'myName');
// console.log(brr);

// console.log(typeof(arr));
// console.log(typeof(brr));
// Built in Methods
//Push, Pop, Shift, Unshift, Slice, Split, Map, Filter, reduce, Sort, Indexof, find

// brr.push('Ali',23,'Khan'); // it add value at right
// console.log(brr);

// brr.pop(); // it delete value at right most
// console.log(brr);

// delete brr[3]; //it delete value index on 3
// console.log(brr);

// brr.shift(); // remove left most value
// console.log(brr);

// brr.unshift('New Entry'); // add left most value
// console.log(brr);

// // take value from 2 till 4 (4 will not be included), it will be Shalow copy not deep copy
// console.log(brr.slice(2,4)); // it will slice only, no effect on original object /Array
// console.log(brr); // this show original (Deep copy)

// // splice will remove from start value and count how many values after that and also replace any value
// brr.splice(3,3,"Kamran");
// console.log(brr);
// brr.unshift('Barcola','New Cola',33,44);
// console.log(brr);
// brr.unshift('barcola');
// console.log(brr);
// brr.unshift("Pink","Blue","Red");
// console.log(brr);
// brr.unshift('King',2,3,4);
// console.log(brr);
// brr.splice(2,0,'Newone');

// let brr = new Array('bar', 1, 3, 'myName');
// console.log(brr);
// console.log(typeof(brr));
// brr.splice(2,0,"New Eng"); // from index 2, 0 delete (no delete and after "New Eng")
// console.log(brr);

// Map Method 
// let arr = [10,'a',30];

// let ansArr = arr.map((num) => { // map from arr and take the number and make multiply with same and return.
//     return num*num;             // with in { } called Scope (Statement in scope)
// }
// )
// console.log(ansArr);

// // or we can Write Map function like following
// // Single line Map function (Statement without scope)

// let bar = [10,'a',30];

// let anAbr= bar.map((numb) => numb*numb);
// console.log(anAbr); 



