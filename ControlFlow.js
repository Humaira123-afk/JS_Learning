//---------CONTROL FLOWS:

// if(condition==true){
// jbhi condition mai jaege code run 
// }


// if(condition==false){
// jbhi condition mai jaege code run 
// }

//if :

// const isuserloggedIn = true
// if(isuserloggedIn(){

// }

//----------Comparision operators-----------

// <, >, <=, >= , ==(equality check) , = (value assign) , != (not equal)  , === (type + value check)


//------IF and Else-----------------

//if temprature is greater then 50 or not?

let temprature = 40;
if(temprature > 50 ){
    console.log("Temprature is greater then 50");
}
else{
    console.log("Temprature is less ");
    
}

const score = 200;
if(score>100){
    const power =" Flying";
    console.log(`User power = ${power}`);
}

const balance = 10000
if(balance<500){
    console.log("Balance less than 500");
}
else if (balance<700) {
console.log("Balance less than 700");
}
else if(balance==10000){
console.log("Balance is equal to 10000");
}
else{
    console.log("Value is greater then 10000");   
}


const userloggedIn= true;
const debitCard= true
const loggedInFromGoogle = true
const LogedInfromEmail= true

if(userloggedIn && debitCard){
    console.log("Allow user to buy course");
}
else if (loggedInFromGoogle && LogedInfromEmail)
{
    console.log("Allow user to login");

}

//----------------------------SWITCH---------------

//aik key ko multiple cheezun se match krna 

//(Shift + alt + downarrow = same cheez dow pe copy)
const month = 3
switch (month) {

    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;

    default: // kuch match nahi hua tou default like else
        break;

    //case "jan" wagra bhi askta hai
    //agr break nahi kia tu sari val print krde ga sare cases ki without breaking srf default nahi krega
}

//empty val tou wo else mai jaega 

//------------TRUTHY--------------------

//all except then false are truthy, "0" as a string true, "False"
// " " , [ ], { }, function (){ } , also=> false == 0, false == ' ', 0 == ' '

//------------Falsy--------------------

//false, 0, -0, BigInt, "",0n,  null, undefined, NaN

//Obj / Arrays ko empty detect krne k liye:
const emptyObj = { }
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//-------------------Null Coalescing Operator (??) : null undefined val k liye

let val1;
//val1 = 5 ?? 10
//null val hai agr tu safety check 
val1 = null ?? 10 
console.log(val1);

//val1 = undefined ?? 15 => frist val jo assign hai wahi print
val1 = null ?? 10 ?? 10

//-------------------Ternary operators------------

//condition ? true : false
const iceTeaPrice =  100
iceTeaPrice>=80 ? console.log("less than 80"): console.log("More than 80");

