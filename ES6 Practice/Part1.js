/* 1. let is similar to var but has scope */

// eg 1
if (true) {
  let a = 40;
  console.log(a); // 40
}
console.log(a); // undefined

// eg 2
let a = 50;
let b = 100;
if (true) {
  let a = 60;
  var c = 10;
  console.log(a/c); // 6
  console.log(b/c); // 10
}
console.log(c); // 10 becuase c is var
console.log(a); // 50 cause outside scope value used


/* 2. const used to assign constant value to variable (cannot be changed - it is fixed) */

const d = 50;
d = 60; // error cause you cant change value of const

// you can add to const arrays/lists but you can't reassign the var to something else
const languages = ['js', 'Ruby', 'python'];
languages = 'Javascript'; // error
languages.push('Java'); // works fine


/* 3. Arrow function */

// Old syntax
function oldOne() {
  console.log("Hello");
}
oldOne();

// New syntax
// const newOne = () is declaring a variable and saying it will be assiged a function
const newOne = () => {
  console.log('Hello'); // => is declaring body of function
};
newOne();

const NewOneWithParamters = (x, y) => {
  console.log(x + y); // 30
};
NewOneWithParamters(10, 20);


/* 4. Default parameters */

const Func = (g, h = 10) => g + h; // different syntax with return
Func(20);

const NotWorkingFunction = (j = 10, k) => j + k;
NotWorkingFunction(20); // NaN cause 20 gets assigned to j and nothing to k


/* 5. for of loop */

// similar to python for num in nums loop
let arr = [2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
// works for strings as well


/* 6. Spread attributes */

// convert list to array and vice versa

// instead of passing array, we are passing eles as arguemnts
// and these get converted into array
Math.max(10, 20, 30, 40); // returns 40
let arr = [10, 20, 30, 40];
Math.max(arr); // error cause doesn't accept array
Math.max(...arr); // returns 40


/* 7. Maps */

// holds key value paris like hashmap
// not restriced to 1 datatype for key
var NewMap = new Map();
NewMap.set('name', 'Karn');
NewMap.get('name'); // returns Karn
NewMap.set(5, ['A', 'B']);

NewMap.size; // 2
NewMap.keys(); 
NewMap.values();

for (let key of NewMap.keys()){
  console.log(NewMap.get(key)); // outputs 'Karn', ['A', 'B']
}

// can output key,value pairs as well
for (let ele of NewMap) {
  console.log(ele); // outputs ['name', 'Karn']
}

// or this way
for (let [key, value] of NewMap) {
  console.log(key + ', ' + value);
}

/* 8. Sets */

// similar to sets in other languages - no duplicates
let sets = new Set();
sets.add(5);
sets.size; //1
sets.has(5); // true


/* 9. Static Methods */

// same as other languages
class Exmaple {
  static Callme() {
    console.log("static method");
  }
}
Exmaple.Callme();

// don't need to use function inside Class
// can call fn without creating instance of class


/* 10. Getters and Setters */

class People {
  
  constructor(name) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }

  set Name(name) {
    this.name = name;
  }
}

let person = new People("karn");
person.Name = "Karen";