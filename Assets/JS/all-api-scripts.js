//TO DO: 404 Responses, Get Next Button Set Up To Reset/Pull Current API, Filter for Cigarette and Booze content.
// API Keys
let giphyApiKey = 'c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7';
var bodyquoteEl = document.querySelector("#bodyquote");
var authorEl = document.querySelector("#author");
var imgEl = document.querySelector("#GIF");

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
        bodyquoteEl.innerHTML = joke;
       
        
        
        bodyquoteEl.innerHTML = joke;
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
        
        imgEl.src = content.data[randomNum].images.downsized.url
        imgEl.alt = content.data[randomNum].title
    })
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
        bodyquoteEl.innerHTML = joke;
       
       
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
        
        imgEl.src = content.data[randomNum].images.downsized.url
        imgEl.alt = content.data[randomNum].title
    })
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
        bodyquoteEl.innerHTML = joke;
        
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
        
        imgEl.src = content.data[randomNum].images.downsized.url
        imgEl.alt = content.data[randomNum].title
    })
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
        bodyquoteEl.innerHTML = '"' + bodyQuote + '"';
        authorEl.innerHTML= "-" + author;
       
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
        
        imgEl.src = content.data[randomNum].images.downsized.url;
        imgEl.alt = content.data[randomNum].title;
    })
}; 

console.log(modalActive.prop('classList'));

nextBtn.on("click", function() {
    if (modalActive.prop('classList').contains('angryAPI')) {
        getAngryResponse();
    } else if (modalActive.prop('classList').contains('happyAPI')) {
        getHappyResponse();
    } else if (modalActive.prop('classList').contains('sadAPI')) {
        getSadResponse();
    } else if (modalActive.prop('classList').contains('calmAPI')) {
        getCalmResponse();
    }
});

// Close Modal function Event Listener
closeModal.on("click", function() {
    modalActive.removeClass("is-active angryAPI happyAPI sadAPI calmAPI");
    location.reload();
});
