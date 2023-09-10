const repeatString = function(string, num) {
    let i = 0
    let newString = ''
    if (num < 0) return 'ERROR'
    while (i < num) {
        newString = newString.concat(string)
        i++
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
