let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'));
}

Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess!'));
while (guess !== targetNum) {

}