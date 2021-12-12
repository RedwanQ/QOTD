const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


function randomQuote(){
    quoteBtn.innerHTML = "Loading Quote...";
    fetch("https://api.quotable.io/random")
    .then (res => res.json()) .then(result => {
        console.log(result);
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";



    });
}

soundBtn.addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`)
    speechSynthesis.speak(speech)
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click", () => {
    let tweet = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweet, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);