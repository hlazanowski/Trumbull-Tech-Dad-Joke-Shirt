
const jokes = [
    "Why did the computer show up at work late? It had a hard drive.",
    "I only know 25 letters of the alphabet. I don’t know Y.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "How do you comfort a JavaScript bug? You console it.",
    "I asked my dog what's two minus two. He said nothing.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why don’t eggs tell jokes? They’d crack each other up."
];

function newJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerText = joke;
}

window.onload = newJoke;
