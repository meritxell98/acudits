document.addEventListener("DOMContentLoaded", () => getJoke());
// document.addEventListener("DOMContentLoaded", () => getWeather())

const reportAcudits: {joke: string, score: number | null, date: string}[] = [];
let currentJoke: string = ""
let currentCNJoke: string = ""
let useFristAPI: boolean = true

async function getJoke(){
    if (useFristAPI) {
        await getDadJoke()
    } else {
        await getChuckNorrisJoke()
    }
    useFristAPI  = !useFristAPI
}


async function getDadJoke(){
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" } 
        });
    
        const result = await response.json();
        currentJoke = result.joke;
        showJoke(currentJoke)
        console.log(currentJoke);
      } catch (error) {
        console.error(error);
      }
}

async function getChuckNorrisJoke(){
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const result = await response.json();
        currentCNJoke = result.value
        showJoke(currentCNJoke)
        console.log(currentCNJoke)
    } catch (error) {
        console.error(error);
    };
}

function showJoke(joke : string){
    const resultElement = document.getElementById("joke")
    if (resultElement) {
        resultElement.innerHTML = joke
    }
}

function recieveScore (score: number){
    let lastScore = score
    console.log("the last score is ",lastScore)
    return lastScore
}

// async function getWeather(){
//       try {
//         const response = await fetch("https://api.weatherstack.com/current?query=Barcelona&access_key=••••••");
//         const result = await response.json();
//         const currentWeather = result.weather_icon
//         showWeather(currentWeather)
//         console.log(currentWeather)
//       } catch (error) {
//         console.error(error);
//       };
// }

// function showWeather(weather: any){
//     const resultElement = document.getElementById("weather")
//     if (resultElement) {
//         resultElement.innerHTML = weather
//     }
// }

