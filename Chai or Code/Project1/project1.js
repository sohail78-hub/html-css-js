let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

//lets make loop for all buttons
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e.target);
        // body.style.backgroundColor = e.target.id; // it will set the body background color to the button id

        //OR Condition by Loop

        if (e.target.id == 'blue') {
            body.style.backgroundColor = 'blue';
            h1.style.color = 'white';
            h2.style.color = 'white';
        }


        if (e.target.id == 'grey') {
            body.style.backgroundColor = 'grey';
            h1.style.color = 'blue';
            h2.style.color = 'blue';
        }


        if (e.target.id == 'yellow') {
            body.style.backgroundColor = 'yellow';
            h1.style.color = 'black';
            h2.style.color = 'black';
        }


        if (e.target.id == 'green') {
            body.style.backgroundColor = 'green';
            h1.style.color = 'black';
            h2.style.color = 'black';
        }

    });
});



