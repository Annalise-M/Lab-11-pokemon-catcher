// import { 
//     encounteredPokemon,
//     caughtPokemon
// } from '../utils.js';

const results = JSON.parse(localStorage.getItem('STORAGE'));
const listResults = document.getElementById('pkm-results');

results.forEach((pokemon) => {
    const list = document.createElement('li');
    listResults.append(list);

    const name = document.createElement('p');
    const timesEncountered = document.createElement('p');
    const timesCaught = document.createElement('p');

    list.append(name, timesEncountered, timesCaught);
    name.textContent = pokemon.id;
    timesEncountered.textContent = `Times Encountered: ${pokemon.timesEncountered}`;
    timesCaught.textContent = `Pokemon caught: ${pokemon.timesCaught}`;


});

const names = [];
const votes = [];

results.forEach(pokemon => {
    const label = pokemon.id;
    const datapoint = pokemon.timesCaught;
    votes.push(datapoint);
    names.push(label);
});


