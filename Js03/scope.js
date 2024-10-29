//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

/* NOTE : The scope of a variable inside a browser is different as compared to the scope of a variable in node environment
            in browser this points to a global window object and in node environment this points to empty object.
    i.e core scope 
*/


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // allowed

function addone(num){
    return num + 1
}



addTwo(5) // not allowed
const addTwo = function(num){
    return num + 2
}

/* NOTE: The above examples in javascript differ in the way of decalaration of a function
        1st declaration -> declares the function without storing it in variable 
                        -> we can call the first declaration before the code anywhere


        2nd declaration -> declares the function and stores it in variable 
                        -> calling the second declaration form is only allowed after the declaration
*/
                        

