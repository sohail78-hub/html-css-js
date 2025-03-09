let ba=1551;

function abc(){
    let a=23;
    let b=55;

    function ball(){
        let c=100;
        console.log(`Value of a: ${a}`); // a can print becuase it is in nested function of abc()
    
    }
    ball();
    console.log(ba);  // ba also printing because it is nested
    console.log(`Total Value is: ${a+b}`);
}

abc();