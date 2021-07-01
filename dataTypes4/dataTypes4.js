// there are two types of data types: reference data types and primitive data types
// primitive: data allocatoin in stack
// reference: data allocation in heap
// primitive data types are base data types
// reference data types are objects, they are derived

// javascript is a dynmaically typed language
// dynamically typed means that if you assign a value to a variable, it will automatically figure out its data type and you do not explicitly have to tell a data type for a variable

/*
types of primitive data types:
string - a collection of alphanumeric characters, they are to enclosed within '' or "" or ``
numbers- they do not need to be enclosed
boolean- either true or false
null- intentionally null value
undefined- it is the default value of every variable
symbol- in further tutorials
*/

/*
types of reference data types:
arrays
object literals 
functions
dates
*/

// string operator
let name = "Hargun";
console.log("My name is "+ name);
console.log("My name is", name);
// you can concatinate two string variables or anything
// concatination means joining of two or more things
// in javascript you can use + or , for concatination
// difference between + and , in concatination
// + does not by default keep a space between two string or numbers which are to be concatinated
// , by default keeps a space between two strings or numbers which are to be concatinated
var bro;

console.log("Data type is", (typeof bro));
// you can figure out the type of a value using `typeof` method
// syntax: (typeof value)
// it will return the data type of the value, it could be any data type


// NUMBERS
let marks = 39;
console.log("Data type is", (typeof marks));
// this will return the data type of marks as number, if we enclose the number in quotes, it will become a string

// BOOLEAN
// a boolean can only be either true or false
let isDriver = true;
console.log("Data type is", (typeof isDriver));
// the data type is boolean

// NULL
// null has a very bogus value
let nullVar = null;
console.log("Data type is", (typeof nullVar));
// the data type of null is object, whereas null is a primitive data type and object is a reference data type
// null is a primitive data type and this occurs due to a bug in javascript version 1 which cannot be fixed because it would break other code
// more about it https://2ality.com/2013/10/typeof-null.html

// UNDEFINED
let undef = undefined;
console.log("Data type is", (typeof undef));
// the data type of undefined is undefined

// more about undefined and null https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined


// REFERENCE DATA TYPES
// Arrays
let myArr = [1,2,3,4];
console.log("Data type is",(typeof myArr));
// the data type of an array is object

// Object Literals
let employee = {
    name: "Hargun",
    salary: 600000,
    'job Post': "CEO"
}
// if you want to add a space in between key name, you will have to contain your key in quotes

console.log("Data type is", (typeof employee));

function findName() {
    
}
console.log("Data type is", (typeof findName));
// the data type of a function is function

let date = new Date();
console.log("Data type is", (typeof date));
// the data type of date is object

// more about primitive and reference data types
// https://www.youtube.com/watch?v=9ooYYRLdg_g
// very informative