//singleton
// objects literals
//Object.create
const mySym = Symbol("key1")
const  Juser = {
    name: "Hitesh",
    "full name": "yashasvi",
    [mySym]: "mykey1",//if you want to use like symbols
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedinDays: false,
    LastLoggedinDays: ["Monday","Saturday"]
   



}
console.log(Juser.email)
console.log(Juser["email"])//it can be accessed as string
//console.log(Juser.full name)//you cant access like this 
console.log(Juser["full name"]);
console.log(Juser[mySym]);
//console.log(typeof Juser[mySym] );
console.log(typeof mySym);
Juser.email = "yashasvi@gmail.com"
// Object.freeze(Juser)// it will freeze the value wich means it cant be change
Juser.location = "Motihari"
console.log(Juser);
Juser.greeting = function()
{
    console.log("hello  js users")

};
Juser.greeting();//call the greeting function
console.log(Juser.greeting());
console.log(Juser);
Juser.greetingtwo = function()
{
    console.log(`hello  js users, ${this.name}` );

};
console.log(Juser);
console.log(Juser.greeting());
console.log(Juser.greetingtwo());
//++++++++++++++++++++++++++++conntinue with objects++++++++++++++++++++++++++++++
//const tinderUser = new Object()
const tinderUser = {};
console.log(tinderUser);
 tinderUser.id = "12345abc";
tinderUser.name = "yashu";
tinderUser.isloggedIn = false;
const regularUser = {
    email: "yashasvi@gmail.com",
    fullname: {
        username: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }

}
console.log(regularUser.fullname);








