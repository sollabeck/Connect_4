$( document ).ready(function() {

//Controller


//View

//Model


var player = {

}

$("tbody tr:nth-child(1)").children().click(function(event){
  // player = player1 ? player = player2 : player = player1;
  if(event.target && event.target.nodeName == "circle"){
      console.log($(this).index());
    }

});

});










//First column... $("tbody tr").children("td:nth-child(1)")
