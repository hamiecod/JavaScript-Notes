console.log('Web Crawler Exercise 1 in JavaScript');
/*
Exercise 1
Scrape all the links which contain a particular text
*/
Array.from(document.links).forEach(function(link){
    if(link.innerText.includes("javascript")){
        console.log(link.href);
    }
});
// if an anchor tag contains the word javascritpt as text, it returns the link of the anchor tag