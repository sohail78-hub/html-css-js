// +++++ Parts of OOP
// ++++  1. Object literal

// An object literal is a list of property names:values inside curly braces {}. 
// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

const user = {
    key: "123",
    name: "Ahmed",
    singedIn: true,
    getUserDetails: function () {
        // console.log(this.name);
        // console.log(this) // Print current context
    }
};

// object literal
// console.log(user.getUserDetails());

// +++++ Parts of OOP
// ++++  2. Constructor Function

// A constructor function is a regular function used in conjunction with the new keyword to initialize a new object

// const promiseOne = new Promise((resolve, reject)); // promise function must need executor 
// and in promise there are two parameters (resolve, reject)

// const date = new Date();


// 🔹 new is used to create an instance from a constructor (e.g., Promise, Date).
// 🔹 Without new, JavaScript will treat it as a normal function call (which may cause

// function User(name,a,big) {
//     this.name = name;
//     this.a = a;
//     this.big = big;
    // return this;
// }

// const userOne = User("Ali",123,"ball");
// const userTwo = User("baber",333,"Azeem") 
//                                             
// console.log(userOne); // it will overwrite the UserOne data, because we are using 
                        // User function thats why we use New to not Overwrite the data

// const userOne = new User("Ali",123,"ball");
// const userTwo = new User("baber",333,"Azeem"); 
// if we write new constructor, than new blank object will be created

// console.log(userOne); // No overwrite because new constructor used with function User.
// console.log(userTwo); // No overwrite because new constructor used with function User.
// console.log(userOne.constructor); // constructor will give the reference of "UserOne"

// learn more about instanceof @ mdn

// +++++ Parts of OOP
// ++++  3. Prototype (it JavaScript Behaviour)

// const newHero = ["hulk","spiderman"]; // type it in chrome inspector (newHero Arrya is Object)

// Function is also Object

function multiplyBy5(num){
    return num*5;
};

multiplyBy5.power = 3; // now mulitplyBy5 functions power sets=3

// console.log(multiplyBy5(3));
// console.log(multiplyBy5.power); // it will print the power 3
// console.log(multiplyBy5.prototype); // {} mean an object or we can say "this"

// --------------------------------------

// function createUser(username, score){
//     this.username = username;
//     this.score = score;
// };

// createUser.prototype.increament = function(){ // create custom prototype function name "increament" for createUser
//     this.score++;
//     console.log(this.score);
// };

// createUser.prototype.printMe = function (){ // create customer prototype "printMe()"
//     console.log(`price is ${this.score}`); // this means jis ney call ki us ka 
// };

// const chai = new createUser("chai",25); // without "new" constructor will not work
// const tea = new createUser("Tea",250); // without "new" constructor will not work

// tea.printMe();
// tea.increament();
//-------------------------------------------

// inject Own function in any object

// let myHeros = ["thor", "spiderman"]; // An Array

// let heroPower = { // An Object
//     thor: "hammer",  // Key: Value
//     spierman: "sling",

//     getSpiderPower: function () { // function ijected in heroPowr Object
//         console.log(`Spidy power is ${this.spierman}`);
//     }
// };

// Every thing like Array, String, function passed from Object {} 

// Object.prototype.doPower = function() { // object means it will inject doPower in all Object
//     console.log('doPower is present in all object');
// }

// Array.prototype.doPowerArray = function(){
//     console.log('DoPowerArray says Hello');
// }

// myHeros.doPower(); // injected doPower() as an object in an array myHeros
// myHeros.doPowerArray(); // injected doPowerAray as an Array in an array myHeros  

// heroPower.doPower(); // injected doPower() as an object in an Object heroPower
// // heroPower.doPowerArray(); // injected Array in an Object will not work.


// +++++++++++++++++ Inheritance +++++++++++++++++

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makevideo: true
};

const TeachingSupport = {
    isAvailable: false

};

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport //__proto__ default prototype (set the value a key TeachingSupport)
};

// console.log(Teacher.__proto__ = User);
// console.log(Teacher.TeachingSupport = User);

//+++ Creating New custom String Object and Inject

let anotherUsername = "ChaiAur Code        " // Need to remove extra space by new created function trueLength() (we will create it)

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`Ture Length is: ${this.trim().length}`); // this mean any String, trim() function will remove extra space
                                                            // and length property will show the actual length without extra space
}

anotherUsername.trueLength(); // it will show 12 length
"sohail".trueLength(); // sohail is this object and actual length is 6
"sohail      ".trueLength(); // sohail is this object and actual length is 6 without space