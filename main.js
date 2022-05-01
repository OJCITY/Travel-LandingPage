$(document).ready(function () {
  //show hide button scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 20) {
      $(".scrollTo-Top").fadeIn();
    } else {
      $(".scrollTo-Top").fadeOut();
    }
  });

  //smooth scrolling to top
  $(".scrollTo-Top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});
