

//---------------methods and functions----------

//method: Wo function jo ksi aur object k andr use kre jae
//function:  reusable code 


//Agar method array ko iterate kar raha hai → to value parameter milega.

//even though we put () empty we have to use it -> defintion of function
function MyName()
{
    console.log("Humaira");
}

//execution //MyName => reference without using ()
MyName ()


//function with para 
//parameters
function Add (number1, number2){
   console.log((typeof number1==="string" || typeof number2==="string")?("NaN"):(number1+number2)
 );
    }
//arguments
Add(3,"4")
Add(3, 4 )

//return wale functions ko console log se nahi kr skte hain 
function add_no (){
    let result = number1+number2
    return result
    //return krwane k baad agr hm kuch leikhen ge not gonna work
   // console.log(result);

}

//agr values hi pass nahi ki tu undefined aega
function loginUser (username){
    return `${username} just logged in`
}
console.log(loginUser("Humaira"));

//Rest operator = spread operator

//... used for making rest operator ta k aik  array l array ki val print hone k baad aisa na ho baki ghaib
//else srf 200 ata agy ki nahi ati values 

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200 ,400, 500));

const user = {
   username : "Humaira",
 price :199,
}

function handlingObj(user){
    console.log(`User name is ${user.username} and priice is ${user.price}`);
}

handlingObj(user)

//ARRAYS + OBJ

const newArray = [200, 400, 500]
//get array mai chali gai hain na pori array ki vls ab tou whn se get 
function returnCondVal(getArray){
return getArray[1]
}
console.log(returnCondVal([200, 400, 500]));


//vowel count in functions

function Countvow(string){
   let count = 0;
    for(const char of string){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
   count++;
        }
}
console.log("Count of vowels in " +string +" is " ,count);
}

Countvow("humaira")


//----------------------SCOPE--------------------------------


//var scope se bahar bhi ho tbhi bhi print krdeta hai
//Global scope  out of the block but block k bahar val access nahi kr skte in block scope

//nestedScope => child func parent k func ko access kr pate hain
function one (){
const username = "humaira" 
function two (){
    const website = "YT"
    console.log(username);
    
}
//error bcz website ko block k bahar access krne ki try kr rhe 
//console.log(website);

//function two run nahi hua tu line byline execution ki wja se 1 bhi nahi hoga execute ab
two ()
}
one()

if(true){
    const username =  "Humaira"
    if(username=== "Humaira"){
        const website = " YT "
        //ye wla print hojaega 
       // console.log(username + website);
    }
   // console.log(website); //error bcz website ka scope sirf if ki statement tk hi tha
}
//console.log(username); // username ka scope out hai 



//------------------------------concept----------------------

//agr hm argment pass kreinbefore declaring func tu will not give error q k ye fun hai scope k andr hi


console.log(addone(5));
function addone(num){
    return num+1
}

//expressions=> bcz yhn hm ne value ko store kra hai in addTwo func mai tou ye error de ga 
//agr declare se pehle hmne call krdia usy tu => hosting concept

//addtwo(4)
let addtwo = function (num){
    return num+2
}


//----------------------ARROW FUNCTIONS (This keyword)---------------------------

//this keyword => current context ko btata hai 

//arrow func apna this nhi banta wo scope ka this use krta 

const userDetail ={

    //current context these 2 only 

    username : "Huamira", 
    price: 1000000,

    //welcome msg ko function mai print krwaya .Jo bhi user new ae usy welcome msg show 
    //abhi k liye "Humaira" user hai agr koi aur user aya tu? 

    welcomeMsg : function( ){
        console.log(`${this.username} , welcome to website`);
        
        //current context ko le k ae ga this tou yhhn wo ye detail hai humaira ki agr maine
        //user name change kia tu this ki val bhi update hojaegi aur phr jo username hoga usy le k pora context aega new wala
        
        console.log(this);
        
    
}
}
//call krwaene k liye obj + function ka nam agya
userDetail.welcomeMsg()
//username ko ksi ne agr change krdia in that case : 
userDetail.username = "Bushra"
userDetail.welcomeMsg()

// jab khali call kia bht sara data 
// function tea(){

//     agr ye line add krein tou undefined arha 
//  console.log(this.username);
//     console.log(this);
    
// }

// tea()


//---->How to declare functions<----

//arrow funct mai {} aega not undefined
const tea = () =>{
    let username = "Humaira"
    console.log(this);
}

tea()

//---------------------ARROW FUNCs----------------------

// //(work) =>{block of code }
// const addTwoNo = (numb1, numb2) => {
//     return numb1+numb2
// }

// //const addTwoNo => arrow func k val ko var mai store kr rhe 
// const Multi = (numb1, numb2) => {
//     return numb1*numb2;
// };

// console.log(`Value of multiply is `+Multi(3, 4));

//implicit function:
// aik line statement tou return ki need nahi , agr () use tou return nahi agr {} use tu return must 
// const addTwoNos = (numb1, numb2) => (numb1+numb2) //can also do numb1+numb2

// console.log(addTwoNos(3, 4));


// //It can be also like this: without any para //func is not accepting argurments
// const printHello = () =>{
//     console.log("Hello")
// }

//-------------------Obj with arrow-------------

//ghlt : const add = (a,b) => {username:"Humaira"} js ko lgae ga ye block hai 


//objs mai must () use honge
// const add = (no1 , no2) => ({username: "Humaira"})

// console.log(add(3, 4));

// const myArray = [2, 34 ,5 ,6]
// myArray.forEach()


//-----------------------------PRACTICE-------------

function VowelsCount(string){
let count =0;
for(let i = 0; i<string.length; i++){

    //string = "Humaira" agr string === a kia mtlb hmne a ko compare kia string se but
    //we have to check the val at every index string[0] ="H" and so on

    if(string[i] === "a" || string[i] === "e" || string[i] === "i"   || string[i] === "o"   || string[i] === "u" )
    //agr count += string likh tu wo pori string val dega not vowels 
        count += 1;
}
console.log("No of vowels in "+string+ " = " +count);
}

VowelsCount("Humaira")


//Same question with arrow functions:

const countVow = (string)=>{

    let count =0;
for(let i = 0; i<string.length; i++){

    //string = "Humaira" agr string === a kia mtlb hmne a ko compare kia string se but
    //we have to check the val at every index string[0] ="H" and so on

    if(string[i] === "a" || string[i] === "e" || string[i] === "i"   || string[i] === "o"   || string[i] === "u" )
    //agr count += string likh tu wo pori string val dega not vowels 
        count += 1;
}
console.log("No of vowels in "+string+ " = " +count);

}

countVow("Hello World")


//--------Reduce Method-------------(min, max,avrg,sum )
//multiple val hain aur unehin calc kr k aik single val arhi ho
//filter/ map/ reduce same => array ko iterate krte hain sab

//Ye poore array ko combine karke ek single value banata hai.
 
//max , minimum no's 
let array  = [12, 32, 23, 14]

const max = array.reduce((prev, cur)=>{
    return prev > cur? prev : cur;
});
console.log(max)


//For sum calculate = 10

let arr = [1, 2, 3, 4]
const output = arr.reduce((res, cur)=>{
    return res + cur
});
console.log(output)


//------------------ARRAYMETHODS :(map)

//use for 1, 1 array k index pe ja k kam krna like for each history
//new array bhi bnadeta hai ye -> val use kr k new array bnana ho tu ye hai

//val error nahi dega q k in funcs ka para hi val declaration hai


// map aur filter mai 3 para hoskte hain : array.map((value, index, array) => {})

//MAP: Hr item ko transform krdeta but items ki quantity same rhti 

let nums = [44, 5, 67 , 12]
let newArr =  nums.map((val)=>{
    return val * val 
});
console.log(newArr);


//---------------------PRACTICE(MAP)-------------------

let ar = [3, 44, 5, 1,7]
let sqr = ar.map((val)=>{

//aise bhi hoskta aur yhn hm return krwa k print bhi krwa skte hain
//console.log(val * val);
return val*val
});
console.log(sqr);

//10% tax add:
let prices = [100, 200, 300]
let tax = prices.map(val => val+10)
   console.log(tax);


// Names ko uppercase mai convert: 
let names = ["ali", "sara", "humaira"];
let upp = names.map((val)=>{
return val.toUpperCase()
})
console.log(upp);


//-------------------------(Filter Methods ) + PRACTICE-------------


//filter methods => ksi condition ki base pe val filter krna

let arrs = [3, 4, 5,6 , 7,8, 9] 
let even_arr = arrs.filter((val) =>{
    return val % 2 == 0

});
console.log(even_arr);


//filter mai call back hota jo ya tu true/ false hi rtrn krta hai

//90+ marks ka array bnana hai

let marks = [87, 93, 64, 99, 82 , 90, 98]
let toppers = marks.filter((val)=>{
    return val > 90
});

console.log(toppers);


//3 se divisible aur < 10 wale number print:

let nmb = [3, 6, 9, 12, 15]
let filtered = nmb.filter(val=>  val % 3 === 0 && val >10)
console.log("val that are divisible by 3 and > 10 : "+filtered);

//> or = 18 wali val print
//parameter => expression

let age = [12, 18, 22, 15, 30]
//val => (val>=18) => current val (condition)
let res = age.filter(val => val >= 18)
console.log(res);

//word length > 4 wali val print

let words = ["cat", "dog", "Elephant" , "Lions"];
let animals = words.filter(val => val.length >= 4)
console.log(animals);

//-----------------------PRACTICE (Filter+map)----------

//even nmbrs + square of even nos

// let nmbrs = [1, 2, 3, 4, 5, 6, 7, 10];
// let results = nmbrs
// .filter(val => val % 2 === 0)
// .map (val => val*val )
// console.log(results)

let nmbr = [1, 2, 3, 4, 5, 6, 7, 10];
let result = nmbr.filter(val=>val % 2 === 0 ).map(val => val * val)
console.log("nmbrs divisible by 2 and there square = ")
console.log(result);


//OUTPUT GUESS: return nhi lagya tu val are undefined agr lagya tu [15, 25, 35 ]

let numbe = [10,20,30];

let results = numbe.map(val => {
  return  val + 5;
});

console.log(results);

//------------------------------------------------

//for calculating no that user wants to multiply or etc like 1, 2,3 , 
//tou when user will enter 3 tu 1, 2, 3 then sum and then factorial aega 

// let n = prompt("Enter a number: ")
// let aray = [];

// for(let i = 1; i<n; i++) {
//     aray [i-1] = i;
// }

// console.log(aray)
// let sum = aray.reduce((res, cur)=>{

//     return res + cur;
// });
// console.log(sum);

// let factorial = aray.reduce((res, cur)=>{

//     return res * cur;
// });
// console.log("Facto of the " +n +factorial);

//----------------------------Immediately invoked function expression -----------

//global scope k pollution se prblm hoti hai tu usy var, declaration htane k liye isy use kra 

//code end show krne k liye ; imp
//paranthesis tu pora code of block ban jata
// (function chai(){
// console.log("DB connected");
// }) ();

// //funct defi pehla wala () dosra execution () -> named IIFE


// ( function me () {
//     console.log("DB connected two");
    
// }) ();

// ( function chai() {
//     console.log("DB connected two");
    
// }) ();


//name ko praa pass kra  -> unnamed iife
// ((name) => {
//     console.log(`DB connected two ${name}`);
    
// }) ("Humaira");

//------------------------------PRACTICE(FOR-EACH)--------------------

//higher order func/ method => foreach loop -> aise func jo dosre func ko as a parameter le lete hain ya func jo para use kr rha usy return krte hain
// also call back 

let num = [1, 2, 3, 4,5,6]

// arry ki jaga pe num likha array ki val  aur element ki jaga pr val
num.forEach((num) => {
    console.log("Numbers are: " +num);
    console.log("Square of numbers are: " +num * num);
});

//number printing =>simple
let numb = [3, 4, 5, 1]
numb.forEach(numb => {
    console.log(numb);
}); 

//we can pass array.forEach((value, index, array) => {
   
let fruits = ["apple", "mango", "banana"];
fruits.forEach((val, index ) => {
    console.log(index, val);
    
});



