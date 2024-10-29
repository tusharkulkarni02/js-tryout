const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map is also similar to filter but we can use more functionality over it , as it itereates over all the elements.
// map is also chainable.
// const newNums = myNumers.map( (num) => { return num + 10}) 

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// chaining the previous chained method updates all the values of the array and then passes the new updated date to the next chained method.
console.log(newNums);