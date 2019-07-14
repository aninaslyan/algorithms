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