
console.log("for primitive datatypes")

let a = 56
let b = true
let c = "Tushar"
let d = null
let e;
let f = 1n
let g = Symbol(56);



console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)

console.log("Now for Referenced or Non-Primitive datatypes")

let arr = ["apple", "orange", "pomegranate"]

let obj = {
    fname: "Tushar",
    lname: "Kulkarni",
    mNo: 1234567890
}

let foo = function(){
    console.log("hello this is JS try-out rev")
}

console.log(typeof arr)
console.log(typeof obj)
console.log(typeof foo) // this will op a function type of datatype name but in reality it is a function-object datatype 
// so it is also a type of the object