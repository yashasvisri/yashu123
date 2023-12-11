 const myArr = [0,1,2,3,4,5]
// const myHeros = ["shaktimaan","naagraj"]
// const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr[0]);
// //Arrays Methods
// myArr.push(7,8,9)
// myArr.pop()
// console.log(myArr);
// // myArr.unshift(10)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(2));//it says the value exists or not 
// console.log(myArr.indexOf(9));//it gives -1 if the value does not exists
// console.log(myArr.indexOf(3));// it will return the value if the vlaue exists
// const newArr = myArr.join()//it gives as a string which is string types
// console.log(myArr);
// console.log(newArr);

// slice and splice
console.log("A",myArr );
const myn1 = myArr.slice(1,3)//returns the copy of section of an array
console.log(myn1);//output-[1,2] it extract the the value by range given to it
console.log("B" , myArr);
const myn2 = myArr.splice(1,3)
console.log("c" , myArr)
console.log(myn2)
//Array continue
// Declare mySym once
const mySym = Symbol("key1");

const Juser = {
    name: "Hitesh",
    "full name": "yashasvi",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedinDays: false,
    LastLoggedinDays: ["Monday", "Saturday"]
};

console.log(Juser.email);
console.log(Juser["email"]);
console.log(Juser["full name"]);
console.log(Juser[mySym]);

Juser.email = "yashasvi@gmail.com";
Juser.location = "Motihari";

console.log(Juser);

Juser.greeting = function() {
    console.log("Hello JS users");
};

Juser.greeting(); // Call the greeting function

// Set the greeting property with a value
Juser.greetings = "Hello everyone! Welcome to my profile.";

// Access the greeting property in Juser
console.log(Juser.greetings);





