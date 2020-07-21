import { pokemonData } from './pokemon.js';
import { getRandomPkm } from './utils.js';

const submitButton1 = document.getElementById('submit-button');

const pkmImageTag1 = document.getElementById('pkm1');
const pkmImageTag2 = document.getElementById('pkm2');
const pkmImageTag3 = document.getElementById('pkm3');

const pkmRadioTags = document.querySelectorAll('input');
// const pkmName = document.getElementById('');


// how many TIMES USER //ROUNDS PLAYED
// how many TIMES CAUGHT // WINS
// how many TIMES POKEMON ENCOUNTERED
// how many TIMES MISSED
// how many TIMES ENCOUNTERED & NEVER CAUGHT/ MISSED *EXTRA POINTS

let tries = 0;
// let totalPokemonCaught = 0;
let pkmEncountered = pokemonData.slice();
let pkmMissed = [];

function eventHandler(e) {
    console.log(e.target.value);
}

submitButton1.addEventListener('click', eventHandler);
// set event listeners to update state and DOM
// const getRandomPkm1 = remainingPkm[0];
// let randomPkm2 = remainingPkm[1];
// let randomPkm3 = remainingPkm[2];

pkmImageTag1.src = randomPkm1.url_image;
pkmImageTag2.src = randomPkm2.url_image;
pkmImageTag3.src = randomPkm3.url_image;





