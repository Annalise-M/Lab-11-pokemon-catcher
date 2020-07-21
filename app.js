import { pokemonData } from './pokemon.js';
import { getRandomPkm } from './utils.js';

const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const answerDiv = document.querySelector('#answer');
const radio = document.querySelectorAll('input');


let tries = 0;
let remainingPkm = pokemonData.slice();
let pkmMissed = [];
// let totalPokemonCaught = 0;
// let pkmEncountered = pokemonData.slice();

let correctAnswer = null;

function setPage() {
    if (remainingPkm.length === 1) {
        alert('show results');
    }
        
    let pkmImageTag1 = document.getElementById('pkm1');
    let pkmImageTag2 = document.getElementById('pkm2');
    let pkmImageTag3 = document.getElementById('pkm3');
    

    // set event listeners to update state and DOM
    const randomPkm1 = getRandomPkm(remainingPkm);
    let randomPkm2 = getRandomPkm(remainingPkm);
    let randomPkm3 = getRandomPkm(remainingPkm);
    
    while (randomPkm1.id === randomPkm2.id) {
        randomPkm1 = getRandomPkm(remainingPkm); 
    } while (randomPkm1.id === randomPkm3.id) {
        randomPkm2 = getRandomPkm(remainingPkm);
    } while (randomPkm2.id === randomPkm3.id) {
        randomPkm3 = getRandomPkm(remainingPkm);
    }
    
    const randomZeroOrOne = Math.random(Math.random());
    const randomOneOrTwo = Math.random(Math.random(randomZeroOrOne));
    
    console.log(randomPkm1, randomPkm2, randomPkm3);
    if (randomZeroOrOne === 0) {
        correctAnswer = randomPkm1;
    } else if (randomOneOrTwo === 1) {
        correctAnswer = randomPkm2;
    } else {
        correctAnswer = randomPkm3;
    }
    
    console.log(correctAnswer.name);
    
    answerDiv.textContent = correctAnswer.name;
    
    // grabs the array of labels
    const labels = document.querySelectorAll('label');
    
    const firstLabel = labels[0];
    // const span1 = firstLabel.children[0];
    const input1 = firstLabel.children[1];
    // const img1 = firstLabel.children[2];
    
    pkmImageTag1.src = randomPkm1.url_image;
    
    
    // does the same to second label
    const secondLabel = labels[0];
    // const span2 = secondLabel.children[0];
    const input2 = secondLabel.children[1];
    // const img2 = secondLabel.children[2];
    
    pkmImageTag2.src = randomPkm2.url_image;
    
    
    // does the same to thrid level
    const thirdLabel = labels[0];
    // const span3 = thirdLabel.children[0];
    const input3 = thirdLabel.children[1];
    // const img3 = thirdLabel.children[2];
    
    pkmImageTag3.src = randomPkm3.url_image;
    
    
    // input1.value = randomPkm1._id;
    // input2.value = randomPkm2._id;

    input1.disabled = false;
    input2.disabled = false;
    input3.disabled = false;
    const choiceDiv = document.getElementById('pokemon-choice-container');
    choiceDiv.classList.remove('disabled');
    nextButton.classList.add('hidden');
    
    // const clickedPkm = document.querySelector('input:checked');

    // console.log('clickedPkm', clickedPkm);

}    


function eventHandler(e) {
    tries++;
    pkmMissed++;
    
    const whatTheyClicked = e.target.value;
    if (whatTheyClicked === correctAnswer.id) {
        //splice this right answer off our array
        //import splice function
        let indexOfPkm;

        //iterating through all remaining pokemon
        for (let i = 0; i < remainingPkm.length; i++) {
            //for each remaining pokemon
            const pokemon = remainingPkm[i];
            //if this is the pokemon they picked
            if (pokemon.id === whatTheyClicked) {
                //this is the correct index
                indexOfPkm = i;
            }
        }
        remainingPkm.splice(indexOfPkm, 1);
        alert('you caught it!');
    } else {
        //push the pokemon.id onto the missed pokemon array
        alert('you missed!');
        pkmMissed.push(whatTheyClicked);
    }
    
   
}
submitButton.addEventListener('click', setPage);

setPage();

radio.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        tries++;
        let whatTheyClicked = itemCopy.getRandomPkm(event.target.value);
        if (event.target.value === whatTheyClicked.id) {
            whatTheyClicked.clicks = whatTheyClicked.clicks + 1;
        }
        itemCopy.save('session');
        getRandomPkm();
    });


});

