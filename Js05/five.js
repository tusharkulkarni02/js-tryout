
const coding = ["js", "ruby", "java", "python", "cpp"]

// NOTE: For-Each loop expects a callback function in the argument.

// here we are printing a value of each element in the coding array
coding.forEach( function (val){
    console.log(val);
} )

// here we are printing a same value using arrow callback function
coding.forEach( (item) => {
    console.log(item);
} )

// We can also pass already defined function to the forEach loop
function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // here only the address of printMe function is passed i.e we pass it without parenthesis.

coding.forEach( (item, idx, arr)=> { // forEach loop automatically provides the three arguments , [value, index, array]
    console.log(item, idx, arr);
} )



// Array of objects.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

// using forEach on the array of object, here the arguement item is actually the individual object contained in the array.
myCoding.forEach( (item) => {
    console.log(item.languageName); 
} )
