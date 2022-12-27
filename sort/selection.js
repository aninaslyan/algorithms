// Repeatedly finding the minimum element from the array and placing it at the beginning

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
    let sortedArray = [...array];
    let minIndex = 0;

    for (let i = 0; i < sortedArray.length - 1; i++) { // Optimisation 1
        minIndex = indexOfMinimum(sortedArray, i);
        if (minIndex !== i) { // if they are equal, no need to swap as no difference will occur
            swap(sortedArray, i, minIndex);
        }
    }

    return sortedArray;
}

// 1: (n - 1), because the last element will already be in the end after (n - 1)th iteration
