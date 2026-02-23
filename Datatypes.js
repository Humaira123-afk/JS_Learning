// "use strict"; //treat all js code as newer version

// //alert("hello");

// //In JS we don't have data types by default it detect the DT by our assigned values

// //number 2 to 53
// //string => ""
// //undefined => undefined
// //boolean
// //null => standalone => obj 
// //symbol => for unique

// // Undefined
// let x;
// console.log(typeof x); // undefined

// // Null
// let y = null;
// console.log(typeof y); // object (JS quirk)

// // Number
// let age = 21;
// console.log(typeof age); // number

// // String
// let name = "Humaira";
// console.log(typeof name); // string

// // Boolean
// let isActive = true;
// console.log(typeof isActive); // boolean

// // Symbol => unique and immutable
// let sym1 = Symbol("id");
// let sym2 = Symbol("id");
// console.log(sym1 === sym2); // false, har symbol unique hai
// console.log(typeof sym1);    // symbol

// // Object
// let person = {
//   name: "Humaira",
//   age: 21
// };
// console.log(typeof person); // object
// console.log(person.name);   // Humaira

// // DT kii 2 types : primitive, non primitive => ks trhn se data ko memory mai store

// //primitive => 7 => call by val

// //non primitive = >(reference var)

// const id = Symbol('123abc')
// const another_id = Symbol('123abc')
// console.log(id === another_id )

// //n lagaya big int mai gaya
// const bigNo = 23453n;

// const heros = ["Humaira" , "Bushra" , "Aiman"];
// let myObj = {
//   name :"Humaira",
//   age : 20,
// }

//---------------------MEMORIES-----
//2 types of memories => stack(primitive types) and heaps (non primitive)

// stack => when used copy of our var
// heap => reference if original val (jo bhi chng kreinge wo yhn chng hoga)

let nameH = "Humaira";
let another_name = nameH;

console.log(nameH);
console.log(another_name);


let userone ={

  Name : "Humaira",
  Email: "Humairabaksh38@gmail.com",
  Age : 21,
};

let user_2= userone
user_2.Email = "newemail@google.com"

console.log(userone);
console.log(user_2);

