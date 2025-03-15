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
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
            showJoke(response.joke);
            console.log(response);
        });
    });
}
function showJoke(joke) {
    document.getElementById("result").innerHTML = joke;
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
