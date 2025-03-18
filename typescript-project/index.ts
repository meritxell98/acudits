document.addEventListener("DOMContentLoaded", () => getJoke());

const reportAcudits: {joke: string, score: number | null, date: string}[] = [];
let currentJoke: string = ""

async function getJoke(){
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" } 
        });
    
        const result = await response.json();
        const currentJoke = result.joke;
        showJoke(currentJoke)
        console.log(currentJoke);
      } catch (error) {
        console.error(error);
      }
}

function showJoke(joke : string){
    const resultElement = document.getElementById("result")
    if (resultElement) {
        resultElement.innerHTML = joke
    }
}

function recieveScore (score: number){
    let lastScore = score
    console.log("the last score is ",lastScore)
    return lastScore
}

async function getWeather(){
   
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
