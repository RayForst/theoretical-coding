/**
 * Checks if a number is even
 * @param {number} n - number to check
 * @returns {boolean} true if number is even, false if odd
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const testEven = n => !(n % 2);

/**
 * Checks if a number is even (alternative implementation)
 * @param {number} n - number to check
 * @returns {boolean} true if number is even, false if odd
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
function testEven2(n) {
    return n % 2 === 0;
}

