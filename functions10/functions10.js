console.log("Functions and scopes in JavaScript");
// a function is a block of code used to do certain tasks repeatedly on various different values without writing long lines of code
// for example, you can write a function to greet a person
function greet(name, role='friend') {
  console.log(`Happy Birthday ${name}. Thanks for being a ${role}!`);
  return "i am returning this";
  console.log("organise a birthday party");
}
/*
function name(arguement1, arguement2=defaultValue){
    code;
}
arguements are the values a function will act on
arguements can be infinitely many
arguements are variables which are referenced in the function block
those variables are assigned the values as per the calling of the function
default value is the default value of a specific parameter, it is taken as the value on execution if no particular value is defined for a specific arguement
it is a good practice to add default values as they save you from taking the parameter as undefined
*/

greet("Rahul");
/*
you need to call a function to make it work and supply the arguments as values while you call the function
functionName(arguments);
the function will execute its code on your arguements
if no value is given to a specific argument to a function, it takes it as undefined
to prevent this you can set a default value of a parameter when you define a function
*/

// a function by default returns undefined
// you can return a specific value in a function using the return keyword
// you can check what a function returns by calling it in a console.log
// the function stops after the return statement
// in a function, the code after the return statement will not be executed
let val = greet("Hargun", 'god');
console.log(val);

let hobbies = ["programming", "dancing", "cooking"];
function hobbyIncrease(arr) {
  arr.splice(arr.length - 1, 1, "singing");
  console.log(arr);
}
hobbyIncrease(hobbies);
// if a function changes a value, it is changed outside the function as well
console.log("The new array is", hobbies);

// FUNCTION EXPRESSIONS
const prize = function(awardType){
    console.log(`Congratulations! You won a prize for ${awardType}.`);
}
// here a function is being declared in a variable, you can call the function by the variable name
// when you use a function expression to declare a function, you do not need to specify the function name
// this type of function is called an anonymous function
prize('Sports');

// you can also declare a function as a key's value in an object
const employee={
    name: 'Hargun',
    game: function(game){
        return `${this.name}'s favorite game is ${game}`;
    }
}
// you can call a function declared inside an object by referencing the key and then executing it
// object.key();
console.log(employee.game('Fortnite'));


// SCOPES IN JAVASCRIPT
let i = 212;
console.log(i);
function ui(name){
    i = 9;
    console.log(i);
    {
        var k = 'g';
    }
    console.log(k);
    return `This is by ${name}`;
}
console.log(ui('Dani'), i);
// a function forms a closure
// a closure is a binding which defines the scope of execution
// a scope is the current context of execution of code
// in other words, scope is the context where code can be referenced
// a variable declared inside a function with the var keyword has function scope meaning that it can be referenced anywhere in the whole function
// a variable declared inside a funciton with the let or const keyword has block scope meaning that it can only be referened in the block it has been declared an and the lower level blocks
// a variable declared inside a function with no keywork has a global scope meaning that it can be referred from anywhere in the document

function two(){
    console.log('Inside of two()',a);
}
function one(){
    var a = 2;
    console.log('Inside of one()',a);
    two();
}
var a = 1;
console.log(a);
one();

function extFunc() {
    const extVar = "I used a closure"
    function intFunc() {
      console.log(extVar)
    }
    return intFunc;
}
const closure = extFunc();
console.log(extFunc());
console.log(closure());
// extFunc() is a closure and closure() is taking advantage of extFunc() being a closure
// the variable closure has the intFunc function as extFunc returns intFunc, extFunc has been executed
// when you run closure() function, it will return you what intFunc() was supposed to return, intFunc refers to a variable outside its lexical environment
// it refers to a variable in the outer environment which has already been executed, but still it can access the variable because of closures
// closures store the data as reference types in heap memory
// closures give you access to the variables outside a function
// closures are usually functions bundled with scopes
// closures help you to keep your code clean as they keep certain variables in the function and block memory
// more about closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/ClosureseFunc();