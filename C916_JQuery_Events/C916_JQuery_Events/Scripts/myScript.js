// Attach this event ready method
$(function () {

    // Declare a variable to track score
    var score = 0;

    // Add the hover out class so the restting text looked in differen color
    $('#startover').addClass('hoverOut');
    //hide the <p id="success">You clicked-a-bob!</p>, so can display every time you clicked on the head
    $('#success').hide();

    // track the click event of the image
    // The click event takes function as parameter, so pass anonymousfunction
    $('#bobhead').click(function () {

        // Test to see if you reach here when you click on the image
        // alert('Got here');

        // Updated the score counter
        score++;

        // Display the updated  score 
        $('#score').text(score);

        //Show success message. But this will show for ever
        //$('#success').show();

        //Make sure the image shows quickly and and fade out in a short time
        $('#success').show('fast').fadeOut(2000);

    });

    // track the hover event for the StartOver DIV
    // The hover event takes two parameters HandlerIn and HandlerOut
    // We will pass two anonymous functions for in and out
    $('#startover').hover(
        function () {
            // Test to see if you reach here when you click on the image
            //alert('Handler In');
            // set the score back to zero
            score = 0;
            // Display the updated score 
            $('#score').text(score);

            //Add the hover in class and remove the hover out class
            $('#startover').remove('hoverOut').addClass('hoverIn');
        },
        function () {
            // Test to see if you reach here when you click on the image
            // alert('Handler Out');

            //Add the hover out class and remove the hover in class
            $('#startover').remove('hoverIn').addClass('hoverOut');
        }
     );
});

