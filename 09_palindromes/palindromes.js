const palindromes = function(text) {

    const abcOnlyArray = removeFromArray(text.toLowerCase().split(""), '!',',','.',' ');

    return abcOnlyArray.join() === abcOnlyArray.reverse().join();

};

const removeFromArray = function(array, ...theArgs) {

    //check for each of multiple arguments
    for (const arg of theArgs){

        //find index of matching array element and argument
        for (i = 0; i < array.length; i++) {

            //splice out matching argument at found index
            if (array[i] === arg) {
                array.splice(i, 1);
            } 

        }

    }

    return array;

};

// Do not edit below this line
module.exports = palindromes;

//create new array with only ordinary letters from original string
//compare new array and reverse new array as strings
//split() seperates string into array values, reverse() reverses the array, join() joins array back into string
//cannot compare array but can compare string