console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);
console.log(2<1);

//we can't use 2 diff DT in TypeScript

// The == and >< >= <= work differently 
//Comparison >< converts null to a number treating as 0
//That's why (3) null > =0 is true and (1) null>0 is false

//avoid using these type of comparisons

// console.log(null>0) //false
// console.log(null==0) //false 
// console.log(null>=0) //true
//undefined ko js bhi comparison mai compare kren === false hi aega
console.log(undefined == 0)


//=== Strcit check  DT check + comparison

console.log("2"===2)

