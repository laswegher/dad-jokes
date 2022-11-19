
const jokeDisplay = document.getElementById('joke');
const getJokeBtn = document.getElementById('jokeBtn');

getJokeBtn.addEventListener('click', generateJoke);
generateJoke();

// Way 1 to use api
function generateJoke() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
        .then(res => res.json())
        .then(displayHtml);
}

// Way 2 to use api
// async function generateJoke() {

//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json();

//     displayHtml(data);
// }

function displayHtml(data) {
    jokeDisplay.innerHTML = `<p>${data.joke}</p>`;
}

