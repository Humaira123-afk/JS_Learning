const arr = [2,4,5,6];
const myHeros = ["no_one" , "me"];

const arr2 = new Array (3,5,7,1);
console.log(arr2[1]); // 5

// add new value (end mai add)
arr2.push(10);
console.log(arr2);

// pop any value (last value remove hoti hai)
arr2.pop();
console.log(arr2);

// array k start mai value array index add
arr2.unshift(9);

// agar start wali value remove karni ho
arr2.shift();

console.log(arr2);

// check value exist or not
console.log(arr2.includes(10));
console.log(arr2.includes(100));

console.log(arr2.indexOf(5));

// array ko string mai convert
const newArray = arr2.join();

console.log(arr2); // original array
console.log(newArray); // string

// ORIGINAL ARRAY
console.log("A", arr2);

// slice → copy banata hai (original change nahi)
const myn1 = arr2.slice(1,3);

console.log(myn1);
console.log("B", arr2);

// splice → original modify karta hai
const myn2 = arr2.splice(1,3);

console.log("C", arr2); // modified array
console.log(myn2); // removed elements


const heros = ["a", "b", "c", "d"]
const me = [1, 2, 3, 4]

//dono srrays merge nhi hote bl k ye array k andr array ajata hai atlast of the prev array
//heros.push(me)

//not a good approach 
console.log(heros)
console.log(heros [3], [4]);

const allheros = heros.concat(me)
//ab heros ko concat kra isse dono arrays combine hojate hain
heros.concat(me)
console.log(allheros);

//spread the arays 
const all_new_heroes = [...heros, ...me]
console.log(allheros);

const another_array = [1, 2, 3, [4,5,6], 7 , [6,7,[4,5]]]


const  real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Humaira"))
console.log(Array.from("Humaira"))

//agr aise dein ge tu empty array q k name: "humaira" ko wo convert nahi kr parha hota (keys and val se array create)
console.log(Array.from({name:"Humaira"}))


//elements jnhe convert krwana ho wirte 

let score1 = 100
let score2= 200
let score3 = 300
//return se new array 
console.log(Array.of(score1, score2, score3));


//----------------------Practice-----------------
//Avrg of students marks

let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let i = 0;  i < Marks.length; i++ ){
sum += Marks[i];
}

let avrg = sum / Marks.length
console.log(avrg)

// array k hr item pe 10% off hai final price print

let price = [250, 645, 300, 900, 50]

for(let i = 0 ; i<price.length ; i++){
let offer = price[i] / 10;
let val = price[i] - offer;  
console.log(`Value after offer = ` +val)
}

console.log(price)


//Array to store companies 

let companies = ["Bloomberg", "Micro", "Uber" , "Google", "IBM"]
for(let i = 0 ; i<companies.length ; i++){
    console.log(companies[i])

    // //shift first val remove krta pop last val ko krta hai auto hai tu don't have to give val of index
    companies.shift()

    //replacement k liye splice use another way to replace is :
    companies[2] = "Word"

    //SPLICE: delet, replace, add sab krta hai where as SLICE = Original array se sub array => arr.slice(1, 3)
    companies.splice(2,1, "Ola")
    console.log(companies)

    //unshift start mai val add, push last mai val add
    companies.push("Amazon")
    console.log(companies)
