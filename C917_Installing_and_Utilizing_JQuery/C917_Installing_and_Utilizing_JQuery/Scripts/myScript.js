/// Activate jQury widgets using the .ready method
$ (function() {
    // alert('Start up');
    $("#tabs").tabs(); 

    // Add a page on the fly - code did not work, needs some debugging
    // $("#tabs").tabs().tabs("add", "TestPage.html", "Dynamic Page");

    // Date picker
    $("#datepicker").datepicker({
        // Code the on date select event
        onSelect: function (dateText, inst) {
            // Alert the date selected
            // alert('Date selected is '+ dateText);
            // OR change the page title
            $('#title').text('Date selected is ' + dateText);
        }
    });

});

