$(window).scroll(function (event) {
  if ($("header.nameplate").hasClass("in-not-shoved")) {
    $("#spinner").removeAttr("style");
  } else {
    var sdegree = 0;
    var st = $(this).scrollTop();

    sdegree = st;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#spinner").css({
      "-moz-transform": srotate,
      "-webkit-transform": srotate,
    });
  }
});
