const quotes = [
    {
        
        name: 'Tony Hawk',
        quote: 'I wont quite skating until I am physically unable.'
    },
    {
        name: 'Eric Koston',
        quote: 'You wanna hang with the big dogs, you cant piss like a pup.'
},
    {
        name: 'Mark Gonzales',
        quote: 'if you want to manage sombody, manage yourself DO that well and youll be ready to stop managing. And start leading.'
},
    {
        name: 'Ryan Sheckler',
        quote: 'Dont ever give up. You gotta keep trying, and never give up.'
    }, {
        name: 'Sean Malto',
        quote: 'Its better to go out like a man, trying, than to play it safe and get second.'
    }
    ]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {

    let number = Math.floor(Math.random() * quotes.length);
   
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
