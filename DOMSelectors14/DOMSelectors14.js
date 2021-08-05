console.log("DOM Selectors in JavaScript");

/*
there are two types of DOM element selectors:
1. Single element selector - selects a single element
2. Multi Element Selector - selects multiple elements
*/

let child1 = document.getElementById('child1');
// it is a single element selector as it returns a single element

// document.getElementById(idName);
// getElementById is used to select an element by its id name

// child1 = child1.className;
// element.className returns the classes on the element

// child1= child1.childNodes;
// element.childNodes returns the child nodes of an element
// child nodes are the children of the element
// it returns a nodelist

// child1 = child1.parentNode;
// element.parentNode returns the parent of the element

// you can even change the css using javascript
child1.style.color = "blue";
// element.style.property = "value";
// it changes the value of a property of a particular element

child1.innerText = "Hargun is a very good boy :)";
// element.innerText = "text";
// it changes the text inside an element

child1.innerHTML = "<h2>these notes are POG</h2>";
// element.innerHTML = "html";
// this changes the HTML of the element, it is different from innerText as using innerHTML you can add HTML content but using innerText you can only add text content
// also innerHTML returns the HTML inside an element whereas innerText returns the text inside an element
console.log(child1);

let sel = document.querySelector('.child');
// parent.querySelector('selector')
// the above uses selectors to select an element inside another element, the format of the selectors is the same as css
// prefix an id name with #
// prefix a class name with .
// any selector not prefixed will be considered a tag
// if multiple elements match the selector, it only returns the first matching element as it is a single element selector
sel.style.color = "green";
console.log(sel);


// MULTI ELEMENT SELECTOR
// these types of selectors are used to select mutliple elements from the DOM
let children = document.getElementsByClassName('child');
// document.getElementsByClassName('className')
// it returns all the elements with the particular class name
// it returns an HTML collection which is an array
console.log(children[1]);
// it returns the second element in the array

let elems = document.getElementsByTagName('div');
// document.getElementsByTagName('tagName')
// it returns an array of all the elements with the tagName
Array.from(elems).forEach(element=>{
    element.style.border = "2px solid black";
});
// if you do not want to use Array.from you can use the traditional for loop

let foo = document.querySelectorAll('.red');
// document.querySelectorAll('selector')
// selector follows the css selector syntax
// it returns an array which have the specified selector
Array.from(foo).forEach(element =>{
    element.style.background="#ff9999";
});