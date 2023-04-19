// Using parseInt to return NaN if user adds a string to the prompt
// Creates prompt for max number
let maximum = parseInt(prompt('Enter the maximum number!'));

// Prompts user to add a valid number
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

// Uses random to create our random number, and floor to get rid of the decimal
const targetNum = Math.floor(Math.random() * maximum) + 1;

// Prompts the first guess
let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

// Gameloop begins
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break; // type 'q' to quit
    attempts++; // loops attempts and records them
    if (guess > targetNum) { // Guess is lower, returns prompt
        guess = prompt('Too high! Enter a new guess:');
    } else {
        guess = prompt('too high! Enter a new guess:'); // Returns prompt if guess is higher
    }
}
if (guess === 'q') { // conditional to display win/quit msg
    console.log('You quit');
} else {
    console.log(`You got it! it took you ${attempts} tries`);
}
