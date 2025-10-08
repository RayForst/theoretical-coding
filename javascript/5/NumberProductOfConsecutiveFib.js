/**
 * Finds consecutive Fibonacci numbers whose product equals the given number
 * @param {number} prod - the target product to find
 * @returns {number[]} array containing [F(n), F(n+1), true/false]
 * Time complexity: O(n) - where n is the number of Fibonacci numbers generated
 * Space complexity: O(1) - constant space (only stores current and previous values)
 * 
 * The function searches for two consecutive Fibonacci numbers F(n) and F(n+1)
 * such that F(n) * F(n+1) = prod. If found, returns [F(n), F(n+1), true].
 * If not found, returns the first pair where F(n) * F(n+1) > prod with false.
 * 
 * Examples:
 * productFib(714) -> [21, 34, true] (21 * 34 = 714)
 * productFib(800) -> [34, 55, false] (21 * 34 < 800 < 34 * 55)
 * productFib(4895) -> [55, 89, true] (55 * 89 = 4895)
 */
const productFib = prod => {
    // Initialize first two Fibonacci numbers
    let prev = 0;  // F(0) = 0
    let curr = 1;  // F(1) = 1
    
    // Generate Fibonacci numbers and check their product
    while (prev * curr < prod) {
        // Calculate next Fibonacci number
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    // Check if we found exact product
    if (prev * curr === prod) {
        return [prev, curr, true];
    } else {
        // Return the first pair where product > target
        return [prev, curr, false];
    }
};

/**
 * Alternative implementation using array to store Fibonacci sequence
 * @param {number} prod - the target product to find
 * @returns {number[]} array containing [F(n), F(n+1), true/false]
 * Time complexity: O(n) - where n is the number of Fibonacci numbers generated
 * Space complexity: O(n) - stores all Fibonacci numbers up to the target
 */
const productFib2 = prod => {
    const fib = [0, 1]; // Initialize with F(0) = 0, F(1) = 1
    
    // Generate Fibonacci numbers until product >= target
    while (fib[fib.length - 2] * fib[fib.length - 1] < prod) {
        fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
    }
    
    const n = fib.length - 2;
    const product = fib[n] * fib[n + 1];
    
    return [fib[n], fib[n + 1], product === prod];
};

/**
 * One-liner implementation using generator function
 * @param {number} prod - the target product to find
 * @returns {number[]} array containing [F(n), F(n+1), true/false]
 */
const productFib3 = prod => {
    let [a, b] = [0, 1];
    while (a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
};
