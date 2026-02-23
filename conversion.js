//maybe if you're working on BE and someone is recieving val by filling form an maybe it will be in string not in number

let score = 33
let scores = "33abc"

console.log(typeof score)
//it becomes string now 
console.log(typeof scores)

console.log(typeof (scores))

let valueInNumber = Number (scores) 
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" =>33
//"33qbc"=> NaN
//true => 1, false => 0;


let userLoggedIn = "Humaira"

let booleanUserLoggedIn = Boolean (userLoggedIn);
console.log(booleanUserLoggedIn)

// let userLoggedIn = ""

// let booleanUserLoggedIn = Boolean (userLoggedIn);
// console.log(booleanUserLoggedIn)

//1=>true , 0=> false
//agar khali chor dia "" tu means false aega no logged in user
// agr koi val hai tu true qk user logged in ha


let No = 45
//we have to put our var+ val into new var to save the string wali val ka var 
let stringNo = String(No)
//now we have to print the new val wala var that is string wala var
console.log(stringNo)
//we have to use the string wla var to see the type also 
console.log(typeof stringNo)


//------------------OPERATIONS-----------------------------

let val = 3;
//val q k dobara aassign krte huay hmne -ve mai krdi thi tu val -ve mai chale gayi 

let negVal = -val;
// agr yhn val -ve mai dein ge tbhi jaegi else not means accept horhi hai -ve val but not going into neg by default
console.log(-3);

//2^3
console.log(2**3)
console.log(2-3)
console.log(2+3)
console.log(2/3)
console.log(2%3)


//2 strings ko bhi add kr skte hain like

let firstName = "Humaira"
let secondName = " Bibi"

let FullName  = firstName+secondName;
console.log(FullName);

//string mai kr rha hai convert 

console.log("1" +2)
console.log(1+ "2")
console.log("1" + 2+2)
console.log(1+ 2 +"2")

//x =0 
let x = 0; 

// // x = 0+1
// console.log(x++)
// //1+1 => 2
// console.log(++x)

//but if we do 

x = 0 
//0 + 1  => 1
console.log(++x)
//current val x = 1 + incre +1 = 2
console.log(x++)
//final val => 2 
console.log(x)


// //output => 1+5 => 6
// let b= 5; 
// console.log(++b)
// console.log(b)

// //output => 6 + 1 => 7
// let a = 6
// console.log(a++)
// console.log(a)