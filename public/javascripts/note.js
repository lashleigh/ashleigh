$(function() {
  $( ".draggable" ).draggable({ snap: true })
  $( ".resizable" ).resizable()

  $(".resizable").dblclick( function() {
    var outer_height = $(this).css("height");
    var outer_width = $(this).css("width");
    $(this).find(".edit_note").find("textarea").css("height", outer_height);
    $(this).find(".edit_note").find("textarea").css("width", outer_width);
    $(this).find(".edit_note").css("height", outer_height);
    $(this).find(".edit_note").css("width", outer_width);
    $(this).find(".edit_note").show();
    $(this).find(".edit_note").find("textarea").focus();
    $(this).find(".formatted_content").hide();
  });
    
  $(".resizable").focusout( function() {
    var self = this;
    $.get("/update", $(this).find(".edit_note").serialize(), function(result, txtstatus) {
      $(self).find('.formatted_content').html(result);
    });
    $('.edit_note').hide();
    $('.edit_note').next().show();
  });

});

