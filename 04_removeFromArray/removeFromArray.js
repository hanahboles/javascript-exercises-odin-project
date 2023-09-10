const removeFromArray = function(arr, ...toRemove) {
    const toRemoveArray = Array.from(toRemove)
    return arr.filter((item) => !toRemoveArray.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
