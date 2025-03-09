const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
 
    e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if((height === '') || (height <= 0) || (isNaN(height))) {
    results.value = `Please provide a valid height`;
} else if((weight === '') || (weight <= 0) || (isNaN(weight))) {
    results.value = `Please provide a valid weight`;
} else {
    const bmi = (weight/((height*height)/10000).toFixed(2));
    
    // Show the Results
    results.value = bmi;
}

// for color text as per results

const forColor = document.querySelector('#guide');

if (results.value < 18.5) {
    forColor.children[1].style.background = 'green';
    
    }else if(results.value < 24.9) {
        forColor.children[2].style.background = 'green';
        
    } else if (results.value < 29.9) {
        forColor.children[3].style.background = 'orange';
        
    } else {  
        forColor.children[4].style.background = 'red';
        
    }

});