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
module.exports = removeFromArray;





// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// ```javascript
// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// ```