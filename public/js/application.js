Array.prototype.transpose = function() {

  // Calculate the width and height of the Array
  var a = this,
    w = a.length ? a.length : 0,
    h = a[0] instanceof Array ? a[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if(h === 0 || w === 0) { return []; }

  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  var i, j, t = [];

  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {

    // Insert a new row (array)
    t[i] = [];

    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {

      // Save transposed data.
      t[i][j] = a[j][i];
    }
  }

  return t;
};

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

// var player1 = {
//   color: "red",
//   name:"Kevin"
// };

// var player2 = {
//   color: "black",
//   name:"Bao"
// };

var current_player = player2;


var resetBoard = function(){
  board = [ ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e'],
              ['e','e','e','e','e','e','e']];

  var_imgs = $("td").find("img");
  var_imgs_parent = $("td").find("img").parent();
  var_imgs.remove();
  var_imgs_parent.append('<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>');

};



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

  // $("tbody tr").children("td:nth-child(" + (column+1) + ")").eq(row).find("circle").attr("fill", player.color);

   $("tbody tr").children("td:nth-child(" + (column+1) + ")").eq(row).find("svg").remove();
   $("tbody tr").children("td:nth-child(" + (column+1) + ")").eq(row).append("<img class='"+player.color+"' src="+player.email+"/>");
    win_checker();
};





var horizontal_checker = function() {
    for (var i=0; i<7; i++ ) {
        if (board[i].toString().includes('red,red,red,red') === true) {
            // console.log("row " + i);
            alert(player1.name + " Wins!");
            resetBoard();

        }
        else if (board[i].toString().includes('black,black,black,black') === true) {
            alert(player2.name + " Wins!");
            resetBoard();
        }
    }
};

var vertical_checker = function() {
  transposed = board.transpose();
  for (var i=0; i<7; i++ ) {
    if (transposed[i].toString().includes('red,red,red,red') === true) {
        // console.log("row " + i);
        alert(player1.name + " Wins!");
        resetBoard();

    }
    else if (transposed[i].toString().includes('black,black,black,black') === true) {
        alert(player2.name + " Wins!");
        resetBoard();

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
  for(var i=0;i<4;i++){ //row 1
    for(var j = 0; j<4;j++){ //column 6
      var counter = 0
      for(var k=1; k<4;k++){
        current_cell = board[i][j]
        if ((board[i+k][j+k] == current_cell)){
           counter++
            if(counter==3 && current_cell != 'e'){
              if(current_cell==="red"){
                alert(player1.name + " Wins!");
              }
              else{
                alert(player2.name + " Wins!");
              }
              resetBoard();
            };
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
            if(counter==3 && current_cell != 'e'){
              if(current_cell==="red"){
                alert(player1.name + " Wins!");
              }
              else{
                alert(player2.name + " Wins!");
              }
              resetBoard();
            };
        }
      }
    }
  }
}



});










//First column... $("tbody tr").children("td:nth-child(1)")
