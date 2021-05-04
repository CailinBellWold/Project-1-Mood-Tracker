// Sad Jokes URL Variable
var jokesURL = 'https://v2.jokeapi.dev/joke/Pun?type=single&?format=json&?blacklistFlags=nsfw,religious,political,racist+,sexist,explicit&safe-mode';
var giphyURL = 'https://api.giphy.com/v1/gifs/search?api_key=3t7mZeEZExCKiZS98fbvvUrc1EHoC1wz&rating=g&q=sad';

// Variable for Elements
var sadBtn = $("#sad")
var textInput = $(".text-one");
var moduleActive = $(".modal")
var closeModal = $(".modal-close");
var nextBtn = $("#next");

function getSadResponse() {
    
    // Fetch Puns from Jokes API
    fetch(jokesURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        // Console log data received
        console.log(data);
        // Variable for Joke
        var joke = data.joke;
        // Console log GIF
        console.log("Joke: ", joke);
        // Add text to module
        $("#content").append("<h3>" + joke + "<h3>");
        // Open module by adding class to module section
        moduleActive.addClass("is-active"); 
    })

    // Fetch Sad Gifs from GIPHY API
    fetch(giphyURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        // Console log data received
        console.log(content.data);
        // Variable for random GIF
        var randomNum = Math.floor(Math.random() * content.data.length); 
        // Variable for GIF and title
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title
        // Console log GIF
        console.log("IMG: ", img)
        console.log("ALT: ", alt)
        // Add image and alt title to modal
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
}; 

// Sad Button Event Listener
sadBtn.on("click", getSadResponse);
// Next Button - piles new ones on top of previous Event Listener
nextBtn.on("click", getSadResponse);
// Close Modal function Event Listener
closeModal.on("click", function() {
    moduleActive.removeClass("is-active");
    location.reload();
});
