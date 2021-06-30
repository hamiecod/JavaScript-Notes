console.log("tutorial3- varaibles");
/* Variables in js
a variable is a container that is used to contain something
suppose you use a bottle for storing water, similarly we use variables to store values
you cannot store rice in a bottle, because bottle is made to store something else, similarly particular type of variables are used to store particular type of values

keywords used to make variables: var, let, const
when we tell our interpreter that a particular variable exists - it is called declaration/initialization
a value can be assigned to a particular varaible after it has been declared */

var name = 'hargun';
/*
var variableName = value;
a string in modern javascript can be contained within single quotes(''), double quotes("") and backticks(``)
what is the difference between using each of them:
the only difference is that when you are using a particular symbol to represent a string, you can use another type of symbol inside the string
for example you are using backticks(``) to represent a string, then you can use '' and "" inside the string
for example you are using "" to represent a string then you can use `` and '' inside the string but you cannot using "" inside the string as it will return an error
it is a common pratice in modern javascript to use `` to contain strings as backticks are rarely used in the formation of string, and also you can use '' and "" in the strings when you use `` to contain the strings

these all symbols represent strings
a string is a value made up of alphanumerics(digits, symbols and alphabets) 
*/

var channel;
/* var nameOfVariable;
here we are just initializing the variable and not assigning it any value
we are just telling the interpreter to reserve the space and memory for the variable and not assign it any value
it is just like buying a bottle and not storing anything in it
*/

channel = 'Simplest Tech';
// existingVariable = value
// here we are assigning a value to an already existing variable
// it is just like using an already bought bottle to store something

var marks = 42;
/* here we are asigining an integer value to marks variable
you can also write 42 as a string instead of a number but that comes with its own advantages and disadvantages: as u will not be able to perform arithmetic operators on strings, whereas you can perform arithmetic operators on numbers
a number cannot contain alphabets
var number= 3463fs;
it will throw you an error as this is not a valid number as it contains alphabets */

marks = 0;
// variableName = newValue;
// we can change the value of a variable like this

console.log(name, channel, marks);
// if a variable has no value it will print `undefined` as it has no value
// you will notice that an integer value is printed in blueish color in the color representing a number, it will appear normally if it is a string

// comma(,) is used as a concatinator and is used for concationation of values, it adds a space between values, when it is used
// more about concatination in further tutorials

/* Rules for creating javascript variables:
1. Cannot start with numbers
2. Can start with letter, number, _ or $
3. Variable names are case sensitive
*/

var city = 'Delhi';
// if you use some other symbol like ^ the variable will not be valid and the interpreter will throw you an error
// you can use $ and _ in variable names, but you should always avoid them as they create confusion, though it would be correct syntax
// _ and $ create confusion because _ is used in variable names to represent private variable in object oriented javascript and $ is used in frameworks like jquery
console.log(city);

// with the arrival of modern javascript, let and const are used more than var
// they improve code readability a lot
const ownerName = "Hari Ram";
// ownerName= "hargun";
// we cannot change the value of const
// const is used in making variables which could not be changed
console.log(ownerName);

const fruit = 'Orange';
// const fruit;
// we cannot just declare a const, we need to give it a value

// const has a block scope
// const has a global scope if declared at the root. as it then assumes the root as its block

// LET
// let has block level scope where as var has global scope
// block can be inside loops and conditionals, etc.
{
    let city = "Seoul";
    // this will only keep Seoul as the city for only this block as let has a block scope

    // let, just like const, has a global scope if declared at the root(not inside any block) - it just assumes the whole document as the block

    city = "Texas"
    // if there is no let variable in the block it will change the global variable

    console.log(city);
}
console.log(city);
// it will print the global variable

const arr1 = [1,232,35,12];
// an array is defined within [], it is a collection of values

arr1.push(46);
// you can still push values to an array or an object even if it is a constant
// arr1=[2321,23112,232];
// you cannot re-assign it if it is a constant

console.log(arr1);

/* Popular programming case types: 
1. camelCase :  the first word's first letter is small and all other word's first letters' are capital
2. kebab-case : two words are separated by -
3. snake_case : two words are separatated by _
4. PascalCase : each word's first letter is capital
*/