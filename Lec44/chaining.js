
// Chaining ( Map inside Map or filter Inside map is possible)
let myNumber= [1,2,3,4,5,6,7,8,9,10];

let newNums = myNumber
        .map( (num) => num * 10 ) // 1st Step - Used Map, it Multiply 10 in myNumber values
        .map ( (num) => num + 10) // 2nd Step - Used Map, now myNumber values multiplied by 10 in each value and added 10
        .filter( (num) => num >= 60 ) // 3rd Step - Used Filter,  it will show only those number which is greater than 60.
        ; 

console.log(newNums);