var now = moment()
var currentDayEl = $(".time");

function displayDate() {
    var date = now.format("dddd, MMMM Do YYYY, h:mm a");
    currentDayEl.text(date);
}

displayDate();