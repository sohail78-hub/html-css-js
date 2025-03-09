// DOM - Document Object Model

// https://www.youtube.com/watch?v=DcjNkHtDj8A&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=31

// Brendan Eich, the creator of JavaScript, also created the first version of DOM in 1995.
// https://en.wikipedia.org/wiki/Brendan_Eich

// DOM is a programming interface for web documents. 
// It represents the structure of the document as a tree of objects.


// DOM - Document Object Model
let parent = document.querySelector('.parent');
console.log(parent); // it will show how many divs are there in the parent div
console.log(parent.children); // it will show the children of the parent div
console.log(parent.children[1].innerHTML); // it will show the value of child [1] 
console.log(parent.children.length); // it will show the length of the children of the parent div

// Loop through the children of the parent div
for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
}

//    let ch = parent.children;
parent.children[1].style.color = 'red'; // it will change the color of the children of the parent div
// console.log(parent.children[1].innerHTML); // it will show parent children [1]

// Selecting a first Child of parent
// console.log(parent.firstElementChild); // it will show the first child of the parent div
// Selecting last child of parent
// console.log(parent.lastElementChild); // it will show the last child of the parent div

// Selecting child by class name
const dayOne = document.querySelector('.day') // it will select the child class (day)
// console.log(dayOne); // it will show the first child of the parent div
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling); // it will show the next child of the parent div

console.log("NODES:", parent.childNodes); // it will show the nodes of the parent div