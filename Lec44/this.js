// // Current Contest "this"
// // Contest means Values
// let bank = 3333;

// let userData = {
//     user: "Ali Ahmed",
//     id: "15242",
//     email: "abc@gmail.com",
//     product: "Cycle",
//     price: 4588,
//     welcomeMessage: function(){
//         console.log(`${this.user}, Welcome to Website`); // this will use which give current scope contest
//         console.log(this); // it will show the properties and its values of current contents
//     }

// }
// // userData.welcomeMessage(); // Ali Ahmed will be Print
// // userData.user = "Baber"; // Contest of user changed now
// // userData.welcomeMessage(); // Baber will be Print

// console.log(this);

// //+++++++++++++++++++++++++++++++++++
// // In funtion if we call "this" than it will show lots of properties

// function chai(){
//     console.log(this);
// }

// chai();

// // ++++++++++++++++++++++++++++++++++++++
// // if we 

// function chai2(){
//     let username = "Ahmed";
//     console.log(this.username);  // it will show undefine because in function this can be accessbile
// }

// chai2();

// ++++++++++++++++++++++++++++++++++++++++++++++

// Implicit Return Arrow Function, is one line statement
// means sing line Arrow function without {}, it will back the value

// let asd = (ago1, ago2) => ago1+ago2;
// console.log(asd(3,4));

// Implicit Return, Object can be return by following

// let addd = (jj1,jj2) => {user1:"babaer"}; // it will show undefined because we use {}
let addd = (jj1,jj2) => ({user1:"babber"}); // use () to cover it and object results will arrive 
console.log(addd(3,4));