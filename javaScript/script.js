/* <div id="joke" class="joke">Awesome Joke is loading...</div> */
/* <button id="jokeBtn" class="btn">Next Joke</button> */

let joke1 = document.getElementById("joke1");
let joke2 = document.getElementById("joke2");
let jokeBtn = document.getElementById("jokeBtn");



const generateJokes =()=>{
    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }
    const a = fetch("https://backend-omega-seven.vercel.app/api/getjoke", setHeader)
    a.then((value)=>{
        return value.json();
    }).then((value)=>{
        joke1.innerHTML = value[0].question
        joke2.innerHTML = `"${value[0].punchline}"`
    }).catch((error)=>{
        console.log(error);
    })
}


jokeBtn.addEventListener("click", generateJokes);
generateJokes()
