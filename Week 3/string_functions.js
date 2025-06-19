function reverseString(str) {
    let reversedStrList = []
    for (let i = str.length - 1; i >= 0; i--){
        reversedStrList.push(str[i]);
    }
    return reversedStrList.join('')
}

// let originalString = "hello";
// let reversedString = reverseString(originalString);
// console.log(reversedString);


function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == char) {
            count += 1;
        }
    }
    return count;
}

// const inputString = "hello, world!";
// const charCount = countCharacterOccurrences(inputString, 'o');
// console.log(charCount); 


