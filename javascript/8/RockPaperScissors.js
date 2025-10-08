/**
 * Rock Paper Scissors game - determines the winner
 * @param {string} p1 - Player 1's choice ("rock", "paper", or "scissors")
 * @param {string} p2 - Player 2's choice ("rock", "paper", or "scissors")
 * @returns {string} "Player 1 won!", "Player 2 won!", or "Draw!"
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 * 
 * Game rules:
 * - Rock beats scissors
 * - Paper beats rock
 * - Scissors beat paper
 * - Same choice results in draw
 * 
 * Examples:
 * rps("scissors", "paper") -> "Player 1 won!"
 * rps("scissors", "rock") -> "Player 2 won!"
 * rps("paper", "paper") -> "Draw!"
 * rps("rock", "scissors") -> "Player 1 won!"
 */
const rps = (p1, p2) => {
    // Handle draw case
    if (p1 === p2) {
        return "Draw!";
    }
    
    // Define winning combinations
    const winConditions = {
        "rock": "scissors",     // rock beats scissors
        "paper": "rock",        // paper beats rock
        "scissors": "paper"     // scissors beat paper
    };
    
    // Check if player 1 wins
    if (winConditions[p1] === p2) {
        return "Player 1 won!";
    }
    
    // Otherwise player 2 wins
    return "Player 2 won!";
};

/**
 * Alternative implementation using nested ternary operators
 * @param {string} p1 - Player 1's choice
 * @param {string} p2 - Player 2's choice
 * @returns {string} Game result
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    
    return (p1 === "rock" && p2 === "scissors") ||
           (p1 === "paper" && p2 === "rock") ||
           (p1 === "scissors" && p2 === "paper")
        ? "Player 1 won!"
        : "Player 2 won!";
};

/**
 * One-liner implementation using object lookup
 * @param {string} p1 - Player 1's choice
 * @param {string} p2 - Player 2's choice
 * @returns {string} Game result
 * Time complexity: O(1) - constant time
 * Space complexity: O(1) - constant space
 */
const rps3 = (p1, p2) => 
    p1 === p2 ? "Draw!" : 
    {rock: "scissors", paper: "rock", scissors: "paper"}[p1] === p2 ? 
    "Player 1 won!" : "Player 2 won!";
