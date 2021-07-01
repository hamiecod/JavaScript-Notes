// type conversion in JavaScript
console.log("Welcome to tutorial 5");
let myVar;
myVar = String(34);
// here we are changing the data type of 34 that is a number to a String data type

console.log(myVar, (typeof myVar));

let booleanVar = String(true);
// here we are converting a boolean into string
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// converting a date object to a string
console.log(date, (typeof date));

let arr = String([1,2,3,4,5]);
// converting an array to string data type
// while converting an array to a string the enclosing brackets do not count
console.log(arr, (typeof arr));
// data type determines the properties of a value
// for example in the above array, their are 5 values, but when you convert it to a string it is classified as 9 characters(the commas are included)

// what is the benefit of converting other data types to string data type:
// on string data type, you can use a vast collection of string functions

let position = 8;
console.log(position.toString());
console.log(String(position));
// converting number to string
// their are two ways two convert a data type to a string, they are listed above- value.toString() and String(value)
// these both methods have very minor difference that too at the interpretation level
// their difference: https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring


// Number
let stri = Number("3234");
// converting a string to number
// if you convert an alphanumeric value to a number it will return NaN
console.log(stri, (typeof stri));

let isTouching = Number(true);
// while converting boolean to number, true will correspond to 1 and false will correspond to 0
console.log(isTouching, (typeof isTouching));
// if you try to convert anything invalid to a number, it will return NaN

let roll = Number([23,133,34]);
console.log(roll, (typeof roll));
// an array cant be converted to a number so it will return NaN

// let length = parseInt('33.232');
let length = parseFloat('33.346');
// parseInt will convert a value to an integer value
// parseFloat will convert a value to a decimal value
console.log(length.toFixed(2), (typeof length));
// toFixed(value) will show the ${value} number of decimal points after the value, also it rounds up the value while showing a specific number of decimal points


// TYPE COERCION IN JAVASCRIPT
let salary = "3000";
let bonus = 100;
console.log(salary + bonus);
// when you are using the + operator with string and number type, during runtime the interpretor has two options:
// 1. convert the number to a string and concatinate both the strings
// 2. convert the string to a number and add the both
// so the compiler chooses the former, this is called type coercion
// type coercion refers to the implicit conversion of values
// you can choose the 2nd explicitly by type converting the string to a number

/*
there are three types of type coercion:
1. non-string to string conversion: it is done when a non-string data type is added to a string
2. non-number to number: it is done when -,*,/ or % operation is performed, all non-number values are converted to number
3. Boolean to number: when a boolean is added to a number, it is converted to number, 0 for false and 1 for true
4. equality operation(non-number to number): == is used to compare values irrespective of their data types, so suppose a string is compared to a number, it will be converted to a number due to coercion, all non-number types are converted to number type.

more about coercion: https://www.geeksforgeeks.org/what-is-type-coercion-in-javascript/
*/