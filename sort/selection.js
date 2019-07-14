function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

function indexOfMinimum(array, index) {
    let minValue = array[index];
    let minIndex = index;

    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
}

function selectionSort(array) {
    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }

    return array;
}