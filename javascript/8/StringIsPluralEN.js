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



/**
 * Over-engineered approach to pluralization check
 * Author: Gabriel Stoppa dos Santos (@Arqui_) - https://www.codewars.com/users/Arqui_
 * 
 * This is an intentionally complex implementation that demonstrates:
 * - Object-oriented programming with constructor functions
 * - Verbose variable naming for "clarity"
 * - Multiple validation checks (some unnecessary)
 * - String-based return values instead of booleans
 * 
 * Time complexity: O(1) - constant time (but with more operations)
 * Space complexity: O(1) - constant space
 * 
 * Note: This approach is significantly more complex than needed for the simple
 * task of checking if n !== 1, but serves as an example of over-engineering.
 */
function PluralNecessityVerifier(number){
  // Constructor function (currently empty)
}

/**
 * Verifies if pluralization is needed using verbose validation
 * @param {number} number - the number to check
 * @returns {string} empty string if singular, message if plural
 * 
 * This method performs multiple checks:
 * 1. Ensures input is not a specific string value
 * 2. Validates type is number
 * 3. Checks if value is not NaN
 * 4. Checks if number is not equal to 1
 */
PluralNecessityVerifier.prototype.verifyPotentialNeedOfPluralization = function(number){
  const numberIsNotPotentiallyBuggyData = number !== 'Potentially Buggy Data';
  const numberIsReallyANumberAndNotAnIntruderDataType = typeof number === 'number';
  const numberIsNotNotANumber = !isNaN(number);
  const numberOfAbstractElementsDoesntEqualsOne = number !== 1;
  if(
    (numberIsNotPotentiallyBuggyData) &&
    (numberIsReallyANumberAndNotAnIntruderDataType) &&
    (numberIsNotNotANumber) &&
    (numberOfAbstractElementsDoesntEqualsOne)
  ){
    return "It's true that the sentence needs pluralization";
  }
  return ''
}

/**
 * Wrapper function that uses the over-engineered approach
 * @param {number} n - the number to check
 * @returns {boolean} true if plural should be used, false if singular
 * 
 * This function creates an instance of PluralNecessityVerifier and converts
 * the string return value to a boolean using double negation (!!)
 */
function plural(n) {
  const pluralNecessityVerifierWorker = new PluralNecessityVerifier();
  return !!pluralNecessityVerifierWorker.verifyPotentialNeedOfPluralization(n);
}