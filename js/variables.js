var gamePieces = [
  {
    name: "square",
    build: ["XX", "XX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[0, 1, 10, 11], [1, 10, 11, 0], [10, 11, 0, 1], [11, 0, 1, 10]],
    illegal: [[], [], [], []],
    minRow: 1
  },

  {
    name: "leftL",
    build: ["X  ", "XXX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[0, 10, 11, 12], [10, 11, 1, -9], [11, 1, 0, -1], [1, 0, 10, 20]],
    illegal: [[8], [], [0], []],
    minRow: 1
  },
  {
    name: "rightL",
    build: ["  X", "XXX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [
      [2, 10, 11, 12],
      [-9, -8, 2, 12],
      [0, -10, -9, -8],
      [11, 10, 0, -10]
    ],
    illegal: [[8, 9], [8], [8, 9], [9]],
    minRow: 1
  },
  {
    name: "T",
    build: [" X ", "XXX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[1, 10, 11, 12], [1, 12, 2, -8], [1, -8, -9, -10], [1, -10, 0, 10]],
    illegal: [[8, 9], [8], [8, 9], [9]],
    minRow: 1
  },
  {
    name: "zigleft",
    build: ["XX ", " XX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[0, 1, 11, 12], [11, 1, 2, -8], [2, 1, -9, -10], [-9, 1, 0, 10]],
    illegal: [[8, 9], [8], [8, 9], [9]],
    minRow: 1
  },
  {
    name: "zigright",
    build: [" XX", "XX "],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[1, 2, 10, 11], [1, -9, 2, 12], [1, 0, -9, -8], [1, 11, 0, -10]],
    illegal: [[8, 9], [8], [8, 9], [9]],
    minRow: 1
  },
  {
    name: "line",
    build: ["XXXX"],
    // state 0=horizantal, 1=reversevertical,2=reversehorizantal,4=vertcial
    state: [[0, 1, 2, 3], [0, -10, -20, -30], [0, -1, -2, -3], [0, 10, 20, 30]],
    illegal: [[7, 8, 9], [], [0, 1, 2], []],
    minRow: 3
  }
];

var colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "orange",
  "purple",
  "lightblue",
  "black"
];
var boardLocation = [];
var pieceLocation = 3;
var pieceState = 0; //current state of piece (horizantal,reversevertical,reversehorizantal,vertical)
var activePiece = 0;
var activeColor = 0;
var desiredState = 0;
var score = 0;
var levelTimer = "";
var speed = 1000;
var pieces = 10;
var level = 1;
