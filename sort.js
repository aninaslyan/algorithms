// Selection Sort
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

// Insertion Sort
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