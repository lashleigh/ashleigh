$(function() {
  prettify();
  $(".note").livequery( function() {
    $(this).draggable({ 
      snap: ".draggable, .slide",
      opacity: 0.6,
      stack: ".note",
      drag: function(event, ui) {
        $(this).css("border", "1px dashed red");
        },
      stop: function(event, ui) {
        var current = $(this)
        $.get("/position", {id: parseInt(current.attr("id").split("_")[1]), ttop: current.position().top, left: current.position().left })
        $(this).css("border", "");
      }
    });
  });
  $(".note").livequery( function() {
    $(this).resizable({
      resize: function(event, ui) {
        $(this).find('.in_place_editor_field').css("width",(ui.size.width)+"px");
        $(this).find('.in_place_editor_field').css("height",(ui.size.height)+"px");
        $(this).find('.formatted_content').css("width",(ui.size.width-10)+"px");
        $(this).find('.formatted_content').css("height",(ui.size.height-10)+"px");
      },
      stop: function(event, ui) {
        $.get("/dimension", {id: parseInt($(this).attr("id").split("_")[1]), width: $(this).width(), height: $(this).height() })
      }
    });
  });

  $(".note").live("mouseover", function() {
    $(this).find(".delete").show();
    prettify();
  });
  $(".note").live("mouseout", function() {
    $(".delete").hide();
  });
  $(".note").live("dblclick", function() {
    var outer_height = $(this).height() - 15;
    var outer_width = $(this).width() - 15;
    $(this).find(".edit_note").find("textarea").css("height", outer_height+"px");
    $(this).find(".edit_note").find("textarea").css("width", outer_width+"px");
    $(this).find(".edit_note").show();
    $(this).find(".edit_note").find("textarea").focus();
    $(this).find(".formatted_content").hide();
  });
    
  $(".note").live("focusout", function() {
    var self = this;
    $.get("/update", $(this).find(".edit_note").serialize(), function(result, txtstatus) {
      $(self).find('.formatted_content').html(result);
    });
    $('.edit_note').hide();
    $('.edit_note').next().show();
  });

  $(".delete").live("click", function(event) {
    var self = $(this).attr("id").split("_")[1];
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
function prettify() {
    $("pre").addClass("prettyprint");
    prettyPrint();
}
