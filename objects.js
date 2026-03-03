// Objects can be declared in 2 ways: 
// 1- Literal notation, 2- Constructor notation

// Declare a Symbol and use it as a key
// Even though Symbol is a type, it behaves differently from strings
//const mysym = Symbol("*");

// // // Object literal
// // const JsUser = {
// //     name: "Humaira",
// //     age: 20,
// //     location: "Karachi",
// //     // To use a Symbol as a key, we need to wrap it in []
// //     [mysym]: "*", 
// //     email: "humairabaksh38@gmail.com",
// //     isLoggedIn: false,
// //     lastLoginDays: ["Mon", "Sat"]
// // };

// // // Accessing properties
// // console.log(JsUser.email);      // Dot notation
// // console.log(JsUser["email"]);   // Bracket notation (needed if property name is a string or dynamic)

// // // Accessing Symbol property
// // console.log(typeof JsUser.mysym); // undefined (because 'mysym' is not a string key in object)
// // console.log(JsUser[mysym]);       // Correct way to access Symbol-keyed property

// // Freeze the object to make it immutable
// // Object.freeze(JsUser);
// // JsUser.email = "Humaira@YT.com";  // This won't work because object is frozen
// // console.log(JsUser);

// // // Create an empty object to hold a function
// // const myfunc = {}

// // // Add a method to the object
// // myfunc.greeting = function () {
// //     console.log("Hello World");
// // }

// //Printing the function itself (reference, not executed)
// // console.log(myfunc.greeting);

// // // Executing the function
//  console.log(myfunc.greeting());  // Prints "Hello World" and then undefined (because function has no return)


//  JsUser.greetings = function () {
//    console.log(`Hello World , ${this.name}`);
// }

// console.log(JsUser.greetings());

//2 ways to declare obj
//singleton obj

// const tinderUSer = new Object ()
// console.log(tinderUSer);


//non - singleton obj

const tinderUSers = {}
//console.log(tinderUSers);

tinderUSers.id = "123abc"
tinderUSers.name = "Humaira"
tinderUSers.isLoggedIn = false
console.log(tinderUSers);


const regular_User = {
    email : "humaira@gmail.com",
    //obj k andr jab obj declare krte tou use : after obj name :
   
    fullname : {
        Userfullname : {
        firstname : "Humaira", 
        lastname  : "Bibi"
    }
  } 
}

//optional chaining => agr hmare pas fullname ka key hai tu hi print else nothing 
//it's like if and else -> API's mai response maii error na ae
console.table(regular_User.fullname?.Userfullname);

//target 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj 3= {obj1 , obj2}

//Not used widely -> assigning way
//{} phli val -> target baki sab source
//sari values combine and shown by copying the elements and return target and resource
//{} optional to use but it is target here guaranted and obj1, obj2 = source , 
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

//mostly used 
const obj3 = {...obj1,...obj2}
console.log(obj3);

//array k ander multiple objects

const users = [

  {
    name : "Humaira" , 
    last_name : "Bibi", 
  }
, 
  {
 id : 1 , 
 email : "humairabaksh38@gmail.com",
  }, 
]

users [1].email
console.log(tinderUSers)
//values print 
console.log(Object.values(tinderUSers));
//keys print krwai
console.log(Object.keys(tinderUSers));
//array k ander multiple arrays of different keys
console.log(Object.entries(tinderUSers));

//property ko use krne se pehle method use for checking if the property/ key exist or not? 
console.log(tinderUSers.hasOwnProperty('isLoggedIn'));

//destructuring obj / array both ki hoti. We destructure obj and get val of it

const course ={
  coursename : "Js in Hindi", 
  price : "99999",
  courseInstructor: "Hitesh"
}
//agr course ki koi val bar bar chaye hai tu code will be messy
//we use second method to avoid it that's  
console.log(course.courseInstructor);

//other syntax 
//konsi val extract krni and kahan se 

//here we can also use const {courseInstructor :instructor} = course aur ab hm bas instructor se hi call krskte hain

const {courseInstructor } = course
console.log(courseInstructor);

// react mai props hota tu we use destructring 

// {} => destructuring 

// const navbar = ({company}) =>{

// }
// navbar (company = "humaira")


//values ko likhte in JSON
//JSON mai val and keys dono hi " " string 
// 
// {
//   "name": "Humaira", 
//   "coursename" : "Js in Hindi", 
//   "price": "free",  
// }


//sometimes arrays ki form mai hote obj
[
  {},
  {},
  {},
]

//API's = JSON k format ma hota hai
