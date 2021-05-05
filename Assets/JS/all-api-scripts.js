//TO DO: 404 Responses, Get Next Button Set Up To Reset/Pull Current API, Filter for Cigarette and Booze content.

// API Keys
let giphyApiKey = 'c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7';

// API / Jokes
var jokesPunURL = 'https://v2.jokeapi.dev/joke/Pun?type=single&?format=json&?blacklistFlags=nsfw,religious,political,racist+,sexist,explicit&safe-mode';
var jokesJokeURL = 'https://v2.jokeapi.dev/joke/Any?type=single&?format=json&?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode';

// API / GIPHY
var giphySadURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&limit=30&rating=g&q=sad';
let giphyAngryURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&limit=30&rating=g&q=angry';
let giphyHappyURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&limit=30&rating=g&q=happy';
let giphyCalmURL = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyApiKey + '&limit=30&rating=g&q=calm';

// API / Quotes
let quoteCalmURL = 'https://favqs.com/api/qotd';

// Buttons
let angryBtn = document.querySelector("#angry");
let sadBtn = document.querySelector("#sad");
let calmBtn = document.querySelector("#calm");
let happyBtn = document.querySelector("#happy");

// Event Listeners
angryBtn.addEventListener('click', getAngryResponse);
happyBtn.addEventListener('click', getHappyResponse);
sadBtn.addEventListener('click', getSadResponse);
calmBtn.addEventListener('click', getCalmResponse);

// Modal
let textInput = $(".text-one");
let modalActive = $(".modal")
let closeModal = $(".modal-close");
let nextBtn = $("#next");

// Angry Response
function getAngryResponse() {
    fetch(jokesJokeURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        var joke = data.joke;
        $("#content").append("<h3>" + joke + "<h3>");
        modalActive.addClass("is-active angryAPI");
    })

    fetch(giphyAngryURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        var randomNum = Math.floor(Math.random() * content.data.length); 
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
    // nextBtn.on("click", getAngryResponse);
}; 

// Happy Response
function getHappyResponse() {
    fetch(jokesJokeURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        var joke = data.joke;
        $("#content").append("<h3>" + joke + "<h3>");
        modalActive.addClass("is-active happyAPI"); 
    })

    fetch(giphyHappyURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        var randomNum = Math.floor(Math.random() * content.data.length); 
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
    nextBtn.on("click", getHappyResponse);
}; 

// Sad Response
function getSadResponse() {
    fetch(jokesPunURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        var joke = data.joke;
        $("#content").append("<h3>" + joke + "<h3>");
        modalActive.addClass("is-active sadAPI"); 
    })

    fetch(giphySadURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        var randomNum = Math.floor(Math.random() * content.data.length); 
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
    nextBtn.on("click", getSadResponse);
}; 

// Calm Reponse
function getCalmResponse() {
    fetch(quoteCalmURL, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        var bodyQuote = data.quote.body;
        var author = data.quote.author;
        $("#content").append("<h3>" + '"' + bodyQuote + '"' + "<h3>");
        $("#content").append("<h4>" + "-" + author + "<h4>");
        modalActive.addClass("is-active calmAPI"); 
    })

    fetch(giphyCalmURL, {
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    })
    .then(function (response) {
    return response.json();
    })

    .then(function (content) {
        var randomNum = Math.floor(Math.random() * content.data.length); 
        var img = content.data[randomNum].images.downsized.url;
        var alt = content.data[randomNum].title
        $("#content").append("<img src=" + img + "alt=" + alt + ">");
    })
    // nextBtn.on("click", getCalmResponse);
}; 

console.log(modalActive.prop('classList'));

function btnEventListener() {
    
    //ERROR: Cannot read property 'contains' of undefined
    if (modalActive.prop('classList').contains('angryAPI')) {
        nextBtn.on("click", getAngryResponse);
    } else if (modalActive.prop('classList').contains('happyAPI')) {
        nextBtn.on("click", getHappyResponse);
    } else if (modalActive.prop('classList').contains('sadAPI')) {
        nextBtn.on("click", getSadResponse);
    } else {
        nextBtn.on("click", getCalmResponse);

};
}

// Close Modal function Event Listener
closeModal.on("click", function() {
    modalActive.removeClass("is-active angryAPI happyAPI sadAPI calmAPI");
    location.reload();
});