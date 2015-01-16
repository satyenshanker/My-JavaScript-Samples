
// My global variable object (Singleton pattern)
var MYGLOBALS = {};

// My application variable under my global object 
MYGLOBALS.AppName = 'Java Scrip Training';;

// My child objets under my global object 
MYGLOBALS.ChildObject = {
    name: 'Sahil',
    age: 10
};


// Ready function 
$(function () {
    alert('Ready Function');
});

function callExample1() {
    alert('Example 1 : Application variable under my global object' + MYGLOBALS.AppName);
}

function callExample2() {
    alert('Example 2 : Child object under my global object' + MYGLOBALS.ChildObject.name);
}

