// 21.	Series Wrap-Up script file

// My global variable object (Singleton pattern)
var MYGLOBALS = {};
MYGLOBALS.goodVariable = "Perfect way to define a variable that is used across multiple functions";

// My child objets under my global object 
MYGLOBALS.ChildObject = {
    name: 'Sahil',
    age: 10
};

// My application variable under my global object 
MYGLOBALS.AppName = 'Java Scrip Training';

// Ready function 
$(function () {
    // Startup
    alert('start up');
});


function callExample1() {
    alert('Example 1 : Application variable under my global object' + MYGLOBALS.AppName);
}

function callExample2() {
    alert('Example 2 : Child object under my global object' + MYGLOBALS.ChildObject.name);
}

