function binarySearch(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let guess = 0;
    let totalGuesses = 0;

    while (max >= min) {
        totalGuesses++;
        guess = Math.floor((min + max) / 2);
        if (targetValue === array[guess]) {
            console.log(totalGuesses, "totalGuesses");
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}
