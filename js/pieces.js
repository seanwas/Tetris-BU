function getNewPiece() {
  pieceState = 0;
  activePiece = nextPiece;
  activeColor = nextColor;
  getNextPiece();
  if (validateMove(0) === true) {
    placePiece(activePiece, activeColor, 0);
  } else {
    clearInterval(levelTimer);
    alert("loss");
  }
}

function getNextPiece() {
  nextPiece = randomGamePiece();
  nextColor = randomColor();
  console.log(nextPiece);
  console.log(nextColor);
  updateNextPiece(nextPiece, nextColor);
}

function updateNextPiece(nextPiece, nextColor) {
  var nextSection = document.querySelector("#next");
  // Clear previous next piece
  nextSection.innerHTML = "";
  gamePieces[nextPiece].build.length;

  //Loop Through new piece info for nextPiece to add divs
  for (nextrow = 0; nextrow < gamePieces[nextPiece].build.length; nextrow++) {
    var newRowDiv = document.createElement("div");
    newRowDiv.classList.add("next-row");
    for (
      index = 0;
      index < gamePieces[nextPiece].build[nextrow].length;
      index++
    ) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("next-square");
      if (gamePieces[nextPiece].build[nextrow][index] === "X") {
        newDiv.style.background = colors[nextColor];
      }
      newRowDiv.appendChild(newDiv);
    }

    nextSection.appendChild(newRowDiv);
  }
}

function addToBoard() {
  for (index = 0; index < 4; index++) {
    boardLocation[
      parseInt(pieceLocation) +
        parseInt(gamePieces[activePiece].state[pieceState][index])
    ] =
      "X";
  }
  updateScore(10);
  updatePieces();
  checkRowMatch();
  pieceLocation = 13;
  getNewPiece();
}

function placePiece(piece, color, state) {
  //place the piece on the gameboard in the middle

  for (index = 0; index < 4; index++) {
    document.querySelectorAll(".square")[
      pieceLocation + gamePieces[piece].state[pieceState][index]
    ].style.background =
      colors[color];
  }
}

function rotatePiece() {
  if (validateRotation() === true) {
    placePiece(activePiece, 7, pieceState);
    if (pieceState === 3) {
      pieceState = 0;
    } else {
      pieceState += 1;
    }
    placePiece(activePiece, activeColor, pieceState);
  }
}

function validateRotation() {
  if (pieceLocation < gamePieces[activePiece].minRow * 10) return false;
  if (pieceState === 3) {
    desiredState = 0;
  } else {
    desiredState = pieceState + 1;
  }

  //check the currentSpace of the ActivePiece to see if the move is illegal based on the desiredState
  // console.log("activePiece", activePiece);

  //column location = the last digit of the indexlocation
  var columnLocation = pieceLocation - parseInt(pieceLocation / 10) * 10;

  var illegals = gamePieces[activePiece].illegal[desiredState];
  // console.log("desiredState", desiredState);
  // console.log("pieceLocation", columnLocation);

  for (checkIllegals = 0; checkIllegals < illegals.length; checkIllegals++) {
    if (illegals[checkIllegals] === columnLocation) {
      return false;
    }
  }
  return true;
}

function movePiece(movement) {
  if (validateMove(movement)) {
    placePiece(activePiece, 7, pieceState);
    pieceLocation += movement;
    placePiece(activePiece, activeColor, pieceState);
  }
}

function dropPiece(movement) {
  if (validateMove(movement)) {
    placePiece(activePiece, 7, pieceState);
    pieceLocation += movement;
    placePiece(activePiece, activeColor, pieceState);
  } else {
    addToBoard();
    return;
  }
}

//Validate that piece can move to the requested space
function validateMove(movement) {
  tempPieceLocation = pieceLocation + movement;
  if (validateRow(tempPieceLocation, movement) === false) {
    return false;
  }
  for (index = 0; index < 4; index++) {
    checkBoard =
      parseInt(tempPieceLocation) +
      parseInt(gamePieces[activePiece].state[pieceState][index]);

    if (boardLocation[checkBoard] === "X") return false;
    if (checkBoard > 199) return false;
  }
  return true;
}
