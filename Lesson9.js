const authorText = document.querySelector("#authorText");
const quoteText = document.querySelector("#quoteText");

const newQuoteBtn = document.querySelector("#newQuoteBtn");

let currentQuoteIndex = 0;
const Quotes = [
    {
        Author: "Vincent Van Gough",
        quotes: "Great things are done by a series of small things brought together."
    },

    {
        Author: "William Shakespeare",
        quotes: "To thine own self, be true."
    },

    {
        Author: "Maya Angelou",
        quotes: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },

    {
        Author: "Mark Twain",
        quotes: "Tell the truth and then you don't have to remember anything."
    },

    {
        Author:  "Heisenberg",
        quotes: "I am the one who knocks!"

    }

];

function displayQuotes(){

    let QuoteSS = Math.floor(Math.random() * Quotes.length);
    const currentQuote = Quotes[QuoteSS];
    quoteText.textContent = currentQuote.quotes;
    authorText.textContent = currentQuote.Author;



}

newQuoteBtn.addEventListener("click", ()=>{

    displayQuotes();
});

displayQuotes();