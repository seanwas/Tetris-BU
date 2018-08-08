function createBoard() {
  for (rows = 0; rows < 20; rows++) {
    var newRow = document.createElement("div");
    newRow.classList.add("row");
    for (columns = 0; columns < 10; columns++) {
      var newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.innerHTML = "&nbsp;";
      newRow.appendChild(newSquare);
    }
    document.querySelector(".main-game").appendChild(newRow);
  }
}

function playGame() {
  nextPiece = randomGamePiece();
  nextColor = randomColor();
  getNewPiece();
  placePiece(activePiece, activeColor, 0);
  beginLevelTimer();
}

function randomGamePiece() {
  var piece = Math.floor(Math.random() * 7);
  return piece;
}

function randomColor() {
  // Get a random Color Dark Blue, Red, Purple, Yellow, Green, Orange, Light Blue
  var color = Math.floor(Math.random() * 6);
  return color;
}

document.querySelector("body").addEventListener("keydown", function(e) {
  if (e.keyCode === 37) movePiece(-1); // Arrow Left
  if (e.keyCode === 38) rotatePiece(); //Arrow Up
  if (e.keyCode === 39) movePiece(+1); // Arrow Right
  if (e.keyCode === 40) dropPiece(+10); // Arrow Down
});

createBoard();
playGame();
