
$(document).ready(function() {

  var nav = $("#navigation");

  nav.hide();
  $("#mobile-nav-toggle, #navigation li a").on("click", function() {
    nav.slideToggle("fast", function() {
      if ($('#navigation').is(':visible'))
          $('#navigation').css('display','flex');
    });
  });

});
