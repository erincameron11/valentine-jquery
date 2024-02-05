// jQuery
$(document).ready(function() {
    // TEST
    // console.log($("#title").offset().left, $("#title").offset().top);
    var rect = $("#title").getBoundingClientRect;
    console.log(rect.top, rect.right, rect.bottom, rect.left); 

    // Event listener for No button click
    $(".no").click(function() {
        alert("yay");
    });

    // Event listener for No button cursor hover
    $(".no").mouseenter(function() {
        var moveHorizontal = randomHorizontal();
        var moveVertical = randomVertical();
        // var moveVertical = "0px";
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
    var boundary = window.innerWidth - $(".no").offset().left;
    var randHorizontal = Math.floor(Math.random() * (window.innerWidth - 100));
    console.log("window:  " + window.innerWidth);
    console.log("boundary:  " + boundary);
    console.log("horizontal: " + randHorizontal);
    return boundary + "px";
}


// FUNCTION: used to move the No button horizontally on hover
function randomVertical() {
    var randVertical = Math.floor(Math.random() * (window.innerHeight - 100));
    // console.log("vertical: " + randVertical);
    return randVertical + "px";
}