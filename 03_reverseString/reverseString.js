const reverseString = function(word) {

//create an empty array to store characters
const chars = [];

//collect characters in array
for (let char of word) {
    chars.push(char);
}

//could have used .split to collect word into array as characters insteal of for...of

let reverseChars = chars.reverse();

//.join is like .toString but controls seperator
let reverseWord = reverseChars.join("");

return reverseWord;

};

// Do not edit below this line
module.exports = reverseString;
