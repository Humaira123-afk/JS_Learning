//----------------------FOR----------------------

//cursor -> select -> ctrl + d =>sare select
for (let index = 0; index < 10; index++) {
    const element = index; 
    console.log(element); 
}

//table print 
// 
for(let i = 0; i<= 10; i++){
  for(let j = 1 ; j<=10; j++){
    console.log(i + ' * ' + j +  " = "  + i  *  j  );
        
    }
}


//--------------------For of --------------
//allow to use loop on string, array 
// is mai jo bhi var len ge ye khudi de dega 
let str = "Humaira"
for (let val of str) {
    console.log(val);
}

let string = "Humaira Bibi";
let size= 0;
for (let val of string) {
    console.log(val);
    size++;
}
  console.log("Size of " +string + " is " +size);
   
  
  //----------------------------For in --------------------
//arrays and Objects mai use => ye hmein hmari key return krta hai 
//values of keys bhin nikal skte 
let student = {
    name : "Humaira", 
    age : 20,
    cgpa : 3.30, 
    isPass: true, 
};

for (let key in student) {
console.log(key ,student [key]);
}


//--------------ARRAY WITH FOR---------------------

let myarray = ["a", "b" , "c"]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);

}

//--------------------------break and continue-------------

for (let index = 1; index <=20 ; index++) {
if(index==5){
    console.log("Value 5 is detected ");
    // stop here =>
    //break;
    continue //jo condition hai usy print krwate huay skip krdia 
}
    console.log(`Value of i is ${index}`);   
}

//--------------------------PRACTICE QUESTIONS (FOR)----------------

// let num = Number(prompt("Enter a number"));

// if(num % 5 == 0){
//   console.log(num + " is multiple of 5");
// }else{ 
//   console.log("Not a multiple");
// }

//even numbers from 0 - 100 print

for(let i = 0 ; i<=100 ; i++){
   // console.log(i); => total no from  0 to 100 
    if(i % 2 ==0){
        console.log("even numbers are: " +i );

    }
    }

    for(let i = 0 ; i<=100 ; i++){
   // console.log(i); => total no from  0 to 100 
    if(i % 2 !=0){
        console.log("odd numbers are: " +i );

    }
    }




//-----------------------While / Do while ------------

// while (condition) {

// }

let index =0 ;
while(index<= 10){
    console.log(`Value of index :${index}`);
    index = index +2
}

// let array = ["A", "B" , "C"]

// let arr = 0
// while(arr<array.length){
//     console.log(`Values is : ${array[arr]}`);
//     arr =  arr +1 ;
// }

//-----------------Foreach/ Forof / Forif---------------

//Forof : string, array ksi pe bhi lagaskte hain , element => your var, object => apka array, val js mai values of elements hain 

//const element of object
const arr = [1, 2, 4 , 5, 6 ,9]
for (const val of arr) {
    console.log(val);
}

//Strings:

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(greet);
}

//maps: ye bhi aik obj hi hai jo key values rkhta hai is mai keys hoti sari 

//order and uniqueness hoti is mai: 
const map  = new Map()
map.set ('Pa', "Pakistan")
map.set ('USA', "United State")
map.set ('Ir', "Iran")
map.set ('Pa', "Pakistan")
console.log(map);

// FOROF + map
//array ko destructure krte yhn
for (const [key, val] of map) {
    console.log(key, ' : ' , val );
}

//--------------Forin-------------------

const myObj = {
    js: 'javascript', 
    cpp : 'c++', 
    rb : 'ruby', 
}

//key sirf key reutrn kre gi not obj tu 
for (const key in myObj) {
//use this for returning key + obj
    console.log(`${key} ${myObj[key]}`);
}





//-------------PRACTICE (while)-----------

// let Gamenum = 40;
// let Userno = prompt("Guess the number");
// while ( Userno != Gamenum){
//  Userno = prompt ("You entered wrong number")
// }
// console.log("Congratulations");

//-------------ADVANCE-----------------

//name mai spaces add nahi krwani hain js name: 
// let Fullname = prompt("Enter your full name ");
// console.log ("Your user name is : " +"@"+Fullname+Fullname.length);