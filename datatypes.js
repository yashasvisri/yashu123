/*console.log(3+4)
/*
null is a value or data type representing null value
undefined is when you have not defined the value
symbol =>unique
these all are the data type
*/
/*
let name="yashu"
let age = 25
let isLoggedIn= false
let state = null
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)
/* 
nan= not a number , it is also type of variable
when you are converting a number "33"= 33
but when you are converting "33abc"= NaN(not a number) but type will be number
true=1, false=0
*/

/*let score = "33abc"
console.log(typeof score );
console.log(typeof (score));
let ValueInNumber = Number(score);
console.log(typeof (ValueInNumber));
console.log(ValueInNumber);*/

//let score = null
//console.log(typeof score );
//console.log(typeof (score));
//let ValueInNumber = Number(score);
//console.log(typeof (ValueInNumber));
//console.log(ValueInNumber);
//let isLoggedIn= 1
//let booleanIsLoggedIn=Boolean( isLoggedIn)
//console.log(booleanIsLoggedIn)

//let isLoggedIn= "yashu"
//let booleanIsLoggedIn=Boolean( isLoggedIn)
//console.log(booleanIsLoggedIn)
//let someNumber= 33

//let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber );
// primitive :
// 7 types : string, Number,Boolean,null,undefined,symbol,BigInt
//reference type or non primitive data types
//1. Array
//2.objects
//3.functions
// javascript is dynamic type language

const score=100
const ScoreValue=100.3
const isLoggedIn= false
const outsideTemp = null
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)
const bigInt = 123456723n;
console.log(bigInt);
console.log(typeof bigInt);

const hero=["yashu","Bontha","Srikanth",];
console.log(hero)
let myObj = {
    name: "hitesh",
    age: 22
};
console.log(myObj);
const myFunction = function () {
    console.log("Hello world");
};
console.log(myFunction);
myFunction();
const name = "yashasvi";
const sirname = " srivastava";
//console.log(name + sirname + " " + 25);
console.log(`Hello my name is ${name}  and my sirname is ${sirname}`);

const firstchar = name[0];
console.log(firstchar);
const myname = "yashasvi"
console.log(myname[0]);
console.log(myname.__proto__);

console.log(Object.getPrototypeOf(myname));
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(2));
console.log(myname.indexOf('i'));
const newString = name.substring(0,4)
console.log(newString);
const anotherString = myname.slice(-8, 4);
console.log(anotherString);
const newstring = " yashasvi "
console.log(newstring);
console.log(newstring.trim());
const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=6948s"
console.log(url.replace('youtube', 'google'))
console.log(url.includes('youtube'))
console.log(url.split('.'))






















