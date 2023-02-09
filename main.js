import { animals } from "./data";

import { animals } from "./data.js";


const randomIndex = Math.floor(Math.random() * animals.length)

const playerOneImage = document.getElementById("player-1-image")
const playerTwoImage = document.getElementById("player-2-image")

playerOneImage.innerHTML = `<img class="player-1-image" src="./images/${animals[randomIndex].img}"/>`
