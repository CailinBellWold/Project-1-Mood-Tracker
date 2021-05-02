// Sad Jokes URL Variable
var jokesURL = 'https://v2.jokeapi.dev/joke/Pun?type=single&?format=json&?blacklistFlags=nsfw,religious,political,racist+,sexist,explicit&safe-mode';
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=3t7mZeEZExCKiZS98fbvvUrc1EHoC1wz&limit=1&rating=g&q=sad"
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

    // fetch for giphy
    fetch(giphyURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })

    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

    // Variable for Joke
    var joke = data.joke;
    // Console log
    console.log("Joke: ", joke);
    // Replace text
    $(".text-one").text(joke);
    // Activate Module
    moduleActive.addClass("is-active"); 

    });

};




sadBtn.on("click", getJokeApi);


// Close module after viewing
closeModal.on("click", function() {
    moduleActive.removeClass("is-active")
});