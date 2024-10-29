// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // Mostly used to iterate over maps which are not accessible using normal looping methods
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) { // for of can be used on strings as well
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() // creating a map
map.set('IN', "India") // inserting keys and valuse in a map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // iterating over a map using for of loop
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// gives error that myObject is not iteratable
for (const [key, value] of myObject) { // objects cannot be accessed using for of loop like map
    console.log(key, ':-', value);
    
}