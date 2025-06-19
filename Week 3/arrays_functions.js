// function sortArray(array) {
//     for (let i = 0; i < array.length; i++) {

//     }
// }

function filterEvenNumbers(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array.splice(i, 1);
        }
    }
    return array;
}

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = filterEvenNumbers(numbers);

// console.log(evenNumbers);

