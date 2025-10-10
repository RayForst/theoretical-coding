/**
 * Calculates the total price for hotdogs based on quantity discounts
 * @param {number} n - number of hotdogs to buy
 * @returns {number} total price
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * Pricing rules:
 * - Less than 5 hotdogs: $100 each
 * - 5-9 hotdogs: $95 each  
 * - 10 or more hotdogs: $90 each
 * 
 * Examples:
 * saleHotdogs(1) -> 100 (1 * 100)
 * saleHotdogs(5) -> 475 (5 * 95)
 * saleHotdogs(10) -> 900 (10 * 90)
 */
function saleHotdogs(n){
    const pricePerUnit = n => (n >= 10) ? 90 : (n >= 5 && n < 10) ? 95 : 100;
    return pricePerUnit(n) * n
}



/**
 * Alternative implementation using switch statement
 * @param {number} n - number of hotdogs to buy
 * @returns {number} total price
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * This approach uses switch(true) pattern for cleaner conditional logic
 */
const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
  }

/**
 * One-liner implementation using ternary operators
 * @param {number} n - number of hotdogs to buy
 * @returns {number} total price
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * Most concise version using nested ternary operators
 */
const saleHotdogs=n=>n*(n<5?100:n<10?95:90);
