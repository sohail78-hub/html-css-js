// Edit & Remove elements in DOM
// Lec 34 ( Chai or Code)

function addLang(langName) {
let li = document.createElement('li');
li.innerHTML = `${langName}`;

    document.querySelector('.languages').appendChild(li);
}
addLang('C++');

//OR 

function addOptiLanguage (langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.languages').appendChild(li);
}

addOptiLanguage('Cobol');
addOptiLanguage('HTML');

// Edit of Li

const secondLang=document.querySelector("li:nth-child(2)");
// console.log(secondLang);

// secondLang.textContent = '22222'; // this is not good approach

const newli = document.createElement('li'); // Create newli
newli.textContent = '22222';  // Put the new value in newli
secondLang.replaceWith(newli); // replaced it with newli

// Edit of Li with OuterHTML (Means it will replace the whole li with new li)

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>11111</li>'; // New li will replace the old li with value 11111

// Remove Li

const lastLang = document.querySelector("li:last-child");  
lastLang.remove(); // it will remove the last li