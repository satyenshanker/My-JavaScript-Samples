// 20. Fundamentals of JavaScript Closures Script

// My Singleton global variable object 
var MYGLOBALS = {};
MYGLOBALS.AppName = 'Java Scrip Training';

// Ready function 
$(function () {
    // Startup
    //alert('start up');

    // This nested functions do not use closure
    $('#buildCat').click(function () {
        buildACat();
    });

    // Use closure to rewrite above functionality
    $('#buildCat1').click(function () {
        var myNewCat = buildACat1();
        // buildACat1 has execured. It has gone our of scope now,
        // and all its private function variables with it, right? Right?

        myNewCat();  // <--- Not so fast ....
        // .. the catName variable value LIVES along with the inner function
        // .. Here the variable catName has become a closure
        // A Closure is created when we assign a function reference to a variable. A snap shot of its outer environment is also attached to the variable at the time the closure is created.
    });

    // Module pattern
    $('#modulePattern').click(function () {
        var a = modulePattern();
        a.publicFunction();
    });

    // Dynamic body font size using closure
    // These closure variables contain both the function to reize and the font size
    var size12 = fontSizing(12);
    var size14 = fontSizing(14);
    var size16 = fontSizing(16);

    document.getElementById('fontSize12').onclick = size12
    document.getElementById('fontSize14').onclick = size14;
    document.getElementById('fontSize16').onclick = size16;

});

// Regular nested functions 
function buildACat() {
    var catName = "Mr.Tibbles";

    function catFactory() {
        // function scoping: in JavaScript the scope
        // of a variable is defined by its location withing
        // the source code, and nested functions have 
        // access to variables declared in their outer scopr
        // This is like VFP Private variables
        alert('Example 1 : My cat name is ' + catName);
    }

    // () means it executes  the innter method immediately
    catFactory();  // 
}


// Using closures
function buildACat1() {
    var catName = "Mr.Tuffy";

    function catFactory() {
        // function scoping: in JavaScript the scope
        // of a variable is defined by its location withing
        // the source code, and nested functions have 
        // access to variables declared in their outer scopr
        // This is like VFP Private variables
        alert('Example 2 : My cat name is ' + catName);
    }

    // Notice: instead of execurin the inner function, 
    // we merely returning a REFERENCE! to our cat factory
    return catFactory;  // 
}

// Module pattern (Closure example 1)
// In this pattern we are using closure to implement the private behavior 
// and expose just the public interface. 
// In .net you can do this simply by have private and public members.
function modulePattern() {
    var privateFunction = function () {
        alert("I'm comming from the private implimentation");
    }
    return {
        publicFunction: function () {
            privateFunction();
        }
    }
}


// Font sizing (Closure example 2)
// This example closure technique to increase / decrese the font size on the fly
function fontSizing(size) {
    //alert('Setting font size: ' + size);
    return function () {
        //alert('Im inside function');
        document.body.style.fontSize = size + 'px';
    }
}

