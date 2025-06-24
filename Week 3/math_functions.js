
// This function takes two parameters (real numbers or integers) n and m and returns 
// their sum. An potential case of this function is to do simple additions in our webpage.
function addition(n, m) {
    return n + m;
}

// An example of how it could be used: 
// console.log(addition(1, 5));


// This functions take an numerical array parameter and returns us the average of all the
// elements in the array. A potential use case would be to find the average price per item
// in a list of groceries.
function average(array) {
    let avg = 0;
    for (let i = 0; i < array.length; i++ ){
        avg += array[i];
    }
    
    return avg / array.length;
}

// An example of how it could be used:
// console.log(average([100, 100, 90]));


// This function takes an array as an input and returns the maximun number in that array. A
// pontital used case would be to find the maximum price in a list of grocery prices.
function findMaxValue(array) {
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}

// An example of how it could be used:
// console.log(findMaxValue([1, 4, 3, 2, 6, 10, 100, 200, 1]));
