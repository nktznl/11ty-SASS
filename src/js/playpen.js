$(window).scroll(function (event) {
  $("#spinner").removeAttr("style");

  var sdegree = 0;
  var st = $(this).scrollTop();

  sdegree = st;
  var srotate = "rotate(" + sdegree + "deg)";
  $("#spinner").css({
    "-moz-transform": srotate,
    "-webkit-transform": srotate,
  });
});
