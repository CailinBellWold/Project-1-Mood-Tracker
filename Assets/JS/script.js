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
    $("body").removeClass("gray").removeClass("blue").removeClass("gray-white").addClass("yellow");
    $("img").attr("src", "Assets/images/sunny-day.jpeg");
    $("img").attr("alt", "Kids playing in the sun.");
    $("h2").text("Fun in the Sun!").css("color", "black");
});

$("#cloudy").on("click", function() {
    $("body").removeClass("yellow").removeClass("blue").removeClass("gray-white").addClass("gray")
    $("img").attr("src", "Assets/images/cloudy-day.jpeg");
    $("img").attr("alt", "Kid playing on a cloudy beach.");
    $("h2").text("Cloudy day at the Beach!").css("color", "white");
});

$("#raining").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("gray-white").addClass("blue")
    $("img").attr("src", "Assets/images/rainy-day.jpeg");
    $("img").attr("alt", "Kid with umbrella in the rain.");
    $("h2").text("Splashing in puddles!").css("color", "white");
});

$("#snowing").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("blue").addClass("gray-white")
    $("img").attr("src", "Assets/images/snowy-day.jpeg");
    $("img").attr("alt", "Kids playing in the snow.");
    $("h2").text("Building a snowman!").css("color", "black");
});