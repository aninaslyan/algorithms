function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

// Recursively finding the minimum number
function findMinimumNumber(array) {
    if (array.length === 1) {
        return array[0];
    }

    const number1 = findMinimumNumber(array.slice(0, array.length/2)); // Math.floor function will be used to round the float number in array.slice() method under the hood
    const number2 = findMinimumNumber(array.slice(array.length/2, array.length)); // Math.floor function will be used to round the float number in array.slice() method under the hood

    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}
