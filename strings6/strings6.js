console.log("We are tut 6");
const name = "Hargun";
const greeting = "Good Morning";
console.log(greeting, name);
// the comma is used for concatination
// javascript is primarily used to make websites thus there is a lot of string manipulation javascript can do
// in this tutorial we will discuss about string functions, methods and template literals

let html;
// declaration

// html will hold html markup
// html = "<h1> this is heading </h2>
// <p> this is My Para";
// double quotes or single quotes cannot be used to write multiple line strings like the one above which is HTML code
// there are three solutions to it:
// 1. concatinate strings on multiple lines using + or ,
html = "<h1> this is heading </h1>" + "<p> this is My Para</p>";
// but if you are long strings, this is not at all efficient and feasible
// you can also you the concat string function
html = html.concat("this", "hi");
// string.concat(...stringtoBeadded)
console.log(html);

console.log(html.length);
// string.length will return the character length of the string
console.log(html.toUpperCase());
// string.toUpperCase() will turn all the characters to upper case
console.log(html.toLowerCase());
// string.toLowerCase() will turn all the characters to lower case

console.log(html[1]);
// string[index] will return the letter at ${index} of the string
// the index starts from 0 and goes on

console.log(html.indexOf("this"));
// string.indexOf(subString) returns the index of the first character of the first occurence of the particular substring
console.log(html.lastIndexOf("this"));
// string.lastIndexOf(subString) returns the index of the first character of the last occurence of the particular substring
console.log(html.charAt(3));
// string.charAt(index) returns the character at the particular index of the string
console.log(html.endsWith(">", 4));
// string.endsWith(substring) returns whether a string ends with a particular substring
// syntax: string.endsWith(substring, lenghtofactualstring)
// the length of actual string is the length of be searched from
// for example
// the length of actual string is given to be 22, so the interpretor will only check whether the first 22 characters end with substring or not
// so it slices particular number of letters from the real string and checks if that ends with search string or not
// it returns either true or false
// more https://www.w3schools.com/jsref/jsref_endswith.asp

console.log(html.startsWith("h", 1));
// string.startsWith(searchString, startIndex);
// it checks whether the string starts with the search value starting from the supplied start Index
// more: https://www.w3schools.com/jsref/jsref_startswith.asp

console.log(html.includes("th"));
// string.includes(searchString);
// checks whether a string includes the search string
// return true or false

console.log(html.substring(1, 6));
// string.substring(startIndex, endIndex+1)
// startIndex = x ; endIndex = y
// substring function returns the substring from a string, the substring returned starts from startIndex(x) and through endIndex-1(y-1)
// for example, substring(1,7) will return the letters at index 1,2,3,4,5,6 as the substring
// it includes the startIndex position and does not include the end index position within the substring
// if the startIndex is equal to the endIndex, it return empty string ""
// if stop is omitted, it extracts the whole string till the end
// if any arguement is greater than the string length, the string's length will be used
// if startIndex > endIndex, then it swaps both the values
// a negative or ineligible arguement is treated as 0

console.log(html.slice(0, 5));
// string.slice(startIndex, endIndex+1)
// it does the same thing as substring except that it can except negative values
console.log(html.slice(-4, -1));
// negativey indexes start from -1
// negative index -1 starts from the last character of the string
// the above will return a string containing character at -4, -3 and -2 index of the string
// negative indexes start from the end, and go on decreasing
// if startIndex > endIndex then it returns an empty string
// if value is negative then = string.length - value

// difference between slice and substring: https://www.geeksforgeeks.org/javascript-difference-between-string-slice-and-string-substring

console.log(html.substr(1, 5));
// string.substr(startIndex, lengthtoextract)
// the first arguement is the index to start extracting the string from
// the second arguement is the number of characters to be extracted from the string starting from the start Index

console.log(html.split(" "));
// string.split(stringWhereToSplit)
// it splits a string into an array of elements
// it splits the string where a particular string is found
// for example: split('hi')
// wherever the interpretor finds the specific string, it splits the string to another array element, it will not consider hi in the element
// split(' ');
// "hi die bro"
// in the above the interpretor will form three elements and split the string where it finds a space and will not include the space in the elements
// it will return ['hi','die','bro']

console.log(html.replace("this", "it"));
// string.replace(subStringToBeChanged, newSubString)
// it will replace the first occurence of the specific substring with the new substring
// in the above the interpretor replaces 'this' with 'it'
// NOTE: it only replaces the first occurence

const whiteSpace = " d       dsf     ds         ";
console.log(whiteSpace.trim());
// string.trim() removes all the spaces at the START and the END of the string
// it removes all the spaces before the first character and all the spaces after the last character

console.log(html.anchor("link"));
// string.anchor(name);
// it is non standard function
// it encloses the string within anchor tags with a specific name

console.log(html.big());
// this function is deprecateed
// it encloses the string within big tags

console.log(html.blink());
// encloses the string inside blink tags

console.log(html.bold());
// encloses the string inside bold tags

console.log(html.charCodeAt(2));
// string.charCodeAt(index)
// this function returns the character code of the character at particular index
// prints UFF-16 code

console.log(html.codePointAt(2));
// string.charPointAt(index)
// this function returns the character code of the character at particular index
// prints unicode

// charPointAt vs charCodeAt: https://stackoverflow.com/questions/36527642/difference-between-codepointat-and-charcodeat

console.log(html.fixed());
// non standard method
// it encloses the string in <tt> tag representing teletype
// tt tag prints the contents in consolas font

console.log(html.match("h1"));
// string.match(string)
// this method is used for substring search and uses regular expressions
// more about regular expressions in later tutorial
// more: https://www.w3schools.com/jsref/jsref_match.asp

console.log(html.fontcolor("green"));
// this method is non standard
// this method encloses the string within the font tag
// the parameter is the color

console.log(html.fontsize(32));
// string.fontsize(size)
// this method encloses the string in font tag and specifies the size which is the parameter

console.log(html.italics());
// non standard method
// this method encloses the string in i tag, italicizing it

console.log(html.link("https://google.com"));
// non standard method
// encloses the string within anchor tag with href attribute
// the parameter is the value of href attribute

let str1 = "ab";
let str2 = "b";
console.log(str1.localeCompare(str2));
// referenceString.localeCompare(compareString);
// it returns whether the reference string comes before, after or is equal as the compareString in sort order
// -1 = reference string is sorted before compareString
// 0 = the two string are equal
// 1 = the reference string is sorted after the compare string
// the longer string will be sorted before the shorter string

let devName = `\u0048\u0061\u0072\u0067\u0075\u006e`;
console.log(devName.normalize());
// string.normalize(form)
// this method converts unicodes into normal alphabets
// the format for unicode is : u\0001
// there are three forms for normalization: nfc, nfd, nfkc and nfkd, nfc is default
// they are almost the same
// more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
// unicodes: https://unicode-table.com/en/alphabets/english/

console.log(html.matchAll("h1"));
// just like match() but returns multiple matches
// more about them in reg ex tutorial

console.log(html.padEnd(71, "hi"));
// string.padEnd(maxLength, padString)
// this method continuously adds the padString to the end of the original string until it reaches the maxLength whilst doing so

console.log(html.search("<<"));
// string.search(searchString)
// this method returns the index of the first character of the first occurence of the search string
// return -1 if no value found
// similar to indexOf
// if you are using regular expressions use search, if not use indexOf
// string.search('/hi/i')
// include the string value withit /.../i to perform a case insensitive search

// search vs match
// search is for fast and less info checks, match is for slow but more info checks
// in detail: https://stackoverflow.com/questions/18687530/using-match-and-the-difference-between-search

console.log(html.padStart(71, "hi"));
// string.padStart(maxLength, padString)
// this method continuously adds the padString at the beginning of the string until it reaches the maxLength specified

console.log(html.repeat(2));
// string.repeat(count)
// this method returns a new string with $Pcount} number of copies of the string in the same string

console.log(html.small());
// string.small()
// this method encloses the string within <small> element which causes the string to be displayed in a small font

console.log(html.startsWith("<h1>"));
// string.startWith(subString);
// this method returns whether a string starts with a particular substring
// it returns either true or false

console.log(html.strike());
// string.strike()
// encloses a string in <strike> tag, the strike tag strikes the text inside

console.log(html.sub());
// string.sub();
// encloses a string in <sub> tag, the sub tag, makes the string inside a subscript

console.log(html.sup());
// string.sup();
// encloses a string in <sup> tag, the subp tag, makes the string inside a superscript

console.log(html.toLocaleLowerCase());
// string.toLocaleLowerCase()
// this method transforms the string to lower case taking localization of langauge into account

console.log(html.toLocaleUpperCase());
// string.toLocaleUpperCase()
// this method transforms the string to upper case taking localization of langauge into account

console.log(whiteSpace.trimEnd());
// string.trimEnd()
// this method removes the whitespaces at the end of the string

console.log(whiteSpace.trimStart());
// string.trimStart()
// this method removes the whitespaces at the start of the string

console.log(whiteSpace.trimLeft());
// string.trimLeft()
// this method removes the whitespaces at the left of the stirng
// this is an alias for trimStart

console.log(whiteSpace.trimRight());
// string.trimRight()
// this method removes the whitespaces at the right of the stirng
// this is an alias for trimEnd

let employee = {
  name: "hargun",
  age: 42,
};
console.log(employee.valueOf());
// this method just returns the value of a particular string

// Template Literals
let lang1 = "CSS";
let lang2 = "SCSS";
let myHtml = `Hello ${name}
            <h1> This is heading </h1>
            <p> I like ${lang1}, but I like ${lang2} more</p>
`;
// template literals are contained within backticks(``), you can include '' and "" inside of them, they also provide support for variables
// they are just used as fill in the blanks
// ${varName}, when written in the template literal, it will be replaced by the value of the variable 

document.querySelector('.container').innerHTML = "";
document.querySelector('.container').innerHTML = myHtml;

let owner = 'Hargun\'s';
// when you need to use ' in a string enclosed with '' you need to write it as \'
// when you need to use " in a string enclosed with "" you need to write it as \"
// you need to prefix the every uncommon letter with \ in a string when it is enclosed with "" or ''
console.log(owner);