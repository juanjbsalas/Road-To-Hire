function addition(n, m) {
    return n + m;
}

function average(array) {
    let avg = 0;
    for (let i = 0; i < array.length; i++ ){
        avg += array[i];
    }
    
    return avg / array.length;
}

function max(array) {
    let x = array.sort();
    
    return x[x.length - 1];
}










// let x = average([3, 3, 3]);
// console.log(x);
