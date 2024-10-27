let myDate = new Date()

console.log("This is a date Object:")
console.log(myDate)
console.log('\n')

console.log("This is a toString method of date:")
console.log(myDate.toString())

console.log("This is a toDateString method of date:")
console.log(myDate.toDateString())

console.log("This is a toISOString method of date:")
console.log(myDate.toISOString())

console.log("This is a toJS0N method of date:")
console.log(myDate.toJSON())

console.log("This is a toLocaleDateString method of date:")
console.log(myDate.toLocaleDateString())

console.log("This is a toLocaleString method of date:")
console.log(myDate.toLocaleString())

/*
This is a date Object:
2024-10-27T06:41:47.772Z


This is a toString method of date:
Sun Oct 27 2024 06:41:47 GMT+0000 (Coordinated Universal Time)
This is a toDateString method of date:
Sun Oct 27 2024
This is a toISOString method of date:
2024-10-27T06:41:47.772Z
This is a toJS0N method of date:
2024-10-27T06:41:47.772Z
This is a toLocaleDateString method of date:
10/27/2024
This is a toLocaleString method of date:
10/27/2024, 6:41:47 AM
*/

// Here are the different format in which we enter date and represent it.


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // gives curret date and time

// console.log(myTimeStamp); // gives the time passed from 1 jan 1970
// console.log(myCreatedDate.getTime()); // only gives time to the created data 
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})