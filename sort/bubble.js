// Iterating over the array multiple times and comparing adjacent elements,
// If an element is greater than the one next to it, the two elements are swapped

function bubbleSort(array) {
    let sortedArray = [...array];

    for (let i = 0; i < sortedArray.length; i++) {
        let isSwapped = false; // Optimisation 2
        for (let j = 0; j < sortedArray.length - i - 1; j++) { // Optimisation 1
            if (sortedArray[j + 1] < sortedArray[j]) {
                isSwapped = true;
                swap(sortedArray, j, j + 1);
            }
        }
        if (!isSwapped) {
            return sortedArray;
        }
    }
    return sortedArray;
}

// 1: on each iteration of the outer for loop, the largest element in the array "bubbles" to the end,
// so there is no need to compare it with other elements on subsequent iterations.
// 2: isSwapped flag to track whether any swaps were made during the iteration. If no swaps were made,
// it means that the array is already sorted and the function can return the sorted array early
