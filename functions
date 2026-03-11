
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
