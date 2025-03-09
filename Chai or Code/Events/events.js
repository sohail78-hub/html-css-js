// document.getElementById('owl').onclick = ()=> {
//     alert("Clicked on Owl"); // OnClick event can create problem, we need to avoid it and 
//     // use "addEventListner" give propagation ability
// }

// +++++++++ addEventListner +++++++++++++++
// +++++++++ attachEvent() +++++++++++++++
// +++++++++ jQuery +++++++++++++++

// ++ Event Types ++++++
// type, timestamp, preventDefault,
// target, toElement, sourceElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// +++++++++ addEventListner +++++++++++++++
// document.getElementById('owl').addEventListener('click',(e)=>{   // in function "e" is "Event Object"
//     // alert("Owl Click again !! ");
//     console.log(e); // it shows it is pointer event
// },false); // default & 3rd parameter is always False but no need to write it.


// +++++++++ eventPropagation +++++++++++++++
// Event Propagation have two context, means eventBubbling & eventCapturing
// False: 3rd parameter is eventBubbling (it is default)
// True: 3rd parameter is eventCapturing

// understanding eventPropagation (Bubbling - false value)
// document.getElementById('images').addEventListener('click',(e)=>{ 
//     console.log('Clicked inside the UL');
// },false);

// document.getElementById('owl').addEventListener('click',(e)=>{ 
//     console.log('Clicked Owl'); // it will show owl and ul both messages, it means event bubble, first child (focus) than parent
// },false);  // if false Bubbling work from down to top means Child to Parent

// // understanding eventPropagation (Capturing - True value)
// document.getElementById('images').addEventListener('click',(e)=>{ 
//     console.log('Clicked inside the UL');
// },true);

// document.getElementById('owl').addEventListener('click',(e)=>{ 
//     console.log('Clicked Owl');
// },true);  // if true Capturing work from top to down means from Parent to child

// // understanding eventPropagation (stop Propagation)
// document.getElementById('images').addEventListener('click',(e)=>{ 
//     console.log('Clicked inside the UL');
// },false);

// document.getElementById('owl').addEventListener('click',(e)=>{ 
//     console.log('Clicked Owl');
//     e.stopPropagation(); // it will stop the propagation and will only focus on this event & will not show parent's event
// },false); 


// // understanding preventDefault()

// document.getElementById('google').addEventListener('click',(e)=>{ 
//     e.preventDefault(); // it will stop the default work, stop to visit the link
//     e.stopPropagation(); // it will stop propagation also
//     console.log('Clicked google Link');
// },false); 

// Hiding Images by remove() and removeChild function

// document.querySelector('#images').addEventListener('click',(e)=>{
//     // console.log(e.target);  // e.target will show from which source click performed (it will show complete source properties)
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(e.target.parentNode); // it will select complete parent node where image clicked
//     let removeIt = e.target.parentNode;  // creating removeIt variable to remove parent node / current node
//     // removeIt.remove();  // remove() function will remove current node by click on image 
//     // but if click on "li item", possible it will remove UL (Parent node)
//     // OR
//     removeIt.parentNode.removeChild(removeIt); // it will also remove parent Node
// },false);

// Hiding Images by remove() but check Tag Name (element name)
document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.tagName);  // it will show Target Node's "Tag Name" (element name)
    e.stopPropagation();
    e.preventDefault();
    

    if (e.target.tagName == 'IMG') {
        let removeIt = e.target.parentNode; // and it will remove Clicked Images
        console.log(e.target.id); // it wil print Node's ID
        removeIt.remove();
    }

}, false);