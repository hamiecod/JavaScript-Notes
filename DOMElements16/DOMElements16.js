console.log("Creating, Removing and Replacing Elements using JavaScript");

let element = document.createElement('li');
// document.createElement('ElementTag');
// createElement creates a specified element in the document or any other parent 
// the ElementTag is the tag of the element you want to create, example: ul, li, table
element.className = 'mainItems';
// element.className = 'class';
// it overwrites the classes of element and adds the specified class to the element
// it can only add a single class to the element
element.className = 'important';

console.log(element.classList);
// element.classList
// returns the classes on a specific element

element.classList.add('mainItems', 'created');
// element.classList.add('class1','class2');
// it adds the specified classes to the element without overwriting the existing classes of the element

element.id = 'explosive';
// element.id = 'id';
// this sets the id of a specific element

element.innerHTML = "<strong>Atom Bomb</strong>";
// alters the HTML of a specified element

element.setAttribute('title', 'created by javascript');
// element.setAttribute('attribute', 'value')
// this is used to set the specific attribute of a specific element to a specific value
// the first arguement in this funciton is the attribute and the second arguement in the funciton is the value of the attribute

let ul = document.querySelector('ul#list');
// selects a particular element from the DOM
ul.append('added by javascript');
// element.append(thingToBeAppended)
// this appends something to the element's end
// it can append elements as well as strings

ul.appendChild(element);
// ul.appendChild('dd');
// element.appendChild(element)
// it is used to append a child element to a specific element
// using this, you cannot append strings to the DOM, you can only append elements
// trying to append strings using appendChild method will result in an error
// in other words, using this method you can only append nodes and text is not a node
// if you want to append text using this method you will have to create a text node using createTextNode method

let text = document.createTextNode('(Also get some missiles, hehe)');
element.appendChild(text);
// as text is a TEXT NODE, it is appended to the element using appendChild method
// if the text was not a node, it would not be appended by the appendChild method and we would have to use append() to append it

// console.log(element);


let heading = document.createElement('h2');
heading.id = 'smallHeading';
// giving an id
heading.clasName = 'heading';
// giving a class name

let headingValue = document.createTextNode('This is a created text node');
// creating a text node
heading.appendChild(headingValue);
// appending the text node to the heading

// PREPENDING
document.body.prepend(heading);
// element.prepend(elementToBePrepended)
// this method prepends a specific element inside a particular element
// prepending is adding something to the start of something

let weapon = document.createElement('li');
// creating an element
let weaponText = document.createTextNode(('Pickaxe').bold());
// creating a text node
weapon.appendChild(weaponText);
// appending the text node to the element
// if you enclose the text with html tags, the tags would hold no importance as while appending the textnode is appended as plain text and not HTML
weapon.id = 'weapon';
// setting an id
weapon.className = 'weapons';
// settng a class name


// REPLACING DOM ELEMENTS
element.replaceWith(weapon);
// element.replacedWith(element2)
// using this method, you can replace element with element2

ul.firstElementChild.classList.add('first');
ul.lastElementChild.classList.add('last');

ul.replaceChild(weapon, ul.firstElementChild);
// element.replaceChild(element1, element2)
// using this method you can replace element2 with element1 but you have to be sure that element2 is a child of the element whose child we are replacing, otherwise it will give us an error

// ul.remove()
// element.remove()
// it removes the element

ul.removeChild(ul.firstElementChild);
// node.removeChild(nodeChild)
// this method removes the nodeChild from the node
// nodeChild has to be a child of node otherwise it will return an error

weapon.setAttribute('title', 'weapon fighters');

console.log(weapon.getAttribute('title'));
// element.getAttribute('attribute')
// this method returns the specific attribute of a specific element

console.log(weapon.hasAttribute('color'));
// element.hasAttribute('attribute')
// this method returns true or false
// it returns true if a specfic element contains a specfic attribute
// it returns false if a specific element does not contain a specific attribute

{
    let heading = document.createElement('h2');
    let anchor = document.createElement('a');
    anchor.append("Go to Google");
    anchor.setAttribute('href', 'https://www.google.com')
    heading.appendChild(anchor);
    ul.appendChild(heading);
}