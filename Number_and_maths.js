//ye srf val return krega 
const score = 300;
console.log(score)

//ye balance k sth uske DT = Number bhi return krega
const balance = new Number(400)
console.log(balance)

//agar fixed / string mai convert krenge agr string mai krlia tu val k pas bht sare options honge
//prototyping

console.log(balance.toString().length)

//Ecommerce apps mai use for precise fixed val
console.log(balance.toFixed(1))

//toprecise 1 - 21 k beech val precise hsokti aur return val string hogi
const otherNumber = 24.58435
console.log(otherNumber.toPrecision(3))

//standard val in our number sys
const hundred= 1000000
console.log(hundred.toLocaleString('en-IN'));


const hundreds= 1000000
console.log(hundreds.toLocaleString());

//----------------------------MATHS-----------

console.log(Math);

console.log(Math.SQRT2);
console.log(Math.random());
console.log(Math.floor(3.42))
console.log(Math.ceil(3.42))
console.log(Math.abs(-4))
console.log(Math.PI)
console.log(Math.min(2,5,7,1));
console.log(Math.max(2,5,7,1));
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));

//like math.pow but in modern js 
console.log(2 ** 3);



//random => 0 and 1 k b/w random values provide
const max = 20;
const  min = 10;
console.log(Math.random() * (min + max))
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//dice ki sides hoti hain 6 aur + 1 for avoiding 0
console.log(Math.floor(Math.random()*6)+1);
