// Examples 1
// A simple click event on the fly
function clicked() {
    alert('running the example');
}


// Adding eventing on the fly
// Make sure the required objects are loaded into DOM, before you add setting the click event
window.onload = function () {
    // Note: windows on load event fire after the page is fully loaded (images, videos, etc.)
    //      The page is alreay display and the use may have already clicked the button 
    //      Newer browsers have new events to handle this OR
    //      Add innitial Java script in the page and the rest later

    // Addding a event on the fly to the page "clickMe" button
    var clickMeButton = document.getElementById('clickMe');
    clickMeButton.onclick = clicked;

    // Addding a event on the fly 
    document.getElementById('Submit1').onclick = runTheExample;
    document.getElementById("changeText").onclick = changeText;
    document.getElementById("getAllElementsByTagName").onclick = getAllElementsByTagName;
    document.getElementById("navigateUpdown").onclick = navigateUpdown;
    document.getElementById("modifyAnchorTag").onclick = modifyAnchorTag;
}


// Examples 2
function runTheExample() {
    //get elements by ID
    var myElement = document.getElementById('secondPara');

    // Check what type of element it is
    var myNodeName = myElement.nodeName;
    alert('Node name of second para is ' + myNodeName);

    if (myElement != null) {
        // innerHTML may not be supported by many browsers
        alert(myElement.innerHTML);
    }
}
    // Examples 2
function changeText() {
    // Change the text on the page using the innerHTML
    returnPara = document.getElementById("returnPara");
    returnPara.innerHTML = "See how I changed the text ..... ";
}     

function getAllElementsByTagName() {
    // Get all elements by tag name
    var listOfParagraphs = document.getElementsByTagName('p');

    alert("There are " + listOfParagraphs.length + " paragraphs");

    for (var i = 0; i < listOfParagraphs.length; i++) {
        alert(listOfParagraphs[i].innerHTML);
    }

}

function navigateUpdown() {
    //get elements by ID
    var myElement = document.getElementById('secondPara');
    alert("Selected object "+ myElement.id);

    // You can access all children of the current element
    alert("Its child is " + myElement.childNodes[0]);
    // You can access the parent of the current element
    alert("Its parent is " + myElement.parentNode);
    // Access the current element siblings
    alert("Its next siblings are" + myElement.nextSibling.id + myElement.previousSibling);
}

function modifyAnchorTag() {
    // Accessign ancor tag
    var anchor = document.getElementById("myAnchor");
    alert("Current search url :" + anchor.href);
    anchor.href = "http://www.bing.com";
    alert("New search url :" + anchor.href);
    // Older browser require following syntax
    // anchor.setAttribute('href', 'http://www.bing.com');
}

