let x=2**2;
console.log(x);

let a=30;
a = a%8;
console.log(a);

//first print than incease
console.log(x++);

// First decrement and than print
console.log(x);
console.log(--x);


//Loose Comparision
console.log('5'==5); //it will show True because values are same but '==' not comparing data type.

// Strick Compairsion
console.log('5'===5); //it will show False because datatype is not same.

//loose Not Equal
console.log('4'!= 4); // it will check values only

//loose Not Equal
console.log('4'!== 4); //it will check datatype & values both

// TENERAY Operator
// syntax if True than print the Value after"?",  if False than print the value after ":"
let d=19;
console.log( d>18 ? 'I am able to vote':'I am under 18');

// or i can write above by following Syntax

let delta= (d>18) ? 'Yes, i can Vote' : 'I am not, sorry';
console.log(delta);

// Short
console.log( 18 || fasle || "Good man");

let ans = !(false); // It means 'not - flase' and '!(Ture)' menas not True
console.log(ans);

// Bitwise (Binary Representation) of values with "&"" it will work on 1 and 0
console.log(2&5);
console.log (3&5);

//Bitwise (Binary Representation) of values with '|' or
console.log(2|5);

// XOR method will work with '^', if True & false or 1 or 0 value than it give answer 1, otherwise 0
console.log(true^false);
console.log(true^true);
console.log(false^false);

// Bit wise not '~'
console.log(~(0));

//Bit wise shift left <<
console.log(2<<3);

//Bit wise shift righ >>
console.log(5>>1);

// Control Statement / Conditional Statement (if -else) (switch)
let age = 15;

if (age >= 18)
{ 
    console.log('You can caste Volte');
}
else
{
    console.log('You are unable to caste Vote');

}

// Multiple Else if can work

let marks =81;

if (marks >=90)
{
    console.log("Grade A1");
}
else if (marks >=80)
{
    console.log("Grade A");
}
else if (marks >=70)
{
    console.log("Grade B")
}
else
{
    console.log("Not Qualified");
}

let dent = 5;

switch(dent)
{
    case 1: console.log("A");
    break;

    case 2: console.log("B");
    break;

    case 3: console.log("C");
    break;

    case 4: console.log("D");
    break;

    default: console.log("No any Value Matched");
}

// Template literals (Template strings)

let as = 5;
let bs = 10;
console.log("Fifteen is " + (as + bs) + " and\nnot " + (2 * as + bs) + ".");
// "Fifteen is 15 and
// not 20."

console.log(`string text line 1 \
    string text line 2`);
    // "Back slash will ignore next line"

    console.log(`string text line 1
        string text line 2`);
        // "string text line 1
        // string text line 2"


