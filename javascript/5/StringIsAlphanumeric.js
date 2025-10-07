/**
 * Validates if a string is alphanumeric
 * @param {string} str - the string to validate
 * @returns {boolean} true if string is alphanumeric, false otherwise
 * Time complexity: O(n) - where n is the length of the string
 * Space complexity: O(1) - constant space
 * 
 * Conditions for alphanumeric string:
 * - At least one character (empty string is not valid)
 * - Only uppercase/lowercase latin letters and digits 0-9
 * - No whitespaces or underscores
 * 
 * Examples:
 * alphanumeric("Mazinkaiser") -> true
 * alphanumeric("hello world_") -> false (contains space and underscore)
 * alphanumeric("PassW0rd") -> true
 * alphanumeric("") -> false (empty string)
 * alphanumeric("__") -> false (only underscores)
 */
const alphanumeric = str => str.length > 0 && /^[a-zA-Z0-9]+$/.test(str);