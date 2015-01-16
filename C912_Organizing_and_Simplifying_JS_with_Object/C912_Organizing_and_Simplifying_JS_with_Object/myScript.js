// myScript.js My external java script file

// Example 1
// My simple object
var myObj = {
    /// Property list
    status: "Ready",
    myProp: "Property",
    /// Methods
    myMethod1: function () {
        document.write('updates from my object method1');
    },
    myMethod2: function () {
        document.write('updates from my object method2');
    }
}

// Using the simple object
// Note: you can make the call in this sctip directly by removing the funciton callExample...
function callExample1() {
    if (myObj.status === "Ready") {
        myObj.myMethod1();
    }
}


// Example 2

// A function to Iterate through all members of any object
var utilities = {
    printAllMembers: function (targetObject) {
        document.write('<br/>  *************** Member list of ' + targetObject + ' *************** ');
        // Iterate through properties and methods
        for (members in targetObject) {
            document.write('<br/>&nbsp;&nbsp;&nbsp;&nbsp' + members + " ==> " + targetObject[members]);
        }
    }
}

// Print all members for my var 
// Note: you can make the call in this sctip directly by removing the funciton callExample...
function callExample2() {
    utilities.printAllMembers(myObj);
}


// Example 3
// Object with a sub / child object and array properties
var myHoldingObj = {
    myProperty: 240,
    // Sub object referrign to other object
    child: myObj,
    myMethod: function () {
        document.write("<br/>");
        myObj.myMethod2();
    },
    // Array property
    cities: [
        { locationId: 15, name: "Gladius" },
        { locationId: 16, name: "Chalbs" },
        { locationId: 17, name: "Ensis" },
    ]
}

// Object with a sub / child object and array properties
// Note: you can make the call in this sctip directly by removing the funciton callExample...
function callExample3() {
    document.write('Accessing main property: ');
    document.write(myHoldingObj.myProperty);
    document.write('<br/>');

    document.write('Accessing child properties: ');
    document.write(myHoldingObj.child.status);
    document.write('<br/>');

    document.write('Accessing main method, which calls the child method');
    myHoldingObj.myMethod();
    document.write('<br/>');

    document.write('Accessing the array properties');
    document.write("<br/>City 1 = " + myHoldingObj.cities[1].name);
    document.write('<br/>');

    document.write('Assigning the array properties');
    myHoldingObj.cities[1].name = "Hyderabad";
    document.write("<br/>City 1 = " + myHoldingObj.cities[1].name);

    document.write("<br/><br/>");
    document.write('Print all members for my myHoldingObj');
    utilities.printAllMembers(myHoldingObj);
}


// Exampel 4
// Addign additional properties on the fly
if (typeof myObj.newProperty === "undefined") {
    // Adding a propety on the fly
    // make sure you check before adding them, if not you will blow away the existing one
    if (typeof (myObj.newProperty) == "undefined") {
        myObj.newProperty = "My new property";
    }
    if (typeof (myObj.myProp) == "undefined") {
        myObj.myProp = "Updated value of myexisting property: Notice did not change";
    }
}

// Added properties on the fly example
// Note: you can make the call in this sctip directly by removing the funciton callExample...
function callExample4() {
    document.write("<br/> Value of my new property : " + myObj.newProperty);
    document.write("<br/> Value of my existing property : " + myObj.myProp);
}


// Exampel 5
// Obect on fly with constructor
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Using the NEW operator
// New operator is used create instances of function with constructor
var car1 = new car("Toyota", "Camry", 1998);
var car2 = new car("Honda", "Odessy", 2004);

// Obect on fly with constructor
// Note: you can make the call in this sctip directly by removing the funciton callExample...
function callExample5() {
    document.write("<br/> My Car 1 = " + car1.make + " " + car1.model + " " + car1.year);
    document.write("<br/> My Car 2 = " + car2.make + " " + car2.model + " " + car2.year);
}

