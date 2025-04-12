// ************ Classes in JS ****************
//++++++++++++ ES6 ++++++++++++++++++++++++

//Classes are a template for creating objects. 
// They encapsulate data with code to work on that data. 
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.


// class User {  // Class are like function ()
// 	constructor (username,email,password) {
// 	this.username = username,
// 	this.email = email;
// 	this.password = password
// 	}

//     // add one function which encrypt the password parrameters
// encryptPassword() {
// 	return `${this.password}abc`; // with the Original password it add abc
// 	}

//     changeUsername(){
//         return `${this.username.toUpperCase()}`; // this function when call, it will return username in Upper Case
//     }
// }

// const chai = new User ("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the Scene ( same as per Class defined up)

function User2(username, email, password){
    this.username = username,
	this.email = email;
	this.password = password
}

User2.prototype.encryptPassword2 = function() {
    return `${this.password}ccc`;
}

User2.prototype.changeUsername2 = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User2 ("tea","tea@gmail.com","2233")
console.log(tea.encryptPassword2());
console.log(tea.changeUsername2());