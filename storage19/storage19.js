console.log("Local and Session storage in JavaScript");

// there are two types of browser storage: local storage and session storage
// local storage is the storage of a browser where particular key-value pairs are stored and retained unless they are deleted
// local storage has a different container for every website
// you can see the key-value pairs graphically in chrome dev tools by: Application >> Local Storage >> Domain

// session storage is the browser storage in which key-value pairs are stored and retained for the current user session
// a session is the time while the website is open


localStorage.setItem('name', 'hargun');
localStorage.setItem('name2', 'dani');
// localStorage.setItem(key, value)
// this is used to add values to the local storage

console.log(localStorage);
// localStorage is an object containing all the key-value pairs

console.log(typeof localStorage.name)
// returns the type of the name key in local storage
// you can reference the value of a key by localStorage.key

console.log("The first name is " + localStorage.getItem('name'));
// to fetch the value of a key from localstorage use the following syntax:
// localStorage.getItem(key)
// it returns the value corresponding to the key
console.log("The second name is " + localStorage.getItem('name2'));

console.log("The rank is " + localStorage.getItem('rank'))
// when you try to fetch a value from github whose key-value pair does not exist, it will return null

// localStorage.clear()
// clears the localStorage
// deletes all the key-value pairs in the localStorage

localStorage.removeItem('name');
// localStorage.removeItem(key)
// this function deletes a specified key-value pair from local storage

let hobbies = ['programming', 'dancing', 'cooking'];

// localStorage.setItem('myHobbies', hobbies)
// there is a problem with storing arrays in localStorage
// their values are individually stringified and when you retrieve them, they are not in an array form

localStorage.setItem('myHobbies', JSON.stringify(hobbies))
// we Json stringify an array or object before storing it to the localStorage so that we can parse it when we retrieve it

console.log(localStorage.getItem('myHobbies'))
// this will return the value in myHobbies as a JSON string

console.log(JSON.parse(localStorage.getItem('myHobbies')))
// this will return an array that was JSON stringified and stored to myHobbies, we JSON parse that array so that its data type is array


// SESSION STORAGE
// the methods of session object are identical to that of local storage
// session storage is cleared when the session ends
// a session ends when the website tab is closed
// a session does not end on page refresh

// sessionStorage.setItem('github', 'hamiecod');
console.log("The session storage github username is "+ sessionStorage.getItem('github'));
// the setItem and getItem and clear methods are exactly the same as of localStorage methods