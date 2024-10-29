const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for-in loops can be used to iterate over objects and they iterate over keys of obejct.

for (const key in myObject) { 
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { // this will give the output of values corresponding to a index(key)
    // eg: 0 : js, 1: rb ...etc
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) { // this will not run , Since map is not iteratable
    console.log(key);
}