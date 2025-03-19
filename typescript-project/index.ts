document.addEventListener("DOMContentLoaded", () => getJoke());
document.addEventListener("DOMContentLoaded", () => getWeather())

const reportAcudits: {joke: string, score: number | null, date: string}[] = [];
let currentJoke: string = ""
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

        reportAcudits.push({
            joke:currentJoke,
            score:null,
            date: new Date().toISOString()
        })
        console.log(currentJoke);
      } catch (error) {
        console.error(error);
      }
}

async function getChuckNorrisJoke(){
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const result = await response.json();
        currentJoke = result.value
        showJoke(currentJoke)

        reportAcudits.push({
            joke:currentJoke,
            score:null,
            date: new Date().toISOString()
        })

        console.log(currentJoke)
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
    const lastJoke  = reportAcudits.find (j => j.joke === currentJoke)
    if (lastJoke) {
        lastJoke.score = score
        lastJoke.date = new Date().toISOString()
    }
    console.log(reportAcudits)
}

async function getWeather(){
      try {
        const response = await fetch("https://api.weatherstack.com/current?query=Barcelona&access_key=77449015a7825ab73d1a3104da6727f8");
        const result = await response.json();
        console.log(result)
        const currentWeather = result.current.weather_code;
        const currentTemperature= result.current.temperature
        console.log(currentWeather)
        let icon: string = ""

        if (currentWeather === 113) {
            icon = "sun.png"
        } else if (currentWeather === 116){
            icon = "cloudy.png"
        } else if (currentWeather === 119 || currentWeather === 122) {
            icon = "cloudy(2).png"
        } else if (currentWeather === 143){
            icon = "cloudy(1).png"
        } else if (currentWeather === 296 || currentWeather === 299 || currentWeather === 308) {
            icon = "rainy.png"
        } else {
            icon = "rainbow.png"
        }

        showTemperature(currentTemperature)
        showWeather(icon)
        
      } catch (error) {
        console.error(error);
      };
}

function showWeather(weather: string){
    const resultElement = document.getElementById("weather")
    if (resultElement instanceof HTMLImageElement) {
        resultElement.src = `/weather/${weather}`
    }
}

function showTemperature(temperature: string){
    const resultElement = document.getElementById("temperature")
    if (resultElement) {
        resultElement.innerHTML = `${temperature} °C`
    }

}

