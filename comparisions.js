// //console.log(2>1);
// //console.log(1>2);
// console.log(null);
// console.log(null>0)
// console.log(null ==0)
// console.log(null>=0)//it will give (true) because there is assumption
// console.log(Math.ceil(4.9));//it will provide  equal to or greater than the value
// console.log(Math.floor(4.9));//it will provide less or equal to the value
// console.log(Math.min(4,9,3,8,10));//it will provide smallest value
// console.log(Math.max(4,9,3,8,10));//it will provid maximum value
// console.log(Math.floor(Math.random()* 100));
// console.log(Math.floor(Math.random()* 10));
// console.log(Math.floor(Math.random()* 10 + 1));
// const min = 10;
// const max = 20;
// console.log(Math.random());


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min +1)))
let myDate = new Date()
console.log( myDate.toString());
console.log( myDate.toDateString());
console.log( myDate.toDateString());
console.log(myDate.toLocaleString());
//let myCreateDate = new Date(2023, 0, 23)
//console.log(myCreateDate.toDateString());
//let myCreateDate = new Date(2023, 0, 24,5,3)
let createDate = new Date("2023-01-14");
console.log(createDate.toLocaleString());
let myTimeStamp = Date.now()
console.log(myTimeStamp)
let myNewDate = new Date()
console.log(myNewDate.getMonth());
console.log(myNewDate.getDay());
console.log(myNewDate.toLocaleDateString('default',{weekday:"long",

}
))






















