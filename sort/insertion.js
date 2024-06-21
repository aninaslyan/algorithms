function insert(array, rightIndex, value) {
    let additionalIndex = 0;
    for (let j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
        additionalIndex = j - 1;
    }
    array[additionalIndex + 1] = value;
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        insert(array, i - 1, array[i]);
    }

    return array;
}
