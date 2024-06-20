function linearSearch(array, targetValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === targetValue) {
            return i;
        }
    }
    return -1;
}
