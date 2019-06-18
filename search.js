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

function linearSearch(array, targetValue) {
    let guess = -1;
    let totalGuesses = 0;

    console.log(array, targetValue);
    array.forEach((val, index) => {
        totalGuesses++;
        if (val === targetValue) {
            console.log(totalGuesses, "totalGuesses");
            guess = index;
        }
    });

    return guess;
}