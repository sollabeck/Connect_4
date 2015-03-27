//CONTROLLER


//VIEW



//MODEL

// Transpose Function


// Board, Players, and Moves

var board = [ ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e']];

var player1 = {
  color: "red"
};

var player2 = {
  color: "black"
};

var move = function(player, column) {
  for (var i=0; i<7; i++) {
    if (board[i][column] !== 'e') {
      board[i-1][column] = player.color;
      return [player,column,i-1];
    }
    else if (i === 6) {
      board[i][column] = player.color;
      return [player,column,i];
    }
  }
};

// Win Checker Functions

var horizontal_checker = function() {
    for (var i=0; i<7; i++ ) {
        if (board[i].toString().includes('r,r,r,r') === true) {
            // console.log("row " + i);
            console.log("Red Wins!");
        }
        else if (board[i].toString().includes('b,b,b,b') === true) {
            console.log("Black Wins!");
        }
    }
};

var vertical_checker = function() {
  transposed = board.transpose();
  for (var i=0; i<7; i++ ) {
    if (transposed[i].toString().includes('r,r,r,r') === true) {
        // console.log("row " + i);
        console.log("Red Wins!");
    }
    else if (transposed[i].toString().includes('b,b,b,b') === true) {
        console.log("Black Wins!");
    }
  }
};

// var diagonal_checker = function() {
//   //
// };

var win_checker = function() {
  vertical_checker();
  horizontal_checker();
//   diagonal_checker();
};

// ---------------------------------------------

// move(player2, 3);
// move(player2, 3);
// move(player2, 4);
// move(player1, 6);

// ---------------------------------------------

// player chooses column 5
// check [col_x][0] to see if empty
// check [col_x][1] to see if empty
// check [col_x][2] to see if empty ... etc
// if value is not empty, then specify then -1 to the row
// return the row





var renderBoard = function(board){
  var rootNode = $('<div class="board"></div>');
  board.forEach(function(row){
    var rowNode = $('<div class="board-row"></div>');
    row.forEach(function(cell){
      var cellNode = $('<div class="board-cell"></div>').text(cell)
      rowNode.append(cellNode)
    });
  });
  return rootNode;
};
