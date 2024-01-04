/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = function(...args) {
        let count = 0;
        for (let i in args) {
            count++;
        }
        return count;
    };
    
    /**
     * argumentsLength(1, 2, 3); // 3
     */