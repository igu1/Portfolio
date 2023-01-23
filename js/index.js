
async function getFun() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66c21697f6mshb8c624d983eb822p10d6e7jsnd72ba434fb4c',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    };

    var x = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json', options)
        .then(response => response.json())
        .catch(err => console.error(err));

    document.getElementById('fun-q').innerText = x['setup']
    document.getElementById('fun-a').innerText = x['delivery']
}

getFun();