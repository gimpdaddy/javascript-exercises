const leapYears = function(year) {

    if (year % 4 === 0 && !(year % 100 === 0) ) return true

    if (year % 100 === 0 && year % 400 === 0) return true
    
    return false
    
};

//if /4 and not by /100 always leap year
//if /4 and by /100, then only if /400 then leap year
//everything else not a leap year


// Do not edit below this line
module.exports = leapYears;


// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// >
// > -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

// ```javascript
// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false
// ```


// ## Hints
// - use an `if` statement and `&&` to make sure all the conditions are met properly
