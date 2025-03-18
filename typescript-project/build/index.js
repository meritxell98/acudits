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
const reportAcudits = [];
let currentJoke = "";
// async function getJoke(){
//     let res = await fetch("https://icanhazdadjoke.com/",
//     {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(response => {
//         showJoke(response.joke)
//         console.log(response)
//     })
// }
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" }
            });
            const result = yield response.json();
            const currentJoke = result.joke;
            showJoke(currentJoke);
            console.log(currentJoke);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function showJoke(joke) {
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = joke;
    }
}
function recieveScore(score) {
    let lastScore = score;
    console.log("the last score is ", lastScore);
    return lastScore;
}
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("Requesthttp://api.weatherstack.com/current", {
            headers: {
                "acces_key": "77449015a7825ab73d1a3104da6727f8",
                "query": "Barcelona"
            }
        })
            .then(resultat => resultat.json())
            .then(response => {
            console.log(response.weather_icons, response.weather_description);
        });
    });
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
