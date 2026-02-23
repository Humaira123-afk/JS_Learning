let Name = "Humaira";
let Id = 2312420
var Age = 21;
let Email ;

//If i'll try to use const with changing intialized var then it
//it will always through an error so we are not gonna change or reinitialize the val again even with same values also

Name = "Humaira";
Id = 1;
Age = 2;

//table is used for making a structred table format instead of printing
//each variable one by one by using console.log
console.table([Name,Age, Id, Email]);

//in output Age and Id will be changed , Email was'nt defined so it will give us undefined and we can't initialize Name again