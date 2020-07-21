import { pokemonData } from './pokemon.js';
import { getRandomPkm } from './utils.js';


const submitButton = document.getElementById('submit-button');



submitButton.addEventListener('click', eventHandler);

// const pkmRadioTags = document.querySelectorAll('input');
// const pkmName = document.getElementById('');


let tries = 0;
let remainingPkm = pokemonData.slice();
let pkmMissed = [];
// let totalPokemonCaught = 0;
// let pkmEncountered = pokemonData.slice();

const pkmImageTag1 = document.getElementById('pkm1');
const pkmImageTag2 = document.getElementById('pkm2');
const pkmImageTag3 = document.getElementById('pkm3');



// submitButton1.addEventListener('click', eventHandler);
// set event listeners to update state and DOM
const randomPkm1 = getRandomPkm(remainingPkm);
let randomPkm2 = getRandomPkm(remainingPkm);
let randomPkm3 = getRandomPkm(remainingPkm);

while (randomPkm1.id === randomPkm2.id) {
    randomPkm2 = getRandomPkm(remainingPkm);
} while (randomPkm2.id === randomPkm3.id) {
    randomPkm3 = getRandomPkm(remainingPkm);
}

const randomZeroOrOne = Math.random(Math.random());
const randomOneOrTwo = Math.random(Math.random(randomZeroOrOne));

let correctAnswer = null;

if (randomZeroOrOne === 0) {
    correctAnswer = randomPkm1;
} else if (randomOneOrTwo === 1) {
    correctAnswer = randomPkm2;
} else {
    correctAnswer = randomPkm3;
}

console.log(correctAnswer.name);

const answerDiv = document.querySelector('#answer');
answerDiv.textContent = correctAnswer.name;

// grabs the array of labels
const labels = document.querySelectorAll('label');
const firstLabel = labels[0];
const span1 = firstLabel.children[0];
const input1 = firstLabel.children[1];
const img1 = firstLabel.children[2];

pkmImageTag1.src = randomPkm1.url_image;


// does the same to second label
const secondLabel = labels[0];
const span2 = secondLabel.children[0];
const input2 = secondLabel.children[1];
const img2 = secondLabel.children[2];

pkmImageTag2.src = randomPkm2.url_image;


// does the same to thrid level
const thirdLabel = labels[0];
const span3 = thirdLabel.children[0];
const input3 = thirdLabel.children[1];
const img3 = thirdLabel.children[2];

pkmImageTag3.src = randomPkm3.url_image;


input1.value = randomPkm1.id;
input1.addEventListener('click', eventHandler);
input2.value = randomPkm2.id;
input2.addEventListener('click', eventHandler);
input3.value = randomPkm3.id;
input3.addEventListener('click', eventHandler);

const clickedPkm = document.querySelector('input:checked');


function eventHandler(e) {
    console.log('wow', e.target.value);
}

