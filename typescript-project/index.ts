async function getJoke(){
    let res = await fetch("https://icanhazdadjoke.com/",
    {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then( response => console.log(response))
    
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
