// jQuery
$(document).ready(function() {
    // Event listener for No button click
    $(".no-btn").click(function() {
        alert("yay");
    });

    // Event listener for No button cursor hover
    $(".no-btn").mouseenter(function() {
        var move = randomDirection();
        var moveHorizontal = move[0];
        var moveVertical = move[1];
        $(this).animate({left: moveHorizontal, top: moveVertical});
    });

    // Event listener for Yes button click
    $(".heart-btn").click(function() {
        // Hide the No button when the Yes button is clicked
        $(".no-btn").hide();
    });
})


// Function to move the No button on hover
function randomDirection() {
    var randHorizontal = Math.floor(Math.random() * (window.innerWidth - 100));
    var randVertical = Math.floor(Math.random() * (window.innerHeight - 100));
    // console.log([randX, randY]);
    return randHorizontal + "px", randVertical + "px";
}