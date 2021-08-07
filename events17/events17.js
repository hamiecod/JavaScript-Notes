console.log('Events in JavaScript');
// when you interact with your browser, you trigger some events
// javascript provides us with the capability of capturing these events
// when you click something it triggers an event
// when you hover over something, it triggers an event and so on

// click event is triggered when you click a certain element
document.querySelector('h1').addEventListener('click', function(e){
    console.log("You are clicking the heading");
    // console.log(e);
    // location.href = "https://google.com";
    e.target.classList.add('heading', 'header');
    // console.log(e.target.classList);
    // it returns a DOM Token list

    // console.log(e.offsetX);
    // e.offsetX returns the x-offset of the location of your event relative to the start position of the element

    // console.log(e.offsetY);
    // e.offsetY returns the y-offset of the location of your event relative to the top position of the element

    console.log(e.clientX);
    // e.clientX returns the x-offset of the location of your event relative to the start of the browser window

    console.log(e.clientY);
    // e.clientY returns the y-offset of the location of your event relative to the top of the browser window
});
// element.addEventListener('event', function(){code})
// this method executes the function when a specific event is triggered on the specific element
// the first parameter of the call back function of this method is the event object, usually represented by 'e'
// the event object has a lot of functions, a prominnet being e.target
// e.target returns the target of the event that has occured or the element on which the event took place


// mouseover event is triggered when your mouse is on a particular element
document.querySelector('p').addEventListener('mouseover', function(e){
    console.log("your mouse is on the paragraph");
});

// makes the paragraph hidden and visible when the button is clicked
document.querySelector('#hide').addEventListener('click', function(e){
    var pDisplay = document.querySelector('#para').style.display;
    if(pDisplay == 'none'){
        document.querySelector('#para').style.display = 'block';
    }else{
        document.querySelector('#para').style.display = 'none';
    }
});