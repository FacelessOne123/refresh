const authorText = document.querySelector("#authorText");
const quoteText = document.querySelector("#quoteText");
const CategorySelect = document.querySelector("#CategorySelect");

const newQuoteBtn = document.querySelector("#newQuoteBtn");
let previousQuoteIndex;
let currentQuoteIndex = 0;
const Quotes = [
    {
        Author: "Vincent Van Gough",
        quotes: "Great things are done by a series of small things brought together.",
        category : "Aura"
    },

    {
        Author: "William Shakespeare",
        quotes: "To thine own self, be true.",
        category : "Inspirational"
    },

    {
        Author: "Maya Angelou",
        quotes: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        category : "Inspirational"
    },

    {
        Author: "Mark Twain",
        quotes: "Tell the truth and then you don't have to remember anything.",
        category : "Inspirational"
    },

    {
        Author:  "Heisenberg",
        quotes: "I am the one who knocks!",
        category : "Aura"
    }

];

function displayQuotes() {
    const selectedCategory = CategorySelect.value;

    const filteredQuotes = Quotes.filter((quote) => {
        return selectedCategory === "all" ||
               quote.category === selectedCategory;
    });

    if (filteredQuotes.length === 0) {
        quoteText.textContent = "No matching quotes.";
        authorText.textContent = "";
        return;
    }

    let randomIndex = Math.floor(Math.random() * filteredQuotes.length);

    while (
        filteredQuotes.length > 1 &&
        randomIndex === previousQuoteIndex
    ) {
        randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    }

    const currentQuote = filteredQuotes[randomIndex];

    quoteText.textContent = currentQuote.quotes;
    authorText.textContent = currentQuote.Author;

    previousQuoteIndex = randomIndex;
}

CategorySelect.addEventListener ("change", () =>{
    previousQuoteIndex = undefined;
    displayQuotes();

});

newQuoteBtn.addEventListener("click", ()=>{

    displayQuotes();
});

displayQuotes();