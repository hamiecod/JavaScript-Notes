// CONDITIONALS IN JAVASCRIPT
console.log("This is tutorial 8 about conditionals");
let age = 14;

// conditionals are of two types in javascript- if..else statements and switch case
// an if else statement is a block of code which performs certain tasks when certain conditions are true

if (age == 14) {
  // in this case, it will only run this code if the age is 14
  console.log("Age is 14");
} else if (age < 65) {
  console.log("Age is less than 65");
} else {
  // it will run this code if the above if conditions are not true
  console.log("Age is not 14");
}
/*
syntax:
if(condition){
    ...code;
} else if(condition){
    ...code;
} else{
    ...code;
}

the code inside an "if" block is executed when the condition in the respective block is true

the code inside and "else if" block is executed when the condition in the respective block is true

the code inside "else" block is executed when none of the if or else if conditions are true

when a condtion is found to be true and the code inside the respective block is executed, the if-else statement breaks

when a condition is found to be true and the code inside the respective block is executed, the if-else statement will not execute the other else if and else blocks and will stop the execution of the statement then and there

in the above if statement as well when the first block is executed the statement would break and the second block won't be executed

if we use "if" instead of "else if" then it wont break the statement if a condtion is true, it will check both the conditions
*/

const marks = "90";

if (marks > 90) {
  console.log("you are a topper");
} else if (marks == 90) {
  console.log("you got a 90");
}
/* 
== logical operator compares the value
=== logical operator compares the value as well as the data type, and hence is called strict comparison

== will return true even if the data types of two particular values do not match.
=== will not return true even if the value matches but the data type of the two particular vaues do not match.
*/

let password = "1234";

if (password == 1234) {
  console.log("Correct Password");
} else if (password !== 1234) {
  console.log("Wrong password, try again");
}
// != is a logical operator that means "not equal to", it compares whether the lhs is not equal to the rhs or not
// !== is strict not equal to comparison, it even compares the data type

let isProgrammer = true;

// if(isProgrammer){
//   console.log('isProgrammer is declared');
// }
// else{
//   console.log('isProgrammer is not defined');
// }
// if just a variable is written as the condition, if it exists, then it will return true
// that is a way to check whether a variable is declared or no
// this is not a very good way of checking whether a variable is declared or not because when you check a non-declared(undefined) variable as a condition it will return an error if it does not exist at all, thus there is a better way to this which is as follows:
// !variable name returns whether the variable is not true
console.log(typeof isProgrammer);
// undefined is a data type
// undefined means that it does not exist at all
// undefined also means when a variable has no value
if (typeof isProgrammer !== undefined) {
  // the condtion states: if isProgrammer is undefined
  console.info("isProgramemr is declared");
} else {
  console.info("isProgrammer is not declared");
}

let doesDrive = true;
let isDrunk = true;

if(doesDrive && (!isDrunk)){
  // if doesDrive is true and isDrunk is not true
  console.log('You can drive');
}
else{
  console.log("You can't drive");
}
// && is a logical operator that means "and"
// || is a logical operator that means "or"
// and and or operators are usually used to connect condtions in if statements
// when you combine two conditons using &&, the if statement code block will only execute if both the condtions are true.
// when you combine two conditions using || , the if statement code block will only execute if either of the condtions are true

// another example of && and || operators
age = 12;
let parentalConsent = true;

if(age>18 || parentalConsent){
  // this block will only be executed if either the age is more than 18 or he/she has parental consent
  // it will work even if one of them is true, in this case the first conditon is not true whereas the second is
  console.log('you can use social media :)');
}
else{
  console.log('you cannot use social media :/');
}

// TERNARY OPERATOR
// ternary operator is an operator used for decision making
// ternary operator takes three operands - a condition, expression to be executed if the condtion returns true and the expression to be executed if the conditoin returns false
console.log(age==18? 'You are very young':'You are not very young');
// condition? condtionToBeExecutedIfTrue : conditionToBeExecutedIfFalse;

// SWITCH CASE 
let rank = 1;
switch (rank) {
  case 1:
    console.log('You have got the first rank');
    break;
  case 2:
    console.log('You have got the second rank');
    break;
  case 3:
    console.log('You have got the third rank');
    break;
  default:
    console.log('You have got no rank :/');
    break;
}
/*
switch(conditionLHS){
  case conditionRHS:
    code...
    break;
  case conditionRHS:
    code...
    break;
  case conditionRHS:
    code...
    break;
  default:
    code...
    break;
}

a switch case statement is just like if else statements
it executes particular code when a particular condtion is true.
conditionLHS is the expression to compare the cases to
conditionRHS is the expression to compare to with the conditonLHS
case checks if a certain value is equal to conditionLHS, if it is then it executes the code in the particular block
you have to break the switch case statement after the code inside the case has been executed, it is done so to stop the execution of the switch case tree 
if we do not break the switch case after the code has been executed, the interpreter will run all the code inside the remaining switch cases without even checking whether the cases are true

a switch case statement is useful when you have to check for values of a common variable
*/