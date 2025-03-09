// Lets Fetch data from an api

//  XMLHttpRequest()  - a constructor function will mostly use in API

// first we will make it as object by "new XMLHttpRequest"

// const requestURL = "https://randomuser.me/api/"  // An address from data fetch
const requestURL = "https://api.github.com/users/hiteshchoudhary";

let xhr = new XMLHttpRequest(); // we put XMLHttpRequest for creating new Instance
console.log(xhr.readyState); // // Initially, readyState = 0

xhr.open('GET',requestURL, true); // // Open API connection (async = true)
// console.log(xhr.readyState); // lets check the state of API is opened(1) or not(0)

xhr.onreadystatechange = function(){  // onreadystatechange is an event listener that runs whenever readyState changes.
    console.log(xhr.readyState);  // log readyState changes

    // When ready state show 4 than we can check response Text by following
    if (xhr.readyState === 4) {  // Request completed
        if (xhr.status === 200) {  
            console.log("Success:", xhr.responseText);
            let data = JSON.parse(xhr.responseText); // JSON.parse convert string data into JSON (which is object)
            
            
console.log(data.login);  // Access user login
console.log(data.avatar_url);  // Access user profile picture
let pic = `
<div>
<img src="${data.avatar_url}$" alt="img"/>
</div>
`
document.body.innerHTML += pic;

            // console.log(data.followers); // data response will be in string & the results will be "Undefined"
            console.log(data.followers);
        } else if (xhr.status === 404) {  
            console.log("Error 404: Resource Not Found");
        } else if (xhr.status === 500) {  
            console.log("Error 500: Server Issue");
        } else {
            console.log("Unexpected Error:", xhr.status);
        }
    }
};

xhr.send();  //Send request, this will work with onreadystatechange
console.log(typeof(xhr));