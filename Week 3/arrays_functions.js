// This function takes an array of numbers as a parameter and returns the array 
// sorted in ascending order. A potential use case of this function is to sort 
// the books in a library by order of arrival time or reserved date.
function sortArray(array) {
    if (array.length === 0) {
        return array;
    }
    array.sort((a, b) => a - b);
    
    return array;
}

// Example of how it could be called:
// const unsortedArray = [3, 1, 5, 2, 4];
// const sortedArray = sortArray(unsortedArray);
// console.log(sortedArray);


// This function takes an array of numbers and returns the array with only even numbers.
// An use case for this function could be numbering students and getting only the students
// that are even numbered.
function filterEvenNumbers(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array.splice(i, 1);
        }
    }
    return array;
}

// Example of how it could be called/used:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);

