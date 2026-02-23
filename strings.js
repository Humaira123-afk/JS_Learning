const name =  "Humaira";
const age = 20;

console.log(`My name is ${name} and my age is ${age}`);

//second way to declare string =>

    const Gname = new String('Humaira') ;

     console.log(Gname.length);
     console.log(Gname[0]);
     console.log(Gname.charAt(2)) // ks index pe kia no hai 
     console.log(Gname.indexOf('i')); // char ks position pe hai 
     console.log(Gname.toUpperCase());

     //name ko divide kra in sub strinf from 0 to 4th values
    const newString = Gname.substring(0,4)
    console.log(newString)

    //is mai neg val bhi ati hain and also start from last / reverse
    const anotherString = Gname.slice(-7,3)
    console.log(anotherString)

    //mjhy form waghra mai kam aega when we have to remove spaces/ extra one
    const newStringOne = " Humaira " 
    console.log(newStringOne.trim())
     
    //browser spaces ko nhhi smjhta and spaces ko automatically convert krdega %20 and all
    const url = "https://humaira.com/humaira%20bibi"

    console.log(url.replace('%20','-')); //=> replace %20 by - 

    console.log(url.includes('humaira'))//=> humaira hai site mai ya nahi
    console.log(url.includes('bushra'))

    const named = "Humaira-Bibi"
    console.log(named.split('-'))

    const newVar = "Humaira"
    console.log(newVar.bold())

    const lc = "Humaira"
    console.log(lc.toLowerCase())
    
