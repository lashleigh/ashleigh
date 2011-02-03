// Calculator

$(document).ready(function() {
  $("#calculator_entry").keyup(function(event){
    if(event.keyCode == 13){
      calc();
    }
  });
});

function calc() {
  var exp = $("#calculator_entry").val();
  var calc = Parser.evaluate(exp);
  $("#calculator_display").prepend( "<code>"+exp + "</br><div style='margin-left: 20px;'>" + calc + "</div></code>");
}
