const sumAll = function(num1, num2) {

    //check if numbers are appropriate values otherwise ERROR
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return 'ERROR'
    } else {

        //loweBound should be less than upperBound
        if (num1 < num2) {
            lowerBound = num1;
            upperBound = num2;
        } else {
            lowerBound = num2;
            upperBound = num1;
        }

        //begin summing all integers between lowerBound and upperBound incrementing
        let finalSum = 0;

        for (i = lowerBound; i <= upperBound; i++) {
            
            finalSum += i;
        
        }

        return finalSum;

    }

};

// Do not edit below this line
module.exports = sumAll;

//loop between input values and increment 1 at a time
//add i to final sum each iteration
