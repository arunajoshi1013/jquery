/*$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header oregon.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
*/

/*$(function() {
  $("p").click(function() {
    $("img").show();
  });
});
*/

/*$(function() {
  $(".clickable").click(function() {
    $("#initialiy-showing").toggle();
    $("#initially-hidden").toggle();
  });
})*/

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
