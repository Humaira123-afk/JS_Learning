
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
    console.log(result);

}

//agr values hi pass nahi ki tu undefined aega
function loginUser (username){
    return `${username} just logged in`
}
console.log(loginUser("Humaira"));

