export function getRandomPkm(pkmArray) {
    const randomIndex = (Math.random() * pkmArray.length);

    return pkmArray(randomIndex);
}
