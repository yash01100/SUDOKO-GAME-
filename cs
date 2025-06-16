body {
  font-family: 'Segoe UI', sans-serif;
  background: #e8f5e9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.sudoku-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
}

#sudoku-board {
  display: grid;
  grid-template-columns: repeat(9, 40px);
  gap: 2px;
  margin: 10px auto;
}

input {
  width: 38px;
  height: 38px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
}

input.prefilled {
  background-color: #c8e6c9;
  font-weight: bold;
}

.buttons {
  margin-top: 10px;
}

button {
  padding: 10px 15px;
  margin: 5px;
  background-color: #388e3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2e7d32;
}

#message {
  margin-top: 10px;
  font-weight: bold;
}

