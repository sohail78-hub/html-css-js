const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');  // can be selected by querySelector




setInterval(() => {   // "setInterval" will run the function after every 1000ms (1s)
    let date = new Date();  // date() is built-in function of JS
    // console.log(date.toLocaleTimeString()); // it will show the time in the console
    clock.innerHTML = date.toLocaleTimeString(); // it will show the time in the clock
}, 1000);