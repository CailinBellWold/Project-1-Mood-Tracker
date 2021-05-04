// Variable for Calm Quote API
const camlQuoteAPI = 'https://favqs.com/api/qotd';
const contentEl = document.querySelector(".suggestions");
const calmButtonEl = document.querySelector("#calm-button");

// Calm Quote API Function
function getCalmApi() {
    const authorEl = $('<p>');
    const quoteEl = $('<p>');
    console.log(authorEl.value);

    fetch(camlQuoteAPI)
        .then(function (response) {
        //  Conditional for the the response.status.
        if (response.status !== 200) {
          // Place the response.status on the page.
          // Error 404 Page
        }
        return response.json();
        })
        .then(function (data) {
        // Make sure to look at the response in the console and read how 404 response is structured.
        const bodyQuote = data.quote.body;
        const author = data.quote.author;
        const authorEl = $('<p>');
        const quoteEl = $('<p>');
        
        authorEl.addClass('quoteAuthor').text("-" + author);
        quoteEl.addClass('quoteBody').text(bodyQuote);
        quoteEl.appendTo(contentEl);
        authorEl.appendTo(contentEl);
        });
}

console.log
calmButtonEl.onclick = getCalmApi;