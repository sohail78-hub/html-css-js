// ++++++++++ Same code will use by try() & Catch() function
// async function getAlluser(){
//     try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch the data from link
//     // and will take time so use await
// console.log(response); // this data only for view it is still not for use, so we convert it into JSON
    
//     const data = await response.json(); // converting response instance data into json object 
//     //& storing in data, converting to json will also take time so we put await
//     console.log(data);
// } catch (error) {
//     console.log('E :', error);
// }

// };

//     getAlluser();

// ++++++++++ Same code will use by .then() .catch()
// in a short way

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> {
    return response.json();
})
.then ((data) => { // handle return in data
    console.log(data);
})
.catch((error)=> console.log(error));