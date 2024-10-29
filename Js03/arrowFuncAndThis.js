const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // here this will has stored the address of current object and upon printing this 
        //we will get the current object pointed by this.
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // usage of this in a function is not the same as object
        // in object this points to the memory location of the object , in function this points to global scope
// }

// NOTE : Arrow function doesnt get its own this , it inherits this from outer scope.
//  So doing this.username will result in undefined.
const chai =  () => {
    let username = "hitesh"
    console.log(this); 
}


// chai()

// Note: When using arrow function with curly braces, it is important to use return keyword to return something. 
// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // in short hand method return keyword is not used

// const addTwo = (num1, num2) => ( num1 + num2 ) // returnning statememtn are wrapped in curved ()brackets

const addTwo = (num1, num2) => ({username: "hitesh"}) // when returning an object we are absolutely required to use curved brackets.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// Link to learn about normal func vs arrow func
https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/#difference-table-of-regular-functions-and-arrow-functions