console.log("More on Events in JavaScript");

document.getElementById("para").style.color = "black";
// setting the default color of the paragraph

// listen to the click event on the button
document.getElementById("colorBtn").addEventListener("click", () => {
  if (document.getElementById("para").style.color == "red") {
    // change the color to black if the color is red
    document.getElementById("para").style.color = "black";
  } else if (document.getElementById("para").style.color == "black") {
    // change the color to red if the color is black
    document.getElementById("para").style.color = "red";
  }
});

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", func1);
// executes the func1 function when the button is clicked

function func1(e) {
//   console.log("Thanks");
  e.preventDefault();
  // e.preventDefault() prevents the default behaviour of the target
  // in this case, the default behaviour of the button is to submit the form and e.preventDefault() prevents that
}

submitBtn.addEventListener('dblclick', (e)=>{
    console.log("hi");
}, {capture: false, passive: true})
// target.addEventListener('event', funciton, options)
// dblclick means double click
// if capture is false then it will take place after the eventListener whose capture is set to true
// if passive is true, then it returns a warning in the console if preventDefault is called in the function

submitBtn.addEventListener('dblclick', func2, {once: true, capture: true, passive: true});
// if once is set to true then the function will only be executed once

function func2() {
  console.info("Yay! its a double click!");
}

document.querySelector('#hold').addEventListener('mousedown', (e)=>{
    console.info("Its a mousedown");
});
// mousedown is triggered when you click the target, it could be a left, right or middle click

document.querySelector('#box').addEventListener('mouseenter', (e)=>{
    console.log("you have entered the box");
})
// mouseenter is triggered when you enter the target

document.querySelector('#box').addEventListener('mouseleave', (e)=>{
    console.log("you have left the box");
})
// mouseleave is triggered when you leave the target

document.body.addEventListener('mousemove', (e)=>{
    console.log(`The coordinates of your mouse are ${e.offsetX} and ${e.offsetY}`)
    document.body.style.background= `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX - e.offsetY})`
    // we are changing the background of the body according to the coordinates of the mouse when it moves
})
// mousemove is triggered when you move your mouse inside the target