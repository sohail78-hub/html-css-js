// function calculateCartPrice (num1) {
//     return num1;
//     }
    
    // console.log(calculateCartPrice(200));  // One Value Return
    // console.log(calculateCartPrice(200,350,400,500)); // not possible to return multiple value

// Accepting multiple values (don't know how many than use REST Operator)
// ... also called SPREAD Operator / REST Operator but as per situation

    function calculateCartPrice (... num1) {
        return num1;
        }

    console.log(calculateCartPrice(200,500,300,400,543,880)); // it will save all the values in num1 array []
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing Object in function

// Product1 = {
//     category: "Vegetables",
//     item: "Tomato",
//     unit: "kg",
//     price: 25
// }

// function handleObject (anyobject){
//     console.log(`User name is: ${anyobject.item} and Price is: ${anyobject.price}.`);
//     }

// // Call up function
// handleObject(Product1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing Array in Funtion

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
return getArray[1];  // it will return second index value
}

console.log(returnSecondValue(myNewArray));