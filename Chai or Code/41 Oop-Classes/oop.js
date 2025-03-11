// +++++ Parts of OOP
// ++++  1. Object literal

const user = {
    key: "123",
    name: "Ahmed",
    singedIn: true,
    getUserDetails: function(){
        // console.log(this.name);
        console.log(this) // Print current context
    }
 } // object literal
console.log(user.getUserDetails());

// +++++ Parts of OOP
// ++++  2. Construction Function

const promiseOne = new Promise();
const date = new Date();

// 🔹 new is used to create an instance from a constructor (e.g., Promise, Date).
// 🔹 Without new, JavaScript will treat it as a normal function call (which may cause