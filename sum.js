// function sum(a,b){
//     return a+b;
// }
// var ans=sum(10,20);
// console.log(ans);
let originalObject = { a: 1, b: { c: 2 } };

// Deep copy using JSON.stringify and JSON.parse
let deepCopy = JSON.parse(JSON.stringify(originalObject));
