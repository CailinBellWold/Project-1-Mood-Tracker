//  Variable for moments
var now = moment()
var currentDayEl = $(".time");

//  Display Date function
function displayDate() {
    var date = now.format("dddd, MMMM Do YYYY, h:mm a");
    currentDayEl.text(date);
}
//  Run display date function
displayDate();

// Event Listeners to change color for background depending on button pushed
$("#sunny").on("click", function() {
    $("body").removeClass("gray").removeClass("blue").removeClass("gray-white").addClass("yellow")
});

$("#cloudy").on("click", function() {
    $("body").removeClass("yellow").removeClass("blue").removeClass("gray-white").addClass("gray")
});

$("#raining").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("gray-white").addClass("blue")
});

$("#snowing").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("blue").addClass("gray-white")
});
