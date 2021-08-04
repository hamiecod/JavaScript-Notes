console.info('Understanding DOM in JavaScript');

console.dir(document);
// returns the document object

// DOM is the structrual representation of the HTML markup

console.log(document.all);
// document.all returns all the tags in the document
// it returns a kind of array but it is not actually an array and array funciton wont run on it

// (document.all).forEach(function(element){
//     console.log(element);
// });
// this wont work as document.all is not really an array

console.groupCollapsed('Items of document.all');
Array.from(document.all).forEach(element=>{
    console.log(element);
});
// Array.from(value)
// Array.from makes an array from the HTML collection
// you can run a forEach after converting document.all into an array
console.groupEnd('Items of document.all');

console.log(document.body);
// document.body returns the body tag

console.log(document.forms[0]);
// document.forms returns all the forms in the document
// it returns an array

console.log(document.links);
// document.links will return all the links in the document
// it returns an array
console.log(document.links[0].href);
// it will return the link of the first link

console.log(document.scripts)
// document.scripts returns all the script tags in the document in an array