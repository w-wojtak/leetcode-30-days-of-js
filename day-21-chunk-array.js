/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var idx = 0;
    var a = [];
    while (idx < arr.length){
        a.push(arr.slice(idx, idx + size));
        idx += size;
    }
    return a;
};
