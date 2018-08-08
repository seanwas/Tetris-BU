function validateRow(tempPieceLocation, movement) {
  for (index = 0; index < 4; index++) {
    var indexLocation =
      tempPieceLocation + gamePieces[activePiece].state[pieceState][index];

    //column location = the last digit of the indexlocation
    var columnLocation = indexLocation - parseInt(indexLocation / 10) * 10;

    if (
      (columnLocation === 9 && movement === -1) ||
      (columnLocation === 0 && movement === 1)
    ) {
      return false;
    }
  }
  return true;
}

function checkRowMatch() {
  for (rowCheck = 0; rowCheck < 20; rowCheck++) {
    var fullRow = "";
    for (columnCheck = 0; columnCheck < 10; columnCheck++) {
      fullRow += boardLocation[rowCheck * 10 + columnCheck];
    }
    if (fullRow === "XXXXXXXXXX") {
      removeRow(rowCheck);
    }
  }
}

function removeRow(rowCheck) {
  // alert("remove row " + rowCheck);
  removeFromBoard(rowCheck);
  removeFromArray(rowCheck);
  updateScore(200);
}

// remove row from DOM gameboard
function removeFromBoard(rowCheck) {
  //Clear current Row
  for (index = 0; index < 10; index++) {
    document.querySelectorAll(".square")[
      rowCheck * 10 + 9 - index
    ].style.background =
      "black";
  }

  //Loop through all items on the board starting with the last item on the Row and decreasing to create a dropdown effect
  for (prevIndex = rowCheck * 10 - 1; prevIndex > -1; prevIndex--) {
    console.log(rowCheck * 10 - 1);
    document.querySelectorAll(".square")[
      prevIndex + 10
    ].style.background = document.querySelectorAll(".square")[
      prevIndex
    ].style.background;
  }

  //Clear the top Row
  for (topRow = 0; topRow < 10; topRow++) {
    document.querySelectorAll(".square")[topRow].style.background = "black";
  }
}

//Remove from boardLocation Array
function removeFromArray(rowCheck) {
  boardLocation.splice(rowCheck * 10, 10);
  boardLocation.unshift("", "", "", "", "", "", "", "", "", "");
}
