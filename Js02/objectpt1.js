// my try

const Obj1 = {
    fname: "Alan",
    lname: "Kilmernock",
    age:20,
    email: "Alan@gmail.com"
}


console.log(Obj1);

Obj1.greetFunction = function(){
    console.log(`Hello, congratulations ${this.fname} on going in depth in js!`)
}

console.log(Obj1);

console.log(Obj1.greetFunction())

// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // creating a symbol to use as a key in an object


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // whenever we use a symbol as a key in an object we do it in square brackets i.e. [symbol]
    // otherwise it won't assume it as a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // as full name field has space we cant use dot (.) operator to access it instead use Object.["key"]
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) freeze the object so that no one can change it keys and values.

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());