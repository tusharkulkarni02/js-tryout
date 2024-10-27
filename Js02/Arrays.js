// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // right shifts the array elements by a pos of 1 and adds 9 in front of the array
// myArr.shift() // removes the first element of the array and returs that removed element

// console.log(myArr.includes(9)); // checks if the element is present or not
// console.log(myArr.indexOf(3));// give the indes

// const newArr = myArr.join() // converts the array elements into string which are concatenated and seperated by a comma

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice => creates the array including front the start and excluding the end index element

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //  Splice manipulates the original array and seperates the required section from the original array.
console.log("C ", myArr);
console.log(myn2);