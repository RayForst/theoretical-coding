/**
 * Returns the sum of the two lowest positive numbers in an array
 * @param {number[]} numbers - array of minimum 4 positive integers
 * @returns {number} sum of the two smallest numbers
 * Time complexity: O(n log n) - due to sorting
 * Space complexity: O(1) - constant space (sorting in place)
 * 
 * Examples:
 * sumTwoSmallestNumbers([19, 5, 42, 2, 77]) -> 7 (2 + 5)
 * sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) -> 3453455 (10 + 3453445)
 * sumTwoSmallestNumbers([12, 15, 28, 4, 2, 43, 1]) -> 3 (1 + 2)
 */
const sumTwoSmallestNumbers = numbers => {
    // Sort the array in ascending order
    const sorted = [...numbers].sort((a, b) => a - b);
    
    // Return sum of first two elements (smallest numbers)
    return sorted[0] + sorted[1];
};

/**
 * Alternative implementation using Math.min() approach
 * @param {number[]} numbers - array of minimum 4 positive integers
 * @returns {number} sum of the two smallest numbers
 * Time complexity: O(n) - single pass through array
 * Space complexity: O(1) - constant space
 * 
 * This approach finds the two smallest numbers without sorting
 */
const sumTwoSmallestNumbers2 = numbers => {
    let min1 = Math.min(...numbers);
    let min2 = Math.min(...numbers.filter(num => num !== min1));
    return min1 + min2;
};

/**
 * One-liner implementation using sort and slice
 * @param {number[]} numbers - array of minimum 4 positive integers
 * @returns {number} sum of the two smallest numbers
 * Time complexity: O(n log n) - due to sorting
 * Space complexity: O(n) - creates new array
 */
const sumTwoSmallestNumbers3 = numbers => 
    [...numbers].sort((a, b) => a - b).slice(0, 2).reduce((sum, num) => sum + num, 0);
