// Though we are using the var key word here
// This variable still stick in the global name space and we have polluted the global name space
var badVariable = "Horrible way to define a variable that is used across multiple functions";

// Ready function 
$(function () {

    // Wrong way of adding dynamic content
    $('#clickMeWrong').click(function () {
        $('#main').append('The content is added through JS when you click on the plus sign. <br/>' +
                          'This is a wrong way of adding conent, since JS can be disable on browsers. <br/>' +
                          'Note: In some countries like UK this is agains law')
    });

    // Correct way of handling dynamic content

    // Add the image through JS as the bahavior is being managed by JS
    $('#dynamicImage').append("<img src='Images/Plus.jpg' width='28' height='27' id='clickMeWrong' />Click me to see the paragraph");

    // hide the dynamic message
    $('#message').hide();

    // Show the dynamic image when clicked
    $('#dynamicImage').click(function () {
        $('#message').show('fast');
    });

    /*
    // Use the toggle option to hide or display the content
    $('#dynamicImage').toggle(function() {
        $('#message').show('fast');
    }, function () {
        $('#message').hide('fast');
    });
    */

});

// Instead create a object and stick all your variaable to that object as shown below
// Note we are using all capitals, to indicate other that this is a global object
// This is also called a SingleTon pattern
var MYGLOBALS = {};
MYGLOBALS.goodVariable = "Perfect way to define a variable that is used across multiple functions";

function callExample1() {
    // Global variable are stuck to the window object 
    // So this will show the vriable declare above
    alert(window.badVariable);
}

// Also if you want to create more objects create them under your Single ton object
MYGLOBALS.ChildObject = {
    name: 'Sahil',
    age: 10
};

function callExample2() {
    alert(window.MYGLOBALS.goodVariable);
    // this can also be use as 
    //alert(MYGLOBALS.goodVariable);
}


function callExample3() {
    alert('My child object name: ' + MYGLOBALS.ChildObject.name);
}

function callExample4() {
    alert('Example 4');
}

function callExample5() {
    alert('Example 5');
}

function callExample6() {
    alert('Example 6');
}

function callExample7() {
    alert('Example 7');
}

function callExample8() {
    alert('Example 8');
}

function callExample9() {
    alert('Example 9');
}

function callExample10() {
    alert('Example 10');
}
