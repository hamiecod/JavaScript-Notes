// information about console API: https://console.spec.whatwg.org/

console.time("Your Code Took");
// syntax: console.time("identifier");
// starts the timer
// the timer calculates the time taken to run the code between two identifiers with the same name
// the identifiers can also be compared to checkpoints loosely

// you can also run javascript in browser console, but when you are making your own website,you would definitely want to keep the javascript code in an external file which is linked to the website HTML markup

// if a file that you have linked is not actually available, javascript will return you 404 not found error

// alert('this');
// earlier, before es6, alert was used to debug javascript instead of console logs

console.log('hello world');
// console.log is used to debug javascript code
// syntax= console.log(variable or string eclosed in quotes)
// if you want to console log a string, you need to suplly the string as the parameter of the console, encolsed within single or double quotes
// it logs a message into your console
// we can access any function/variable from our console
// it is also used to analyze webpages, suppose i want to know that how a particular webpage uses javascript, I can use the console to access various variables and functions to see how the website utilizes javascript
// console.log prints the variable or the string(in quotes) and returns undefined
// undefined informally means nothing

console.log(51+32);
// in javascript, you can also use the console as a calculator
// even if you write calculations directly in the console without console.log, it will still perform the calculations and act as a calculator
// if sometimes, you need a calculator immediately while in a browser, you can just open the browser console and use it as a calculator :)
// console.log means that write something in the console as a log as it is

console.log(true);
// true will be printed in console
// it is a boolean and you do not need to contain booleans within quotes

console.log([32.4,42,21]);
// you can also console log arrays and it will show it is a list in the console
// an array is a set of values starting from index 0, more in further tutorials

console.log({hargun:"boy", marks:43});
// you can also console log objects 
// an object is also printed as a list
// objects are contained within curly braces
// an object has many key-value pairs and one key-value pair is sepearated by a comma
// in javascript, you do not need to enclose the key of an object inside double quotes, only if it is a single work.. you need to contain the key in double quotes if it is not a single word

console.table({hargun:"boy", marks:43});
// console.table is used to print the contents of the paramenter of itself in the form of a table in the console
// this is very helpful in debugging when you are dealing with bigger objects

console.warn("This is a warning to you");
// this is used to print a warning in the console
// this is useful when you want to throw a warning according to your code logic
// specifically in chrome dev tools, there is a different tab for warnings

// console.clear();
// this clears all the messages so far in the console
// this returns a message which confirms that console is clearned
// this method takes no arguements
// it returns undefined
// more here https://forum.freecodecamp.org/t/how-do-i-use-console-clear-to-modify/274951/2

// semicolons in javascript
// it is not mandatory to add a semicolon at the end of every javascript statement
// javascript is a very forgiving langauge and runs your code without semicolons
// it automatically assumes semicolons where they are needed
// though it is a very good practice to add a semicolon at the end of every javascript statement, depecting the end of the statement to the parser

console.timeStamp('hi');
// it is non functional and does not work at most places
// more here https://www.geeksforgeeks.org/node-js-console-timestamp-method/ https://nodejs.org/api/console.html#console_console_timestamp_label https://developer.mozilla.org/en-US/docs/Web/API/Console/timeStamp

console.timeLog('Your Code Took');
// logs the time at the timer of a specific identifier

console.count('hi');
console.count("hi");
// console.count tells how many times a particular call has been made to the console

// wheter you use '' or "" or `` doesnt matter
// if you want to contain "" inside the string you should use '' or ``, it stands the same for the others

console.log(console.memory);
// prints the memory info

console.timeEnd('Your Code Took');
// this will end the timer with the specific identifier
// if the console is cleared after starting the timer, timeEnd would return an error

console.assert(564<180, 'Age above 180 is not possible');
// syntax: console.assert(condition, error to be printed)
// the condition is the first parameter and the error to be thrown is the second parameter
// if the condition returns false then the error is thrown
// if no particular error statement is defined it will throw the error as `Assertion failed`

// What does console.assert help in?
// the literal meaning of assert is to belief confidently
// if the condition is false then assertion fails
// console.assert is just used to check whether certain conditions are true
// there are some cases where a set of code is run when certain conditons are met, if else is used there, console.assert is just used as a dummy to quickly check if conditions are true

console.error('This is an error');
// syntax: console.error('statement');
// this throws an error in the console with a particular statement

console.profile('hargun');
// console.profile(identifier);
// profiles are made mainly for performance reviews
// you can find detailed analysis of a particular file in the performance tab of dev tools

console.info('hi');
// this is just like console.log but prints messages at info log levels
// it can be compared to semantic HTML, it is semantic javascript

console.debug('bruhhh');
// this is also like console.log but prints the messages at debug log levels
// it is also like semantic HTML

// ending the profile
console.profileEnd('hargun');