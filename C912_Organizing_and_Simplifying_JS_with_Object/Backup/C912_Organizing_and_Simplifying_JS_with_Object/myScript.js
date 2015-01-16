// myScript.js My external java script file

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

if (myObj.status === "Ready") {
    myObj.myMethod1();
}


// Simple function to Iterate through all members of any object
var utilities = {
    printAllMembers: function (targetObject) {
        document.write('<br/>  Member lis of object ');
        // Iterate through properties and methods
        for (members in targetObject) {
            document.write('<br/>&nbsp;&nbsp;&nbsp;&nbsp' + members + " ==> " + targetObject[members]);
        }
    }
}

// Print all members for my var 
utilities.printAllMembers(myObj);


// Object with a sub / child object and array properties
var myHoldingObj = {
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

myHoldingObj.myMethod();
//Accessign array properties
document.write("<br/>City 1 = " + myHoldingObj.cities[1].name);
myHoldingObj.cities[1].name = "Hyderabad";
document.write("<br/>City 1 = " + myHoldingObj.cities[1].name);

// Print all members for my var 
utilities.printAllMembers(myHoldingObj);

// Addign additional properties on the fly
if (typeof myObj.newProperty === "undefined") {
    // Adding a propety on the fly
    myObj.newProperty = "My new property";
}

document.write("<br/>" + myObj.newProperty);


// obect on fly with constructor
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//Using the NEW operator
var car1 = new car("Toyota", "Camry", 1998);
var car2 = new car("Honda", "Odessy", 2004);

document.write("<br/> My Car 1 = " + car1.make + " " + car1.model + " " + car1.year);
document.write("<br/> My Car 2 = " + car2.make + " " + car2.model + " " + car2.year);

