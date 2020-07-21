export function getRandomPkm(pkmArray) {
    const randomIndex = Math.floor(Math.random() * pkmArray.length);

    return pkmArray[randomIndex];
}

