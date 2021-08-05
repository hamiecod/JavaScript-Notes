console.log('Traversing the DOM');

let container = document.querySelector('.container');
console.log(container.childNodes);
// element.childNodes returns all the child nodes of the element
// childNodes also includes the comments and the newlines as text, it also considers other things like doctype html as a child
// we do not want these things most of the time, but in some cases we could need them
// it returns a node list

console.log(container.children);
// element.children returns all the children of the element as an HTML collection
// it will not consider the text and comments as an element, it will only consider the tags as elements

console.log(container.childNodes[3].nodeName);
// nodeName returns the name of the node

console.log(container.childNodes[1].nodeType);
// nodeType returns the type of the node, it returns a number
// Node types
// 1: element
// 2: attribute
// 3: text node
// 8: comment
// 9: document
// 10: doctype

// you can also find the children of children of an element
console.log(container.children[1].children[1].children[5].children[0].innerText);

console.log(container.firstChild);
// firstchild returns the first child node

console.log(container.firstElementChild);
// firstElementChild returns the first element child

console.log(container.lastChild);
// lastchild returns the last child node

console.log(container.lastElementChild);
// lastElementChild returns the last element child

console.log(container.childElementCount);
// returns the number of child elements

console.log(container.parentNode);
// parent node returns the element's parent node

console.log(container.parentElement);
// returns the element's parent element

console.log(container.firstElementChild.nextSibling);
// returns the next sibling node

console.log(container.firstElementChild.nextElementSibling);
// returns the next element nextSibling