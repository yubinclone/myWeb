const quotes = [
    {
        quote: "There are better starters than me but I’m a strong finisher. ",
        author: "David Bacom",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Ley Anne",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Nomad Coder",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Dent Query",
    },
    {
        quote: "We need to think outside of the box for our new product.",
        author: "Mande Morale",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Scralet Jyohansen",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Robert Dan",
    },
    {
        quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "Kim Mungi",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Tom Holand",
    },
    {
        quote: "do not top your happy to decide to another sad",
        author: "J. Sara Coner",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;