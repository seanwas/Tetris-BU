function updateScore(amount) {
  score += amount;
  document.querySelector("#score").innerHTML = score;
}

function beginLevelTimer() {
  clearInterval(levelTimer);
  levelTimer = setInterval(() => {
    updateTimer();
  }, speed);
}

function updateTimer() {
  dropPiece(+10);
}

function updatePieces() {
  pieces -= 1;
  if (pieces === 0) {
    updateLevel();
    pieces = 10;
  }
  document.querySelector("#pieces").innerHTML = pieces;
}

function updateLevel() {
  if (level === 20) {
    clearInterval(levelTimer);
    alert("player Win");
    return;
  }
  level += 1;
  document.querySelector("#level").innerHTML = level;
  speed = parseInt(speed * 0.86);
  beginLevelTimer();
}
