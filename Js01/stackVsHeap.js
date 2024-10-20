
// All the primitive datatypes are stored in stack and copies of them is formed(pass by value) at the time of using them.
let a = "JavaScriptTryout" // declaring a original variable a

let b = a // value of a is assigned to b
console.log("val of a:") 
console.log(a)

console.log("val of b:") 
console.log(b)

b = 32

console.log("val of b after overwriting b:") 
console.log(b)
console.log("val of a after overwriting b:") 
console.log(a)



// Referenced Datatypes are stored in Heap Memory they are passed by reference i.e they dont make copies of themselves at the time of using
// instead they pass as a reference of their memory location

let user1 = {
    fname: "Denis",
    lname: "Ritche",
    height: "6ft 2inch"
}

console.log(user1);

let user2 = user1 // user2 will also point to the same memory location as that of user1
console.log(user2)

user2.lname = "lillie" // changes made via user2 will also affect user1 object
console.log(user1)




