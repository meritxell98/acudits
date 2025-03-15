document.addEventListener("DOMContentLoaded", () => getJoke());

async function getJoke(){
    let res = await fetch("https://icanhazdadjoke.com/",
    {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then( response => {
        showJoke(response.joke)
        console.log(response)
    })

}

function showJoke(joke : string){
    document.getElementById("result").innerHTML = joke
}


// function getJoke(){
//     fetch ("https://icanhazdadjoke.com/",{
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
// .then(res => res.json())
// .then( response => console.log(response))

// }
