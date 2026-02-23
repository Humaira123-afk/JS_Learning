"use strict"; //treat all js code as newer version

//alert("hello");

//In JS we don't have data types by default it detect the DT by our assigned values

//number 2 to 53
//string => ""
//undefined => undefined
//boolean
//null => standalone => obj 
//symbol => for unique

// Undefined
let x;
console.log(typeof x); // undefined

// Null
let y = null;
console.log(typeof y); // object (JS quirk)

// Number
let age = 21;
console.log(typeof age); // number

// String
let name = "Humaira";
console.log(typeof name); // string

// Boolean
let isActive = true;
console.log(typeof isActive); // boolean

// Symbol => unique and immutable
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false, har symbol unique hai
console.log(typeof sym1);    // symbol

// Object
let person = {
  name: "Humaira",
  age: 21
};
console.log(typeof person); // object
console.log(person.name);   // Humaira

