$(function() {
  $( ".draggable" ).draggable({ 
    snap: ".draggable, .slide",
    stop: function(event, ui) {
      var current = $(this)
      $.get("/position", {id: parseInt(current.attr("id").split("_")[1]), ttop: current.position().top, left: current.position().left })
    }
  })
  $( ".resizable" ).resizable({
    containment: '.slide',
    resize: function(event, ui) {
      $(this).find('.formatted_content').css("width",(ui.size.width-10)+"px");
      $(this).find('.formatted_content').css("height",(ui.size.height-10)+"px");
    },
    stop: function(event, ui) {
      $.get("/dimension", {id: parseInt($(this).parent().attr("id").split("_")[1]), width: $(this).width(), height: $(this).height() })
    }
  })

  $(".resizable").mouseover( function() {
    $(this).find(".delete").show();
  });
  $(".resizable").mouseout( function() {
    $(".delete").hide();
  });
  $(".resizable").dblclick( function() {
    var outer_height = $(this).height() - 15;
    var outer_width = $(this).width() - 15;
    $(this).find(".edit_note").find("textarea").css("height", outer_height+"px");
    $(this).find(".edit_note").find("textarea").css("width", outer_width+"px");
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

  $(".delete").click( function(event) {
    var self = $(this).attr("id").split("_")[1];
    console.log(self);
    $.get("/destroy", {id: self}, function(result, txtstatus) {
      $("#note_"+self).hide();   
    });
  });

  $(".slide").dblclick( function(event) {
    $.get("notes/new", {
      top: event.offsetY, 
      left: event.offsetX,
      width: 200, 
      height: 200 }, function(result, txtstatus) {
      $("#content").append(result);
      });
  });
});

