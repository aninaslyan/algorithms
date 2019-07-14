function binarySearch(array, targetValue) {
    let sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);

    console.log(sortedArray, targetValue);

    let min = 0;
    let max = sortedArray.length - 1;
    let guess = 0;
    let totalGuesses = 0;

    while (max >= min) {
        totalGuesses++;
        guess = Math.floor((min + max) / 2);
        if (targetValue === sortedArray[guess]) {
            console.log(totalGuesses, "totalGuesses");
            return guess;
        } else if (sortedArray[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}