// ++++++++++++++++++++ High Order Loop +++++++++++++++++++
// ++++++++++++++++++++  For Of Loop +++++++++++++++++++++++

// ["","",""] array creation (string Array)
// [{},{},{}] object creation


// For Of Loop (For of Loops use for Arrays & Map Objects for iteration, it will not wrok with Objects)
// let mand = [1,2,3,4,5,6]

// for (const num of mand) {   // it will make a loop of mand instance as per the total size 
//                             // and each element will be store in num
//    console.log(num);
// };

// Restults 1,2,3,4,5,6

// +++++++++++++++++++ For of Loop +++++++++++++++++++++++++++
// +++++++++++++++++++ in Array for iteration +++++++++++++++++++

// // Print of String
// let animals = ["Tiger","Cheeta", "Black Panther", "Pink Panther", "Lion", "Lipord"];

// for (let anim of animals) {  // anim can be create by "let" or "const"
//     console.log(`Animals Names are: ${anim}`);
// };

// ++++++++++++++++ For Of +++++ Loop +++++++++++
// +++++++++++++++++ Using MAP ++++++++++++++++++++

// // Map (Adding key/properties and its values)
// // Map is Datatype object

let nop = new Map();

nop.set("IN","India");
nop.set("PK", "Pakistan");
nop.set("USA","United States of America");
nop.set("KSA","Kingdome of Saudi Arabia");
nop.set("IN","India");  // It will not take double Key, only take one time India


for (let nnop of nop) {  // it will print the same variable
    // console.log(nnop);
    
}

for (let [ndop,value] of nop) { // Destructure of Object by sepration of Key and its values
    // console.log(ndop);
    // console.log(value);

    // console.log(ndop,' :-: ', value); // Print Key and value seprately and put any text between.
}

// +++++++++++++++++++ For In Loop +++++++++++++++++++++++++++
// +++++++++++++++++++ in Object for iteration +++++++++++++++++++
// Iteration will work with "Objects"

let doit = {
    key1: "Lion",
    key2: "Tiger",
    key3: "Panther",
    key4: "Lipord",
    key5: "Cheeta"
};

for (const d2 in doit) {
    
    // console.log(d2); // it will print only Object Keys
    // console.log(doit); //it will print complete object as per the size of objects means 5 times.
    // console.log(doit[d2]); // it will print only values
    // console.log(`Value of ${d2} : is ${doit[d2]}`); // it will print Keys and Values
        
    }

// +++++++++++++++++++ For In Loop +++++++++++++++++++++++++++
// +++++++++++++++++++ in Array for iteration +++++++++++++++++++

let animals = ["Tiger","Cheeta", "Black Panther", "Pink Panther", "Lion", "Lipord"];

for (const anims in animals) {  // it is working in Array too
    // console.log(animals[anims]); // it print values in Array
        
    }

    // +++++++++++++++++++ For In Loop +++++++++++++++++++++++++++
// +++++++++++++++++++ Using Map Object for iteration +++++++++++++++++++

let nop2 = new Map();

nop2.set("IN","India");
nop2.set("PK", "Pakistan");
nop2.set("USA","United States of America");
nop2.set("KSA","Kingdome of Saudi Arabia");
nop2.set("IN","India");

for (const nnnp in nop2) { // Map will not work with "For In" Loop
    // console.log(nop2[nnnp]); // no results
}