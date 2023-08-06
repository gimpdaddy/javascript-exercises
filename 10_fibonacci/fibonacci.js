const fibonacci = function(num) {

    //make array which is populated with fibonachi sequence up to the desired value

    //value at n is the sum of n-1 and n-2

    //can .push new value to array for each iteration

    if (num < 0) {
        return "OOPS";
    } else {
        Number(num);
    }

    //initial values
    const fibonacci = [0, 1];

    for (i = 2; i <= num; i++) {
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }

    return fibonacci[num];
};

// Do not edit below this line
module.exports = fibonacci;
