
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
    // alert('start up');
    // Add the click event
    document.getElementById('clickMe1').onclick = clickMe1_Clicked;
    document.getElementById('clickMe2').onclick = clickMe2_Clicked;
});


// Get JSON data using getJSON method
function clickMe1_Clicked() {
    //SSHA Debug
    //alert('ClickMe1 Clicked')

    // Retrieve a JSON document frm the webserver
    // and set up a call back function 
    // Note: the data is returnd is passed into the call back function

    $.getJSON("data19.json", function (data) {
        // SSHA Debug 
        //alert('JSON parsing' + data);
        renderJSON(data);
    });
} 

// Get JSON data using AJAX method
function clickMe2_Clicked() {
    //SSHA Debug
    //alert('ClickMe2 Clicked')

    $.ajax({
        url: 'data19.json',
        dataType: 'json',
        success: function(data) {
            renderJSON(data);
        },
        statusCode: {
            404: function () {
                alert('JSON file not found. Run the web page code directly from browser and not from Visual Studio');
            }
        }
    });
}


//Rendering JSON data 
function renderJSON(data) {
    // SSHA Debug 
    // alert('Reached renderJSON');

    // Global variable are stuck to the window object 
    // So this will show the vriable declare above

    // Split the JSON data into a array
    var items = [];

    // Use the JQyery each function that allows use to iterate over a Java Script object
    // This each function takes data and passes control to a call back function
    $.each(data, function (key, val) {
        // Add the JSON element to the items array at the end using the Push method
        // Lets pass the key and the val as list item
        // So we construct the HTML on the fly
        // <li id='1'>xxxx</li>
        items.push("<li id = '" + key + "'>" + val + "</li>");
        //SSHA: debug
        //items.push("<li id='1'>xxxx</li>");
        // SSHA Debug 
        //alert(key + val);
    });
    // SSHA Debug 
    //alert(items);

    // Now that we to spit out the array as HTML into the body
    // We can always do this is in many ways, but in this example we are doing it using jQuery
    // By creating a jQuery object on the fly by passing in a new tag
    // Setting its properties and innerHTML
    // And finally appending it to the page body or outputExample1
    $('body').append(
        $('<ul>', {
            'class': 'interest-list',
            id: 'newCssElement',
            html: items.join('')
        })
     );
}