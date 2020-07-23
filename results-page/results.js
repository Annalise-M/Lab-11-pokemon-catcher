// import { encounteredPokemon, caughtPokemon, getPkmStorage, getLocalStorage } from '../utils.js';
// import { statsArray } from './pokemon-stats.js'; for imgs

const results = JSON.parse(localStorage.getItem('STORAGE'));
const listResults = document.getElementById('pkm-results');

results.forEach((pokemon) => {
    const list = document.createElement('li');
    listResults.append(list);

    const name = document.createElement('p');
    const timesEncountered = document.createElement('p');
    const timesCaught = document.createElement('p');

    list.append(name, timesEncountered, timesCaught);
    name.textContent = pokemon.name;
    timesEncountered.textContent = 'Times Encountered: ' + pokemon.encounteredPokemon;
    timesCaught.textContent = 'Pokemon caught: ' + pokemon.caughtPokemon;
    

});

const names = [];
const votes = [];

results.forEach(pokemon => {
    const label = pokemon.id;
    const datapoint = pokemon.timesCaught;
    votes.push(datapoint);
    names.push(label);
});


export function saveToLocalStorage(dataStorage) {
    const newlyStoredItem = JSON.stringify(dataStorage);

    localStorage.setItem('STORAGE', newlyStoredItem);
}

export function savePermaInformation(permaInfo) {
    const permaStorage = JSON.stringify(permaInfo);

    localStorage.setItem('', permaStorage);
}

