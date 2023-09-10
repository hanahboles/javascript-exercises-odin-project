const sumAll = function(min, max) {
    let sum = 0
    if (min < 0 || max < 0) return 'ERROR'
    if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR'
    if (min === max) return sum

    if (min > max) [min, max] = [max, min]
    for (i = min; i <= max; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
