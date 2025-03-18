"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => getJoke());
// document.addEventListener("DOMContentLoaded", () => getWeather())
const reportAcudits = [];
let currentJoke = "";
let useFristAPI = true;
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        if (useFristAPI) {
            yield getDadJoke();
        }
        else {
            yield getChuckNorrisJoke();
        }
        useFristAPI = !useFristAPI;
    });
}
function getDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" }
            });
            const result = yield response.json();
            currentJoke = result.joke;
            showJoke(currentJoke);
            reportAcudits.push({
                joke: currentJoke,
                score: null,
                date: new Date().toISOString()
            });
            console.log(currentJoke);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.chucknorris.io/jokes/random");
            const result = yield response.json();
            currentJoke = result.value;
            showJoke(currentJoke);
            reportAcudits.push({
                joke: currentJoke,
                score: null,
                date: new Date().toISOString()
            });
            console.log(currentJoke);
        }
        catch (error) {
            console.error(error);
        }
        ;
    });
}
function showJoke(joke) {
    const resultElement = document.getElementById("joke");
    if (resultElement) {
        resultElement.innerHTML = joke;
    }
}
function recieveScore(score) {
    const lastJoke = reportAcudits.find(j => j.joke === currentJoke);
    let lastScore = score;
    if (lastJoke) {
        lastJoke.score = score;
        lastJoke.date = new Date().toISOString();
    }
    console.log(reportAcudits);
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
