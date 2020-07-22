import { pokemonData } from './pokemon.js';
import { getRandomPkm, encounteredPokemon } from './utils.js';

const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const answerDiv = document.querySelector('#answer');

const radio1 = document.getElementById('input1');
const radio2 = document.getElementById('input2');
const radio3 = document.getElementById('input3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');


let remainingPkm = pokemonData.slice();
// let pkmMissed = [];
// let totalPokemonCaught = 0;
let pkmEncountered = pokemonData.slice();

let correctAnswer = null;



function setPage() {
    
    if (remainingPkm.length === 1) {
        alert('show results');
    }
    
    
    // set event listeners to update state and DOM
    const randomPkm1 = getRandomPkm(remainingPkm);
    let randomPkm2 = getRandomPkm(remainingPkm);
    let randomPkm3 = getRandomPkm(remainingPkm);
    
    while (randomPkm1.id === randomPkm2.id || randomPkm1.id === randomPkm3.id || randomPkm2.id === randomPkm3.id) {
        randomPkm2 = getRandomPkm(remainingPkm);
        randomPkm3 = getRandomPkm(remainingPkm);
    }
    
    const randomZeroOrOne = Math.random(Math.random());
    const randomOneOrTwo = Math.random(Math.random(randomZeroOrOne));
    
    // console.log(randomPkm1.pokemon, randomPkm2.pokemon, randomPkm3.pokemon);
    
    
    
    if (randomZeroOrOne === 0) {
        correctAnswer = randomPkm1;
    } else if (randomOneOrTwo === 1) {
        correctAnswer = randomPkm2;
    } else {
        correctAnswer = randomPkm3;
    }
    
    // console.log(correctAnswer.name);
    
    answerDiv.textContent = correctAnswer.name;
    
    
    
    // grabs the array of labels
    // const labels = document.querySelectorAll('label');
    // const firstLabel = labels[0];
    // const secondLabel = labels[1];
    // const thirdLabel = labels[2];

    // const input1 = firstLabel.children[0];
    // const input2 = secondLabel.children[0];
    // const input3 = thirdLabel.children[0];
    
    // input1.addEventListener('click', eventHandler);
    // input2.addEventListener('click', eventHandler);
    // input3.addEventListener('click', eventHandler);

    // const pkmImageTag1 = firstLabel.children[0];
    // const pkmImageTag2 = secondLabel.children[1];
    // const pkmImageTag3 = thirdLabel.children[2];

    // let span1 = firstLabel.children[0];
    // const span2 = secondLabel.children[1];
    // const span3 = thirdLabel.children[2];

    encounteredPokemon(pkmEncountered, randomPkm1.id);
    encounteredPokemon(pkmEncountered, randomPkm2.id);
    encounteredPokemon(pkmEncountered, randomPkm3.id);
    
    radio1.value = randomPkm1.id;
    radio2.value = randomPkm2.id;
    radio3.value = randomPkm3.id;

    image1.src = randomPkm1.url_image;
    image2.src = randomPkm2.url_image;
    image3.src = randomPkm3.url_image;

    radio1.textContent = randomPkm1.pokemon;
    radio2.textContent = randomPkm2.pokemon;
    radio3.textContent = randomPkm3.pokemon;

    // console.log(pkmEncountered, randomPkm1.id);
    // console.log(randomPkm1.pokemon);
    // console.log(randomPkm2.pokemon);
    // console.log(randomPkm3.pokemon);
    

    radio1.disabled = false;
    radio2.disabled = false;
    radio3.disabled = false;

    const choiceDiv = document.getElementById('pokemon-choice-container');
    choiceDiv.classList.remove('disabled');
    nextButton.classList.add('hidden');
    
    
    // console.log('clickedPkm', clickedPkm);
    
}    


submitButton.addEventListener('click', () => {
    // const playersChoice = document.querySelector('input[type = radio]:checked');
    // const chosenPkm = playersChoice.value;

    //Incrementer(itemChose, itemsPickedArray)

    // encounteredPokemon(chosenPkm, id);
    // pkmMissed++;
    
    // const whatTheyClicked = event.target.value;
    // if (whatTheyClicked === correctAnswer.id) {
    //     let indexOfPkm;

    //     //iterating through all remaining pokemon
    //     for (let i = 0; i < remainingPkm.length; i++) {
    //         const pokemon = remainingPkm[i];
    //         if (pokemon.id === whatTheyClicked) {
                
    //             indexOfPkm = i;
    //         }
    //     }
    //     remainingPkm.splice(indexOfPkm, 1);
    //     alert('you caught it!');
    // } else {
    //     //push the pokemon.id onto the missed pokemon array
    //     alert('you missed!');
    //     pkmMissed.push(whatTheyClicked);
    // }
   
});


setPage();


