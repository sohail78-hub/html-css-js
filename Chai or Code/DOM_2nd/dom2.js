
//Creation of Button via DOM & forEach loop

const arr1 = ['ashish', 'bhanu', 'naveen', 'gautam']
const arr2 = ['blue', 'green', 'yellow', 'red']
arr1.forEach((text, index) => multipleButtons(text, arr2[index]))


function multipleButtons(text, bgColor) {
   const button = document.createElement('button')
   console.log(button)
   button.setAttribute('className', 'firstbutton')
   button.setAttribute('type', 'submit')
   button.style.backgroundColor = `${bgColor}`
   button.style.cursor = 'progress'
   button.style.padding = "12px"
   button.style.borderRadius = "10px"
   const textnode = document.createTextNode(`${text}`)
   button.appendChild(textnode)
   document.body.appendChild(button)
}
document.write("<br><br>Hello this is document write<br><br>");
document.write(document.baseURI, "<br><br>");

document.write(document.body, "<br><br>");

document.write(document.cookie, "<br><br>");
document.write(document.doctype, "<br><br>");
document.write(document.documentMode,"<br></br>");
document.write(document.lastModified,"<br></br>");
document.write(document.scripts,"<br></br>");