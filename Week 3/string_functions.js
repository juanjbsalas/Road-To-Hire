// This function takes a string as a parameter and reverses the string. A potential use case
// of this function would be to more easily delete the first characters of a string without
//  accessing the last indexes
function reverseString(str) {
    let reversedStrList = []
    for (let i = str.length - 1; i >= 0; i--){
        reversedStrList.push(str[i]);
    }
    return reversedStrList.join('')
}

// An example of using this string would be:
// let originalString = "hello";
// let reversedString = reverseString(originalString);
// console.log(reversedString);


// This function takes two parameters, a string and a character. Then this string counts
// the occurrences of that character in the string and returns the number of times that
// character showed up. A potential use case of this function would be to check if certain
//  strings are spelled correctly.
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == char) {
            count += 1;
        }
    }
    return count;
}

// An example of using this function would be:
// const inputString = "hello, world!";
// const charCount = countCharacterOccurrences(inputString, 'o');
// console.log(charCount); 


