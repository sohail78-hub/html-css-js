let a=30;
console.log(a);

// let a=35; (not possible to redeclare any variable by let)
a=36;
console.log(a); //possible can assign again

// const a=55; (not possible to redeclare any variable by Const)
const b=56;
console.log(b);

// b=57; (re Assign is not possible by Const)

let bb; // This is Undefined variable, because value is not assigned
console.log(bb); 

let ac=23; // number variable can carry from (-2power53 till -1 and till 2 power 53)
console.log(ac);

// BigInt can control more than 2 power 53 numbers.

let ad=6546464646454654646406465406498789797065406504000000000000000000000000000000000000000001321156813564843213456878783513213215489135135415341531515313511;
console.log(ad);

ac=false;
console.log(typeof(ac)); // typeof will show what type of variable it it.

let ss=Symbol("key");
console.log(ss);
console.log(typeof(ss));