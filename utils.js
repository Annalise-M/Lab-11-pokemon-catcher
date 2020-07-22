// import { pokemonData } from './pokemon.js';

export function getRandomPkm(pkmArray) {
    const randomIndex = Math.floor(Math.random() * pkmArray.length);

    return pkmArray[randomIndex];
}


export function findById(pkmArray, pkmId) {
    let matchItem = null;
    const pkmNumber = Number(pkmId);

    for (let i = 0; i < pkmArray.length; i++) {

        if (pkmNumber === pkmArray[i].id) {
            matchItem = pkmArray[i];
        }
    }
    return matchItem;
}


export function encounteredPokemon(pkmEncountered, id) {
    let encountered = findById(pkmEncountered, id);

    if (encountered) {
        encountered.encounters++;

    } else {
        const newEncounter = {
            id: id,
            encounters: 1,
            caught: 0
        };

        pkmEncountered.push(newEncounter);
    }
}


export function caughtPokemon(pkmEncountered, id) {
    let caught = findById(pkmEncountered, id);

    if (caught) {
        caught.caught++;

    } else {
        const newCaught = {
            id: id,
            encounters: 1,
            caught: 1
        };
        pkmEncountered.push(newCaught);
    }
}


//all encounters + captures per user session: 0,

// export function incrementor(pkmArray, id) {
//     function addInitialitem(pkmArray, id) {
//         const initialItem = {
//             id: id,
//             encounters: 0,
//             caught: 0
//         };

//         pkmArray.push(initialItem);
//     }

//     let itemSeen = findById(pkmArray, id)
// }

