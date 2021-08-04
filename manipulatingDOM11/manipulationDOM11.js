console.log('%cManipulating Websites using JavaScript', 'background: green;color: yellow;');
// DOM manipulation in JavaScript
// DOM stands for Document Object Model
// DOM is the HTML 
// using DOM object in JavaScript, you can manipulate the HTML

console.dir(window)
// it will return the window object, we can see all the functions window object has in the console
// window is a global object in JavaScript
// alert('hargun');
// window.alert('hargun');
// alert() and window.alert() are one and the same thing because the window object4 in global in JavaScript
// document is a part of the Window Object

// PROMPT
// window.prompt() and prompt() are one and the same thing because the window object in global in JavaScript
// let name = prompt("Please enter your name", "Dani");
// let varName = prompt(Question, defautValue);
// the variable varName stores the value inputted by the user via the prompt
// the Question is the thing to be asked for in the prompt
// defaultValue is the defautlt
// console.log('The good name is %c'+name, 'color: red;');

// CONFIRM
// let confirmationVal =confirm("Are you sure you want to delete this?");
// confirm(message)
// the confirm method displays a dialog box with a specified message, along with an OK and a cancel button
// it is often used if you want the user to verify or accept something
// it returns either true or false, it returns true if the "OK" button is clicked, it returns false if the "Cancel" button is clicked
// console.log(confirmationVal);

// WINDOW DIMENSIONS
console.info('The outer height of window is '+ window.outerHeight);
// window.outerHeight returns the outerHeight of the window, outerHeight is the outer height of the window
console.info('The inner height of window is '+ window.innerHeight);
// window.innerHeight returns the innerHeight of the window
console.info('The difference between the inner and outer heigt of the window is '+(window.outerHeight - window.innerHeight));

console.info(scrollX);
// scrollX is the scroll value on the x-axis
console.info(scrollY);
// scrollY is the scroll value on the y-axis

console.info(location);
// location is an object which contains information about your location on the web
console.info(location.href)
// location.href returns the link of the website you are currently in

// location.href = "https://google.com";
// it will change the href of the web page

console.info(location.toString());
// location.toString returns the href of the webpage in a string datatype

console.info(window.history);
// window.history returns the history of the links you had visited on that particular tab
history.go(2);
// history.go(value) will go to the link in your history, value number of times, a negative value will go back to the link you had surfed
// history.go() immitiates the behavior of the last webpage and the next webpage buttons