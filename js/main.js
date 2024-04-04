// jQuery
$(document).ready(function() {
    var currentLocation = $(".no").position();
    console.log("position: ", currentLocation);

    // Event listener for No button click
    $(".no").click(function() {
        alert("Wrong choice. Choose again.");
    });

    // Event listener for No button cursor hover
    $(".no").mouseenter(function() {
        var moveHorizontal = randomHorizontal();
        // var moveVertical = randomVertical();
        var moveVertical = "0px";
        $(this).animate({left: moveHorizontal, top: moveVertical});
    });

    // Event listener for Yes button click
    $(".yes").click(function() {
        // Hide the No button when the Yes button is clicked
        $(".no").hide();
    });
})


// FUNCTION: used to move the No button horizontally on hover
function randomHorizontal() {
    // var randHorizontal = Math.floor(Math.random() * (window.innerWidth - 100));
    // console.log("window.innerWidth:  " + window.innerWidth);
    // console.log("horizontal: " + randHorizontal);

    while(true) {
        // var randHorizontal = Math.floor(Math.random() * (window.innerWidth - 100));

        // Find width of screen
        var width = window.innerWidth;

        // Find the location of the button
        var noLocation = $(".no").position().left;
        // console.log("noLocation: ", noLocation);

        // Find the random number
        var randHorizontal = Math.floor(Math.random() * (width + 1));
        // console.log("randHorizontal: ", randHorizontal);
        
        var noWidth = $(".no").width();
        // console.log("noWidth: ", noWidth);

        // If within the boundaries of the screen
        if((noLocation + randHorizontal + noWidth) < width) {
            // console.log("total: ", noLocation + randHorizontal);
            return randHorizontal + "px";
        }

        // Find location of the button in relation to the current screen width
        // var noBtnWidth = $(".no").position().left;
        // console.log("No button location: ", noBtnWidth)

        // Ensure the button does not exceed the screen widths

        // Boundaries of the screen are between -700 and 520
        // if(randHorizontal <= 520 && randHorizontal >= -700) {
        //     console.log("randHorizontal: " + randHorizontal);
        //     return randHorizontal + "px";
        // }

        // TESTING
        // return randHorizontal + "px";
    }
    
}


// FUNCTION: used to move the No button horizontally on hover
function randomVertical() {
    var randVertical = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log("vertical: " + randVertical);
    return randVertical + "px";
}