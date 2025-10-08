/**
 * Removes trailing zeros from a number
 * @param {number} n - the number to process
 * @returns {number} the number with trailing zeros removed
 * Time complexity: O(log n) - where n is the number of digits
 * Space complexity: O(1) - constant space
 * 
 * Examples:
 * noBoringZeros(1450) -> 145
 * noBoringZeros(960000) -> 96
 * noBoringZeros(1050) -> 105
 * noBoringZeros(-1050) -> -105
 * noBoringZeros(0) -> 0
 */
const noBoringZeros = n => {
    // Handle special case: zero should remain zero
    if (n === 0) {
        return 0;
    }
    
    // Convert to string to work with digits
    let str = n.toString();
    
    // Remove trailing zeros
    while (str.endsWith('0')) {
        str = str.slice(0, -1);
    }
    
    // Convert back to number
    return parseInt(str, 10);
};

/**
 * Alternative implementation using mathematical approach
 * @param {number} n - the number to process
 * @returns {number} the number with trailing zeros removed
 * Time complexity: O(log n) - where n is the number of digits
 * Space complexity: O(1) - constant space
 */
const noBoringZeros2 = n => {
    // Handle special case: zero should remain zero
    if (n === 0) {
        return 0;
    }
    
    // Remove trailing zeros by repeatedly dividing by 10
    while (n % 10 === 0) {
        n = Math.floor(n / 10);
    }
    
    return n;
};

/**
 * One-liner implementation using regex
 * @param {number} n - the number to process
 * @returns {number} the number with trailing zeros removed
 * Time complexity: O(log n) - where n is the number of digits
 * Space complexity: O(1) - constant space
 */
const noBoringZeros3 = n => {
    // Handle zero case and use regex to remove trailing zeros
    return n === 0 ? 0 : parseInt(n.toString().replace(/0+$/, ''), 10);
};

/**
 * Most efficient implementation using bitwise operations
 * @param {number} n - the number to process
 * @returns {number} the number with trailing zeros removed
 * Time complexity: O(log n) - where n is the number of digits
 * Space complexity: O(1) - constant space
 */
const noBoringZeros4 = n => {
    // Handle special case: zero should remain zero
    if (n === 0) return 0;
    
    // Remove trailing zeros by dividing by 10 until remainder is not 0
    while (n % 10 === 0) {
        n /= 10;
    }
    
    return n;
};
