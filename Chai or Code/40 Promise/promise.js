// Two parts of promise
// 1. Promise Creation   2. Promise Consumtion

let promiseOne = new Promise(function (resolve, reject) { // two callbacks "Resolve" or "Reject" 
    // Do an async Task
    // Promise use for (DB calls, file handling, cryptography, network requests)

    // 1. Promise Creation by following method (like):
    // ------------------------------------

    setTimeout(function () {
        console.log('Async task 1: is complete');  /// in case of complete
        resolve(); // we need to call resolve(), Async Task it will connect with then(function())
    }, 1000)
})

// 2. Promise Consuming by following method (like):
// ------------------------------------

// promiseOne.then() // then() direct connected with "resolve", inside then value returns

promiseOne.then(function () {
    console.log("Promise Consumed");
})

// Method 1:
// -----------
// we can write Promise resolve like following also:
// no need to create Instance for Promise & then() 

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve(); // resolve is must
    }, 5000)
}).then(function () {
    console.log("Async Task 2 resolved/consumed");
});

// Method 3:
// =========

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" }); // passing object parameter in resolve to check in then();
    }, 6000)
}).then(function (user) { // taking parameter from resolve()
    console.log("Task 3 Consumed with Parameters from resolve(): ", user);

});

// Method 4: (get response and handle the error)
// =========

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) { // if no error
            resolve({ user1: "Ahmed", email: "abc@gmail.com" }); // if no error than it will pass this parameters
        } else {  // else error than
            reject(' Method 4: ERROR: Something went wrong');
        }
    }, 8000
    );
})
// .then() then will perform the task while consumed
// .catch() catch will show the error

promiseFour.then((user) => {

    console.log(user); // Print returned user
    return user.username // to take return username
})

    .then((username) => {  // chain system getting username from upper function
        console.log(username); // print the returned name
    })

    .catch(function (error) { // if promise not work then catch the error by catch()
        console.log(error);  // and print the error
    })

    .finally(() => {  // finaly look default function which will work any how (error or no error)
        console.log("The Promise either Resolved or Rejected")
    })

//  OR CAN DO BY FOLLOWING (async, try & catch)
// Method 5: (get response and handle the error)
// =========================================

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
    if (!error) {
        resolve({ course: "JavaScript", password: "123" });
    } else {
        reject("Erorr: JS went wrong");
    }
},9000);

});

async function consumePromiseFive() { // async not handle errors directly
    try {
        const response = await promiseFive; //it will wait to run the code
        console.log(response);
    } catch (error) {
        console.log(error); // if error then catch will show the error
    }

}

consumePromiseFive(); // run the function 