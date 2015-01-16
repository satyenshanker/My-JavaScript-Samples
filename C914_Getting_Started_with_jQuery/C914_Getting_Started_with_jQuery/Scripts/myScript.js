// myScript.js: external java script file usign jQUERY
/// <reference path="jquery-2.0.0-vsdoc.js" />
/// <reference path="jquery-2.0.3.min.js" />

// This jQuery function check if the DOM is ready to use
jQuery(document).ready(function () {
    // Start up code goes here
    alert("this works");

    // $ symbol replaces jQuery
    // # symbol represents the id
    // Change the H1 text, wihough using the innerHTML 
    $("#title").text("Yay, I can now get at the H1 immidiately");

    // Addding a event on the fly 
    document.getElementById('clickMe1').onclick = myExample1;
    document.getElementById("clickMe2").onclick = myExample2;
    document.getElementById("clickMe3").onclick = myExample3;
    document.getElementById("clickMe4").onclick = myExample4;
    document.getElementById("clickMe5").onclick = myExample5;
});

function myExample1() {
    
    //Search an element by ID
    // . represents the class, # represents id

    // Change the Para html, wihough using teh innerHTML 
    $("#firstPara").html("<h2>Greate quotes</h2>");

    // Prepending html before a selection
    $("#firstPara").prepend("<h2>Prepending text before in first para</h2>");

    // Appending html after a selection
    $("#firstPara").append("<h2>Appending text after first para</h2>");
    //we can also peform before, after, insertBefore, insertAfter a selector
    // these work outside the selection

}


function myExample2() {
    // Working with href
    alert('Changing the link from google to bing')
    $("#myAnchor").attr("href", "http://www.bing.com");
};

function myExample3() {
    $("#title").addClass("standout");
}

function myExample4() {
    // You can also search elements by CSS class
    // in this case all paragraph elements
    $('p').fadeOut();
    // You can also search elements by passing in selector
}

function myExample5() {
    // You can also search elements by class
    // . represents the class, # represents id
    $('.xx').fadeIn();
}
