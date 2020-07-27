import { getPkmStorage } from '../utils.js';
// import { statsArray } from './pokemon-stats.js';

// import { getPkmStorage } from '../utils.js';

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

// const caughtPokemon = getPkmStorage();
// const pokemonData = mungeNames(captureEvents);

const ctx = document.getElementById('chart').getContext('2d');

const data = [getPkmStorage];
const labelColors = ['red', 'orenge', 'yellow', 'green', 'blue', 'purple'];

const myChart = new Chart(ctx, { //eslint-disable-line
    type: 'pie',
    data: {
        labels: labelColors,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// Here I should call upon the reset-button.addEventListener('click', () => {
// have button reset and redirect the page.
//});



export function saveToLocalStorage(dataStorage) {
    const newlyStoredItem = JSON.stringify(dataStorage);

    localStorage.setItem('STORAGE', newlyStoredItem);
}

export function savePermaInformation(permaInfo) {
    const permaStorage = JSON.stringify(permaInfo);

    localStorage.setItem('', permaStorage);
}

