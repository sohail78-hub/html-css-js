let heading = document.getElementById("seconHeading");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    let userHeading = prompt("Enter Your Heading Name");

    heading.innerText = userHeading;

});

// btn.addEventListener("click", handler );

// function handler(){

//     let userHeading = prompt("Enter Your Heading Name");

//     heading.innerText = userHeading;
// }