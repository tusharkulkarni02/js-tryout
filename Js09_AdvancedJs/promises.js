
/* PROMISE in JS is way to handle the async activities , alternative to async and await 
   a. Here the object " new promise(callbackfun(resolve, reject){ })" 
   b. Promise object expects a callback funtion whose arguments are resolve and reject
   c. the resolve is for the execution of the task or sends a response.
   d. the reject used to throw an error or give error message

    Promise is asyc , thus browser wait for the response

   e. main functions used with the promises are .then() , .catch(),  .finally()
        All three receive something , either any value from promise block or the values returned by the
        blocks chained above them. (thenable)
*/


const promiseOne = new Promise(function(resolve, reject){ // creating a promise object and storing it in a variable.
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //  here we are sending the resolve response to the receiver.
    }, 1000) 
})

promiseOne.then(function(){ // using .then()
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){ // promises can be used alone itself without storing it in variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){ // .then() is directly attached to the promise
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){ // here in the promiseThree we are passing an object in the resolve.
    // resolve send the object as a response to the .then() block
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){ // the .then() will receive the user object 
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){ // here in promiseFour we are also sending a reject() response output
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong') // this will be caught by the .catch block
        }
    }, 1000)
})

 promiseFour // the promiseFour is chained the then, catch and finally directly.
 .then((user) => {
    console.log(user);
    return user.username // this will return the value to the next then in the chain.
}).then((username) => {
    console.log(username);
}).catch(function(error){ // this block will catch any error send by the reject() statement in the promise.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) // will always execute 



const promiseFive = new Promise(function(resolve, reject){ // promiseFive will be used with async and await.
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


/* Since we are using asnyc-await , the .then(), .catch(). functionality will not be available ,
    thus the async-await lacks error handling , to tackle this we can implement try-catch blocks on our own.
*/

async function consumePromiseFive(){ // async works same as then , the function is made async and will await till the promise sends a response.
    try {
        const response = await promiseFive // await collects the response from promiseFive.
        console.log(response);
    } catch (error) { 
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){ // this async function is using fetch() in order to get requests.
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch works on promise and sends a promise resopnse
//                        // await is used because fetch() sends a promise and takes some time.
//         const data = await response.json() // await is used because to convert response to JSON.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.