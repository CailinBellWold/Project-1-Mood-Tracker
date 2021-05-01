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
