// Sad Jokes URL Variable
var jokesURL = 'https://v2.jokeapi.dev/joke/Pun?type=single&?format=json&?blacklistFlags=nsfw,religious,political,racist+,sexist,explicit&safe-mode';
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=3t7mZeEZExCKiZS98fbvvUrc1EHoC1wz&rating=g&q=sad"
// Variable for Element
var sadBtn = $("#sad")
var textInput = $(".text-one");
var moduleActive = $(".modal")
var closeModal = $(".modal-close");

// Function to get Jokes for sad API
function getJokeApi(requestUrl) {
    // Fetch Jokes from Jokeapi
    fetch(jokesURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);

    // Variable for Joke
    var joke = data.joke;
    // Console log
    console.log("Joke: ", joke);
    // Replace text
    $("#content").append("<h3>" + joke + "<h3>");
    // $(".text-one").text(joke);
    // Activate Module
    moduleActive.addClass("is-active"); 
    });
};

// Function for Sad GIF
function getSadGif() {
    getJokeApi();

    fetch(giphyURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })

    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        console.log(content.data);
        var randomNum = Math.floor(Math.random() * content.data.length); 
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title;

        console.log("IMG: ", img)
        console.log("ALT: ", alt)
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
};


moduleActive.on("click", function() {
    moduleActive.removeClass("is-active");
    location.reload();
})

sadBtn.on("click", getSadGif);



