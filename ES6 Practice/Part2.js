/* 1. Promises */

// objects that represents completion of async operation

// 3 states: Pending, Fulfilled, and Rejected
// Promise passed in executor fn
// resolve fn helps move promise from pending to fulfilled (similar for reject)

const apiCall = new Promise(function(resolve, reject) {
  // async operation defined here. it's result decides resolve/reject
  if ( API request to get some data ) {
    resolve("The request was successful and the response is " + response);
  }
  else {
    reject("The request was unsuccessful. The error is " + error);
  }
});

// use handlers to get output from promise - when resolve or reject fn called

// then executes function param when resolve called in promise
// catch exectues funciton param when reject called in promise
// parameter of resolve() or reject() passed to function parameter in then() and catch()
apiCall
.then(function(x) {
  console.log(x);
})
.catch(function(x) {
  console.log(x); 
})

// output if resolve: The request was successful and the response is {name: "Karn Rahal"}
// output if reject: The request was unsuccessful. The error is 400


/* 2. Async/Await */

// Async keyword makes any funciton return only promises

async function hello() {
  return "Hello Promise!";
}
// is the same as
function hello() {
  return new Promise(function(resolve, reject) {
    // executor function body
  });
}

// returns a promise
// returning a value is equivalent to calling resolve fn
// returning error by calling error constructor (using new) is equivalent to calling reject fn
async function checkGreater(a, b) {
  // you can use resolve and reject inside async fn as well
  if (a < b) {
    return "Greater";
    // return Promise.resolve("Greater");
  }
  else {
    return new Error("Not greater");
    // return Promise.reject("Not greater");
  }
}

// call and handle promise
checkGreater(14, 10)
.then(function(x) {
  console.log("Good! " + x); // x will be "Greater"
})
.catch(function(x) {
  console.log("Oops " + x); // x will be "Not greater"
})

Output: Oops Not greater 


// Await makes JS wait till operation is done and then resume execution
// eg wait until we get response from API request

// Await works only inside async fn. doesn't work outside async fn

// Await returns resolved value from promises

async function hello() {
  // fetch response from given API endpoint
  let response = await fetch('https://api.github.com/');
  return response;
}

hello()
.then(function(x) {
  console.log(x);
})
.catch(function(x) {
  console.log(x);
})

// await only halts execution inside hello fn. code outside hello not affected (continues)
// when we get response, function parameter in handlers (then and catch) are executed

// if error is raised in async funciton or 