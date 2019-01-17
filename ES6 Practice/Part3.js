/* 1. Imports and Exports */

// Exports used to export a variable of function or classes
// can be used in other modules

// Imports work vice versa

// Example 1

// app.js
export const name = 'Karn';
export const age = '22';

// index.js
import {name, age} from './app'
console.log(name); // Karn
console.log(age); // 22

// Example 2

// app.js
export default const username = 'Karn';
// default values used when exporting single var/fn/object
// only 1 default value in a module

// index.js
import username from './app.js'
// import n from './app.js' // can use any name to reference default value
console.log(username);
// console.log(n)


// Example 3

// app.js
let a = 10;
let b = 2;
let sum = () => a + b;
export {a, b}
export default sum

// index.js
import * as variables from './app' // import all variables
import addition from './app' // default value
console.log(variables.a); // 10
console.log(variables.b); // 2
console.log(addition()); // 10 + 2 = 12

// 1. when using *, you need to have alias to refer to imported values (eg. variables)
// 2. using * doesn't import default value, need to import it seperately

import addition, * as variables from './app' // all in 1 line