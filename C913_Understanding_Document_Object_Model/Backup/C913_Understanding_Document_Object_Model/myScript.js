// myScript.js My external java script file


// Addeing eventing on the fly
// make sure the window is fully loaded before you add the click event
// Note: windows on load event fire after the images, videos, etc are loaded.
//      The page is alreay display and the use may have already clicked the button here
//      newer browsers have newer event to handle this OR
//      Add innitial Java script in the page and the rest laster
window.onload = function () {
    // Addding a event on the fly to the page "clickMe" button
    // var clickMeButton = document.getElementById('clickMe');
    document.getElementById('clickMe').onclick = clicked;
    document.getElementById('Submit1').onclick = runTheExample;
}


// Creating and adding a click event on the fly
function clicked() {
    alert('running the example');
}



// Second examples

function runTheExample() {
    //get elements by ID
    var myElement = document.getElementById('secondPara');

    var myNodeName = myElement.nodeName;
    alert('Node name of second para is ' + myNodeName);

    if (myElement != null) {
        // innerHTML may not be supported by many browsers
        alert(myElement.innerHTML);
    }

    // Change the text on teh page using the innerHTML
    myElement.innerHTML = "See how I set the test here?";

    // Get all elements by tag name
    var listOfParagraphs = document.getElementsByTagName('p');
    
    for (var i = 0; i < listOfParagraphs.length; i++) {
        alert(listOfParagraphs[i].innerHTML);
    }

    // You can access all children of the current element
    alert(myElement.childNodes[0]);
    // You can access the parent of the current element
    alert(myElement.parentNode.nodeName);
    // Access the current element siblings
    alert(myElement.nextSibling + myElement.previousSibling);

    // Accessign ancor tag
    var anchor = document.getElementById("myAnchor");
    var anchorDest = anchor.href;
    alert(anchorDest);
    anchor.href = "http://www.bing.com";
    // Older browser require following syntax
    // anchor.setAttribute('href', 'http://www.bing.com');

}
