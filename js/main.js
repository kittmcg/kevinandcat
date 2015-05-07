$(document).ready(function() {

  var nav = $("#navigation")

  nav.hide();
  $("#mobile-nav-toggle").on("click", function() {
    nav.slideToggle("fast");
  });
});
