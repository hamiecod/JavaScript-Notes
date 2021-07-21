console.log("Tutorial 7 - Arrays and Objects");

let marks = [23, 56, 43, 62, 95, 89];
// this is an array
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, [3, 5]];

/*
you can create arrays in two ways:
1. including the values within []
example: [1,2,3,4]

2. using new Array()
example: newArray(1,2,3,41)
*/

const arr = new Array(23, 123, 21, "Orange");
// console.log(arr);
console.log(marks);
// console.log(mixed);
// console.log(fruits);
// indexing in arrays starts from 0
// so we start counting in array from 0, loosely saying

// console.log(fruits[1]);
// array[index]
// this will return the index value of a specific array
// so index 1 one will return the second element of the array

// there are two things in array: property and method
// when a method is suffixed with () then it is a method, if not then it is a property

// it is a property
console.log(arr.length);
// array.length
// returns the number of elements in an array

console.log(Array.isArray([1, 2]));
// Array is a class
// isArray() is a method
// Array.isArray(array)
// returns whether a particular array is an array or not

// you can also change the elements of an array
arr[0] = "Hargun";
// changes the 0 index element(first element) to Hargun
let name = arr[0];
console.log("element:", name);
console.log(arr);

// we will primarily work with marks array

let value = marks.indexOf(56, 2);
// array.indexOf(element, index to start searching from);
// returns the index of the first occurence of the element
// if it is not found it returns -1
console.log(value);

// Mutating or Modifying arrays
marks.push(12);
// array.push(value)
// this method adds a specific value to the end of a particular array
console.log(marks);

marks.unshift(31);
// array.unshift(value);
// this method adds a specific value to the beginning of a particular array
console.log(marks);

console.log(marks.pop());
// array.pop()
// this method removes the last array item and returns it
console.log(marks);

console.log(marks.shift());
// array.shift();
// this method removes the first array item and returns it
console.log(marks);

console.log(marks.splice(1, 2, 55));
// marks.splice(startIndex, noOfElements, ...elementsToBeAdded)
// this method deletes the noOfElements starting from startIndex, and adds ...elementsToAdded in the place of the elements deleted
// it returns the deleted elements
console.log(marks);

marks.reverse();
// array.reverse();
// this method reverses the array
// all the methods change the actual array
console.log(marks);

let marks2 = [1, 2, 3, 4, 5];
marks = marks.concat(marks2);
// array.concat(array2)
// this method concatinates array and array2
// the array2 elements are added to the end of the array
// this method does not change the actual array
console.log(marks);

marks.constructor;
// array.constructor
// this method returns the constructor function for the array object
// it does not change the actual array

marks.copyWithin(5, 0, 5);
// array.copyWithin(target, start, end)
// this method copies certain elements inside an array to certain element inside the same array itself
// target is the index position to start pasting the elements from
// start is the index position to start copying the elements from
// end is the index position to stop copying the elements from
// the end index position is not copied
// if you want to copy the elements from 0 to 5
// it will copy the 0, 1, 2, 3, 4 elements
// it changes the actual array
console.log(marks);

const marksValue = marks.entries();
// array.enteries()
// this method returns an array iterator which can be iterated to get the key and value of each element in an array
console.log(marksValue);
// we need to iterate the Array Iterator in a loop to get the key value pairs
// the first variable in the for of loop contains the key and the value
console.groupCollapsed("MarksValue");
// running a for of loop to iterate the array iterator and get the key value pairs
// in arrays, the index is the key
for (let value of marksValue) {
  console.log(value);
}
console.groupEnd("MarksValue");

console.log(marks.every(checkPass));
// array.every(function)
// this methods checks whether each and every element of the array follows certain criteria
// if the function returns all trues, then it will return true, and if the function returns atleast one false, it will return false
// the function is to contain the condition, like marks>40
// you need to supply the array as the parameter of the function
function checkPass(marks) {
  return marks >= 20;
}

fruits.fill("Kiwi");
// array.fill(value)
// this method fills each element of an array with the same value that is given in the parameter
// this method changes the actual array
console.log(fruits);

console.log(marks.filter(checkMerit));
// array.filter(function)
// this method returns the elements which follow certain criteria in the array
// the function contains the condition, and if the condition returns true for a particular element, array.filter will return it
// you need to supply the array as the parameter of the function
function checkMerit(marks) {
  return marks >= 90;
}

console.log(
  marks.find((marks) => {
    return marks >= 90;
  })
);
// array.find(function)
// this method returns the first value that passes certain criteria
// the function contains the condition, and if the condition returns true for a certain element, array.find returns the particular element
// it only returns the first value matching the criteria

console.log(
  marks.findIndex((marks) => {
    return marks >= 90;
  })
);
// array.findIndex(function)
// this method returns the index of the first value that passes certain criteria
// the function contains the condtion, if it returns true, array.findIndex will return the index of the first element that the function returns true for
// it only returns the index of the first element matching the criteria

console.groupCollapsed("GoodMarks");
marks.forEach((studentMarks) => {
  if (studentMarks > 80) {
    console.log("✨", studentMarks);
  }
});
console.groupEnd("GoodMarks");
// array.forEach(valueVariable =>{}) is a loop
// forEach runs the function for each element of the array
// the first parameter of the function inside forEach stores the value of the current element of the array

console.log(Array.from("abcdef"));
// Array,from(string)
// this method generates an array from a string
// it transforms each character of the string into an array element
// it is a method of the Array class

console.log(marks.includes(95));
// array.includes(value, startIndex)
// checks whether an array includes a specific value
// returns either true or false
// startIndex is the index from where to start searching

console.log(marks.join(" "));
// array.join(separator)
// this method transforms the elements of an array into a string
// it separates each element of the array in the string by the sepearator
// if the separator is omitted, then comma is used to seperate the elements in the string

console.log(marks.keys());
console.groupCollapsed("marksKeys");
marksKeys = marks.keys();
// array.keys();
// this method returns an array iterator
// we need to iterate the array iterator to perform operations on the keys
for (let x of marksKeys) {
  console.log("🏹", x);
}
// the for of loop's first variable will contain the key and the second will contain the array iterator object
console.groupEnd("marksKeys");

console.log([NaN].indexOf(NaN));
console.log([NaN].includes(NaN));
// difference between indexOf and includes
// indexOf gives the index of the first matching value
// includes returns either true or false, based on whether a value is there in the array or not
// as indexOf uses string checking(===), it returns -1, when you search for NaN in an array which contains NaN
// include uses samevaluezero comparison algorithm instead of strict checking(===)
// samevaluezero algo is mostly same as ===, but when you compare NaN and NaN, they return true
// includes solves this problem as it returns true when you check if NaN is present in an array which has NaN
// more: https://stackoverflow.com/questions/35370222/array-prototype-includes-vs-array-prototype-indexof

console.log(marks.lastIndexOf(95));
// array.lastIndexOf(value)
// this method returns the index of the last occurence of a value in an array
// it returns -1 if the value is not found

console.log(marks.map(multiply));
// array.map(function(currentValue, index, arr))
// this method calls the function for each value of the array
// the function can have three parameters: currentValue, index(the array index of the current element), array(the array the current element belongs to)
function multiply(num) {
  return num * 10;
}

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
// Array.prototype.name=function(){}
// prototype is a global constructor
// it is a method of Array class
// you can create your own methods using prototype
// you need to give a function to ur prototype

console.log(
  marks.reduce((accumulator, currentValue) => accumulator + currentValue)
);
// marks.reduce(function)
// this method executes a reducer fucntion on each element of the area, and returns a single output value
// the function takes four arguements: accumulator, currentValue, currentIndex and sourceArray
// the reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration, and the accumaltor value then ultimately becomes the final, resulting value
// you can add a callback function, which will run if there is no accumulator value supplied
// you need to supply initialValue as an arguement to the callback function, the callback function's initialValue parameter will be used as the accumulator
// if no initial value is supplied, it takes the first value of the array as default

// current value is the value currently being processed in the array
// index is the index of the currently being proccessed value
// array is the array reduce() was called upon

console.log(
    marks.reduceRight((accumulator, currentValue) => accumulator + currentValue)
);
// array.reduceRight(function)
// reduceRight does the same thing as reduce() but it starts reducing from the end

console.log(marks.some((marks)=>{
    return marks>90;
}));
// array.some(function(array))
// this method returns if some elements follow some specific criteria
// returns true or false
// the function contains the condition which either returns true or false for each specific element
// if even a single element obeys the critieria array.some returns true

marks.push(104);

console.log(marks.sort());
// array.sort
// this method can sort an array in alphabetical order or in numerical order
// it can sort an array in ascending as well as descending order
// it returns the sorted array

console.log(marks.sort(function(a,b){ return a-b; }));
// generally, array.sort() wont sort numbers correctly, as suppose it will think 100 to be smaller that 90, because 1 comes before 9, as it compares from digit to digit
// so to make this not happen, we will have to supply a function as the parameter
// it will be used as a compare function by the compiler
// in the above function, it compares two numbers, so if it is comparing 100 and 40, the function will return -60, telling the interpreter that 40 should be placed before 100
// we can do array.sort in descending order by return b-a

console.log(marks.valueOf());
// returns the same value as marks


// --------------------------
// OBJECTS

let info = {
    name: "hargun",
    channel: "Simplest Tech",
    'is Active': true,
    marks: [1,2,3]
}
// an object contains a key and a value, a specific value corresponds to a specific key
// an object can also have arrays
// you have to contain the key inside quotes, if it has a space between

console.log(info);
// prints the whole object

console.log(info.name);
// object.key
// prints the specific key value from the specific object

console.log(info['is Active']);
// object[key]
// returns the specific value from the specific object
// it is the same as object.key but if you want to access a key which has a space in its name, you will have to use this format, and contain the key name in quotes

// Where to use arrays and objects
// when you just want to store some values, use arrays
// when you want to store some data in key-value pairs, use objects

array.forEach(element => {
  
});