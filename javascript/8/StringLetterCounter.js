/**
 * Counts the number of occurrences of a character in a string
 * @param {string} str - the string to search in
 * @param {string} letter - the character to count (single character)
 * @returns {number} the count of occurrences
 * Time complexity: O(n) - where n is the length of the string
 * Space complexity: O(1) - constant space
 * 
 * Examples:
 * strCount("Hello", 'o') -> 1
 * strCount("Hello", 'l') -> 2
 * strCount("", 'z') -> 0
 * strCount("Mississippi", 's') -> 4
 * strCount("Programming", 'm') -> 2
 */
const strCount = (str, letter) => {
    let count = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    
    return count;
};

/**
 * Alternative implementation using split and length
 * @param {string} str - the string to search in
 * @param {string} letter - the character to count
 * @returns {number} the count of occurrences
 * Time complexity: O(n) - where n is the length of the string
 * Space complexity: O(n) - creates array from split
 */
const strCount2 = (str, letter) => {
    // Split the string by the letter and count the resulting parts
    // If letter appears 2 times, split creates 3 parts
    return str.split(letter).length - 1;
};


/**
 * Most efficient implementation using for...of loop
 * @param {string} str - the string to search in
 * @param {string} letter - the character to count
 * @returns {number} the count of occurrences
 * Time complexity: O(n) - where n is the length of the string
 * Space complexity: O(1) - constant space
 */
const strCount3 = (str, letter) => {
    let count = 0;
    
    // Use for...of loop for cleaner syntax
    for (const char of str) {
        if (char === letter) {
            count++;
        }
    }
    
    return count;
};
