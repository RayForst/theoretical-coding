/**
 * Rounds an integer to the next (greater than or equal) multiple of 5
 * @param {number} n - the integer to round
 * @returns {number} the next multiple of 5
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * Examples:
 * roundToNext5(0) -> 0
 * roundToNext5(2) -> 5
 * roundToNext5(3) -> 5
 * roundToNext5(12) -> 15
 * roundToNext5(21) -> 25
 * roundToNext5(30) -> 30
 * roundToNext5(-2) -> 0
 * roundToNext5(-5) -> -5
 */
const roundToNext5 = n => {
    // If n is already a multiple of 5, return it
    if (n % 5 === 0) {
        return n;
    }
    
    // For positive numbers: round up to next multiple of 5
    // For negative numbers: round up to next multiple of 5 (closer to 0)
    return Math.ceil(n / 5) * 5;
};

/**
 * Alternative implementation using conditional logic
 * @param {number} n - the integer to round
 * @returns {number} the next multiple of 5
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const roundToNext5_2 = n => {
    // Calculate remainder when divided by 5
    const remainder = n % 5;
    
    if (remainder === 0) {
        // Already a multiple of 5
        return n;
    } else if (n > 0) {
        // Positive number: add (5 - remainder) to round up
        return n + (5 - remainder);
    } else {
        // Negative number: add (5 + remainder) to round up
        return n + (5 + remainder);
    }
};

/**
 * One-liner implementation using Math.ceil
 * @param {number} n - the integer to round
 * @returns {number} the next multiple of 5
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const roundToNext5_3 = n => Math.ceil(n / 5) * 5;
