/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo(bingoCard, drawnNumbers) {
  // Create a 5x5 grid from the bingo card
  const grid = [];
  for (let i = 0; i < 5; i++) {
    grid.push(bingoCard.slice(i * 5, (i + 1) * 5));
  }

  // Check rows, columns, and diagonals
  const rows = grid;
  const columns = Array.from({ length: 5 }, (_, i) =>
    grid.map((row) => row[i])
  );
  const diagonals = [
    [grid[0][0], grid[1][1], grid[2][2], grid[3][3], grid[4][4]],
    [grid[0][4], grid[1][3], grid[2][2], grid[3][1], grid[4][0]],
  ];

  // Function to check if a line (row, column, or diagonal) has all filled spaces
  const hasBingoLine = (line) =>
    line.every((space) => drawnNumbers.includes(space) || space === "FREE");

  // Check rows, columns, and diagonals for a win
  for (const line of [...rows, ...columns, ...diagonals]) {
    if (hasBingoLine(line)) {
      return true; // Bingo!
    }
  }

  return false; // No win
}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
checkForBingo(
  [
    8,
    29,
    35,
    54,
    65,
    13,
    24,
    44,
    48,
    67,
    9,
    21,
    "FREE",
    59,
    63,
    7,
    19,
    34,
    53,
    61,
    1,
    20,
    33,
    46,
    72,
  ],
  [8, 24, 53, 72]
);

// this should return false
checkForBingo(
  [
    8,
    29,
    35,
    54,
    65,
    13,
    24,
    44,
    48,
    67,
    9,
    21,
    "FREE",
    59,
    63,
    7,
    19,
    34,
    53,
    61,
    1,
    20,
    33,
    46,
    72,
  ],
  [1, 33, 53, 65, 29, 75]
);
