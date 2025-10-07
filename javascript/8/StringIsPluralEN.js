/**
 * Determines if a plural form should be used based on the number
 * @param {number} n - the number to check
 * @returns {boolean} true if plural should be used, false if singular
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * Examples:
 * pluralize(0) -> true (0 apples)
 * pluralize(1) -> false (1 apple)
 * pluralize(2) -> true (2 apples)
 * pluralize(1.5) -> true (1.5 apples)
 */
function pluralize(n) {
    return n !== 1;
}

/**
 * Alternative implementation using arrow function
 * @param {number} n - the number to check
 * @returns {boolean} true if plural should be used, false if singular
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const pluralize2 = n => n !== 1;
