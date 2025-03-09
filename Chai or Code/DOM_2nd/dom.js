// Create element in document's Memory

const div = document.createElement('div');
console.log(div);
div.className = 'main';
div.id = Math.round(Math.random()*10+1); // it will generate random ID number
div.setAttribute("title", "This is a Div Element"); // it will set the title of the div element
div.style.backgroundColor = "brown"; // it will set the background color of the div element
div.style.color = "white"; // it will set the color of the div element
div.style.padding = "10px"; // it will set the padding of the div element
div.style.borderRadius = "10px"; // it will set the border radius of the div element
// // for puting text in element following method is not appropriated
// // always use setAttribute method, it is optimized approach
// // div.innerText = "This is a Div Element"; // it will set the text of the div element

const addText = document.createTextNode(`This is a Div Element`); // created new Nodes
div.appendChild(addText); // it will append the text in the div element

// // Element will be added in the body of the document from the memory
document.body.appendChild(div);




