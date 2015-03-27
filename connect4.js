$( document ).ready(function() {

//Controller


//View

//Model
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

var current_player = player2;



var getColumn = $("tbody tr:nth-child(1)").children().click(function(event){
  (current_player === player1) ? current_player = player2 : current_player = player1;
  if(event.target && event.target.nodeName === "circle"){
    column = ($(this).index());
    move(current_player,column);
  }
});



var move = function(player, column) {
  for (var i=0; i<7; i++) {
    if (board[i][column] !== 'e') {
      board[i-1][column] = player.color;
      // return [player,column,i-1];
      return parseData(player,column,i-1);
    }
    else if (i === 6){
      board[i][column] = player.color;
      // return [player,column,i];
      return parseData(player,column,i);
    }
  }
};

var parseData = function(player,column,row){  //

  $("tbody tr").children("td:nth-child(" + (column+1) + ")").eq(row).find("circle").attr("fill", player.color);
  win_checker();
  // diagonal_check(player,column,row);
};





var horizontal_checker = function() {
    for (var i=0; i<7; i++ ) {
        if (board[i].toString().includes('red,red,red,red') === true) {
            // console.log("row " + i);
            console.log("Red Wins!");
        }
        else if (board[i].toString().includes('black,black,black,black') === true) {
            console.log("Black Wins!");
        }
    }
};

var vertical_checker = function() {
  transposed = board.transpose();
  for (var i=0; i<7; i++ ) {
    if (transposed[i].toString().includes('red,red,red,red') === true) {
        // console.log("row " + i);
        alert("Red Wins!");
    }
    else if (transposed[i].toString().includes('black,black,black,black') === true) {
        alert("Black Wins!");
    }
  }
};

// var diagonal_checker = function() {
//   //
// };

var win_checker = function() {
  vertical_checker();
  horizontal_checker();
  diagonal_checker();
};

var diagonal_checker = function(){
  lr_diagonal_check();
  rl_diagonal_check();
}



var lr_diagonal_check = function(){
  var counter = 0
  for(var i = 0;i<4;i++){ //row 0
    for(var j = 0; j<4;j++){ //column 0
      for(var k=1; k<4;k++){
        current_cell = board[i][j]
        if(counter==3 && current_cell != 'e'){alert(current_cell + " wins!"); return;};
        if (board[i+k][j+k] == current_cell){
           counter++
        }
      }
    }
  }
}


var rl_diagonal_check = function(){
  for(var i=0;i<4;i++){ //row 1
    for(var j = 3; j<7;j++){ //column 6
      var counter = 0
      for(var k=1; k<4;k++){
        current_cell = board[i][j]
        if ((board[i+k][j-k] == current_cell)){
           counter++
            if(counter==3 && current_cell != 'e'){alert(current_cell + " wins!"); return;};
        }
      }
    }
  }
}



});










//First column... $("tbody tr").children("td:nth-child(1)")
