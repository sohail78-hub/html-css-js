// // Reduce method used in Add to Card method to Totaling the bills
// // likewise performing the total Value of following array, assume each number is in Array is Product amount

// +++ Code 1 ++++++++++++++++++++++++++++++++

// let bill = [105, 211, 33.11, 45.44, 507.21 , 601.55];

// // let totalBill = bill.reduce(function (acc,curr) 
// // {
// //     console.log (`Total is: ${acc} and Current is: ${curr}`); // induce acc & curr variable in print by BackTicks
// //     return acc + curr;
// // }, 0  // Initial Values is 0
// // )
// // console.log(totalBill);

// +++ Code 2 ++++++++++++++++++++++++++++++++

// let totaal = bill.reduce((tot, curr) => 
//     { 
//         console.log(`Total: ${tot} and Current: ${curr}`);
//         return tot + curr;
//     },0);  // Initial Value will be 0

// console.log(totaal);

// +++ Code 3 ++++++++++++++++++++++++++++++++
// Added products in Shopping Cart with following

let shoppingCart = [
	{	itemName: "js Course", 	price: 2999	},
	{	itemName: "py Course", 	price: 5999	},
	{	itemName: "Mobile Course", 	price: 9999	},
	{	itemName: "Data Science Course", 	price: 14999	}
	
];

// additing Total Prices of shoppingCart items

let totalBill = shoppingCart.reduce ((acc,item) => acc + item.price, 0);
console.log(totalBill);