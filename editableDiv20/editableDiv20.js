/*
1. create a div using javascript
2. when the div is clicked, it is transformed into a textarea
3. input something in the textarea
4. when the textarea loses focus, it is again converted to the div, and the value of the div is the vlaue of the textarea
5. store the value in localStorage so that next time when you visit the website it is updated
*/
let main = document.querySelector('main');
let keyPressed = false;
// variable to store the state of the program

let container = document.createElement('div');
container.id = 'div';
container.style = `width: 400px; height: 200px; border: 2px solid black;`
main.appendChild(container);

if(localStorage.getItem('divValue') !== null){
    container.innerText = localStorage.getItem('divValue')
}
// if there is some value for the div stored in the localStorage, LOAD THAT

div.addEventListener('click', ()=>{
    var textArea = document.createElement('textarea');
    textArea.style = `width: 400px; height: 200px; border: 2px solid blue;resize: none;`;
    textArea.setAttribute('placeholder', 'Enter text to be placed in the div')
    container.replaceWith(textArea);
    if(localStorage.getItem('divValue') !== null){
        textArea.value = localStorage.getItem('divValue');
    }
    // if some value is there in teh local storage, LOAD THAT and make it editable

    textArea.addEventListener('keydown', (e)=>{
        keyPressed = true;
        // the blur function is not executed if keyPressed is true
        // the state of the function is kept in a variable because, when element is replaced- it automatically triggers the blur event as well
        if(e.key == "Enter"){
            localStorage.setItem('divValue', textArea.value);
            if(container.parentNode == null){
                // checks if container is still in the dom
                textArea.replaceWith(container);
            }
            container.innerText = textArea.value;
        }
    })
    
    textArea.addEventListener(('blur'), ()=>{
        localStorage.setItem('divValue', textArea.value);
        // sets the text of textarea as a value in the localstorage
        if(keyPressed == false){
            // runs only if the enter key is not pressed
            if(container.parentNode == null){
                // checks if container is in the dom
                textArea.replaceWith(container);
            }
            container.innerText = textArea.value;
        }
    });
})