function getJson() {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => displayQuote(json))
}

function displayQuote(json) {
    const displayer = document.getElementById('quote-displayer');
    displayer.innerText = json.quote;
}
document.getElementById('btn').addEventListener('click', function () {
    getJson()
})

