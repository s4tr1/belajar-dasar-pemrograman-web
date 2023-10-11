/**
 * Current Year
 */
document.getElementById("year").innerHTML = new Date().getFullYear();

/**
 * Menu
 */
$("a.menu-icon").on("click", function (event) {
  var w = $(".menu");

  w.css({
    display: w.css("display") === "none" ? "block" : "none",
  });
});

/**
 * Smooth Scroll
 */
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });
