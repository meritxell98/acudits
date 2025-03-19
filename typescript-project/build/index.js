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
document.addEventListener("DOMContentLoaded", () => getWeather());
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
    if (lastJoke) {
        lastJoke.score = score;
        lastJoke.date = new Date().toISOString();
    }
    console.log(reportAcudits);
}
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.weatherstack.com/current?query=Barcelona&access_key=77449015a7825ab73d1a3104da6727f8");
            const result = yield response.json();
            console.log(result);
            const currentWeather = result.current.weather_code;
            const currentTemperature = result.current.temperature;
            console.log(currentWeather);
            let icon = "";
            if (currentWeather === 113) {
                icon = "sun.png";
            }
            else if (currentWeather === 116) {
                icon = "cloudy.png";
            }
            else if (currentWeather === 119 || currentWeather === 122) {
                icon = "cloudy(2).png";
            }
            else if (currentWeather === 143) {
                icon = "cloudy(1).png";
            }
            else if (currentWeather === 296 || currentWeather === 299 || currentWeather === 308) {
                icon = "rainy.png";
            }
            else {
                icon = "rainbow.png";
            }
            showTemperature(currentTemperature);
            showWeather(icon);
        }
        catch (error) {
            console.error(error);
        }
        ;
    });
}
function showWeather(weather) {
    const resultElement = document.getElementById("weather");
    if (resultElement instanceof HTMLImageElement) {
        resultElement.src = `/weather/${weather}`;
    }
}
function showTemperature(temperature) {
    const resultElement = document.getElementById("temperature");
    if (resultElement) {
        resultElement.innerHTML = `${temperature} °C`;
    }
}
