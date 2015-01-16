// myScript.js: external java script file usign jQUERY
/// <reference path="jquery-2.0.0-vsdoc.js" />
/// <reference path="jquery-2.0.3.min.js" />

// This jQuery function check if the DOM is ready to use
jQuery(document).ready(function () {
    // Start up code goes here
    alert("this works");

    // $ symbol replaces jQuery
    // # symbol represents the id
    // Change the H1 text, wihough using teh innerHTML 
    $("#title").text("Yay, I can now get at the H1 immidiately");

    // Change the Para html, wihough using teh innerHTML 
    $("#firstPara").html("<h2>Greate quotes</h2>");

    // Prepending html before a selection
    $("#firstPara").prepend("<h2>Prepending text before in first para</h2>");

    // Appending html after a selection
    $("#firstPara").append("<h2>Appending text after first para</h2>");

    //we can also peform before, after, insertBefore, insertAfter a selector
    // these work outside the selection

    // Working with href
    $("#myAnchor").attr("href", "http://channel9.msdn.com/Series/Javascript-Fundamentals-Development-for-Absolute-Beginners/Getting-Started-with-jQuery-14");

    $("#title").addClass("standout");
});
