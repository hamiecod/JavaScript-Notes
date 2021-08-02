console.log("Loops in JavaScript");

// a loop is a function which is repeatedly executed until a condition returns false
// loops are used to do tasks repeatedly
// there are three main loops: for, while and do while

// FOR LOOP
for (let i = 0; i < 10; i++) {
  console.log("🐸i is", i);
}
/*
for(declaration; condition; updation){
    code;
}

declaration is the declaration of the variable to be used in the loop
declaration is only executed once during the timeline of the loop
the condition needs to be true for the loop to be executed
updation is the updation of the loop variable to let the loop work on updated values and not the same value everytime
*/
let a = 2;
for (null; a < 10; a++) {
  console.log("🐈a is", a);
}
// if you do not want to declare a variable in a for loop, just write 'null' in declaration

// WHILE LOOP
// let j= 0;
let j = 110;
while (j < 100) {
  console.log("🐉j is", j);
  j++;
  j += 1;
}
/*
while(condition){
    code;
    updation;
}
while loop is similar to for loop but in while loops, you do not need to declare a variable and define the updation in the parameters of the loop instead you just need to define a condition in the parameter of the while loop
it is very highly recommended to add an updation after the main loop code because if the conditon variable is not updated the loop would transform into an infinite loop causing trouble
when the conditon returns false, the loop wont run
j++ and j+=1 are one and the same thing
if the condition is false, the loop won't run at all
*/

// DO WHILE LOOP
let k = 0;
// delete(k);
// you can delete a global variable as well as an object property by using delete(variable)
// it will not delete variables declared with var, let or const keyword
console.log(k);
do {
  if (k == 5) {
    break;
    // the break statement breaks the loop
  } else if (k == 2) {
    k += 1;
    continue;
    // the continue statement stops the loop and does not execute the commands after the it has broken the loop
    // it does not execute the code after it is executed and then it runs the loop from the start
  }
  console.log("😉k is " + k);
  k++;
} while (k < 10);
/*
do{
    ...code;
} while(condition)

do while loop is exactly similar to while loop, there is just one difference that the condition is checked after the loop has been executed
due to this, the loop is run the first time even if the condition is false
*/

// FOR EACH LOOP
let hobbies = ["programming", "talking", "cooking"];
hobbies.forEach((element, index, array) => {
  console.info("My hobby is", element, index, array);
});
/*
array.forEach(function(element, index, array){
    code;
});
forEach iterates over the values of an array
the first parameter for the function inside the forEach is a value of the array
the second parameter for the function inside the forEach is an index of the corresponding value of the array
the third parameter for the function inside the forEach is the array itself
you can also use an arrow function inside of forEach
*/

// For of loop
let info = {
    name: "Hargun",
    'github repository': "JavaScript-Notes",
    // contain the object key inside quotes if it contains spaces
    age: 14,
    'favorite programming language': 'JavaScript',
}
for (const key in info) {
    console.log(`The ${key} of Hargun is ${info[key]}`)
}
/*
for(const key in object){
    code...;
}
forIn loop is used to iterate over the keys of an object
it takes two parameters- the first one being the key and the second one being the corresponding object
*/

// FOR OF LOOP
for (const element of hobbies) {
    console.log('I like', element);
}
/*
for of loop is similar to for in and forEach
for of loop is used to iterate over the values of an iterable object
for(const element of iterableObject){
    code;
}
the first parameter is the value of the iterableObject
the second parameter is the iterable object
*/

/*
BONUS
the difference between , and + concatinator
when you use , for concatination, it returns the concatinated value without converting it to a string and returns the concatinated value by just joining the two(or more) values
when you use + for concatination, it returns the concatinated value by converting it to a string data type
*/
