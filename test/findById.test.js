import { pokemonData } from '../pokemon.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('time to test a function', assert => {
    //Arrange
    // Set up your arguments and expectations
    const id = 18;
    const expected = 'kakuna';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const chosenPokeon = findById(pokemonData, id);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.ok(chosenPokeon);
    assert.equal(chosenPokeon.pokemon, expected);
});

