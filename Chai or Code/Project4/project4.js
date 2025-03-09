// Math.random() // it will generate random number between 0 and 1
// console.log(Math.random() *100); // it will generate random number between 0 and 100 but it can be 0
// console.log(Math.random() *100 + 1); // between 0 and 100 & no 0
// console.log(parseInt(Math.random() *100+1)); // it will change it into integer (no decimal)
let randomNumber = parseInt(Math.random() * 100 + 1); // holding random number in a variable

// Creating Selectors
const submit = document.querySelector('#subt'); // selecting the submit button
const userInput = document.querySelector('#guessField'); // selecting the input field

const guessSlot = document.querySelector('.guesses'); // selecting the Guess field
const remaining = document.querySelector('.lastResult'); // selecting the Last Result field
const lowOrHi = document.querySelector('.lowOrHi'); // selecting the Low or high field
const startOver = document.querySelector('.resultParas'); // selecting the Low or high field

// Need to create a paragraph

let p = document.createElement('p'); // creating a paragraph

// Guess Values will be save in following Array
let prevGuess = [];

// Attempt will be save in following Variable
let numGuess = 1;

// Creating a Boolean Variable of check true/false for Playing Game
let playGame = true;


//++++ function to check, user available for game or not

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(randomNumber);
        console.log(guess);
        validateGuess(guess);
    });
}
//++++ Validate Guess Number (Nan, 0 to 100) +++++
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}

// it will check the guess number is equal to the random number & display the message "You Win" or "Low / High"
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You got it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO Low !`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High !`);
    }
}

// it will clean the values from the field, update Arrays
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

//+++ Display Message, directly interact with DOM, show LowOrHigh +++
function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

//+++ for Ending Game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.classList.add('button');
    startOver.appendChild(p);
    playGame = false;
    // document.getElementById('subt').disabled = true;
    submit.disabled = true;
    newGame();
}

//+++ for New Game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        // document.getElementById('subt').disabled = false;
        submit.disabled = false;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;

    });
};



