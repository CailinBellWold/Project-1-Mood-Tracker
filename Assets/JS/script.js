var now = moment()
var currentDayEl = $(".time");

function displayDate() {
    var date = now.format("dddd, MMMM Do YYYY, h:mm a");
    currentDayEl.text(date);
}

displayDate();

$("#sunny").on("click", function() {
    $("body").removeClass("gray").removeClass("blue").removeClass("gray-white").addClass("yellow");
    $("img").attr("src", "Assets/images/sunny-day.jpeg");
    $("img").attr("alt", "Kids playing in the sun.");
    $("h5").text("Fun in the Sun!").css("color", "black");
});

$("#cloudy").on("click", function() {
    $("body").removeClass("yellow").removeClass("blue").removeClass("gray-white").addClass("gray")
    $("img").attr("src", "Assets/images/cloudy-day.jpeg");
    $("img").attr("alt", "Kid playing on a cloudy beach.");
    $("h5").text("Cloudy day at the Beach!").css("color", "white");
});

$("#raining").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("gray-white").addClass("blue")
    $("img").attr("src", "Assets/images/rainy-day.jpeg");
    $("img").attr("alt", "Kid with umbrella in the rain.");
    $("h5").text("Splashing in puddles!").css("color", "white");
});

$("#snowing").on("click", function() {
    $("body").removeClass("yellow").removeClass("gray").removeClass("blue").addClass("gray-white")
    $("img").attr("src", "Assets/images/snowy-day.jpeg");
    $("img").attr("alt", "Kids playing in the snow.");
    $("h5").text("Building a snowman!").css("color", "black");
});