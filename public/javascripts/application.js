// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function() {
  $('#content').keyup(function() {
    $('#preview').html(superTextile($(this).val()));
    $("pre").addClass("prettyprint");
    prettyPrint();
  });
});
