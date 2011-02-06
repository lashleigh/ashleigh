$(function() {
  $( ".draggable" ).draggable({ snap: true })
  $( ".resizable" ).resizable()

  $(".resizable").dblclick( function() {
    $("#input").show();
    $("#input").focus();
    $(".formatted_content").hide();
  });
    
  $(".resizable").focusout( function() {
    $("#input").hide();
    $(".formatted_content").show();
  });

});

