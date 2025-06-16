const puzzle = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9]
];

const solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

function createBoard() {
  const board = document.getElementById('sudoku-board');
  board.innerHTML = '';

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const input = document.createElement('input');
      input.maxLength = 1;
      input.type = 'text';
      input.dataset.row = row;
      input.dataset.col = col;

      if (puzzle[row][col] !== null) {
        input.value = puzzle[row][col];
        input.disabled = true;
        input.classList.add('prefilled');
      }

      board.appendChild(input);
    }
  }
}

function checkSudoku() {
  const inputs = document.querySelectorAll('#sudoku-board input');
  let correct = true;

  inputs.forEach(input => {
    const row = parseInt(input.dataset.row);
    const col = parseInt(input.dataset.col);
    const value = parseInt(input.value);

    if (!input.disabled && value !== solution[row][col]) {
      input.style.backgroundColor = '#ffcdd2'; // red
      correct = false;
    } else if (!input.disabled) {
      input.style.backgroundColor = '#c8e6c9'; // green
    }
  });

  document.getElementById('message').textContent = correct
    ? '✅ Sudoku Solved Correctly!'
    : '❌ Some cells are incorrect. Try again!';
}

function resetSudoku() {
  createBoard();
  document.getElementById('message').textContent = '';
}

createBoard();

