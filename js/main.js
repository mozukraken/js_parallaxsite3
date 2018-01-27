$(function() {
  $('#container').mousemove(function(e) {
    console.log(e.clientX, e.clientY);
    var cx = $(this).width() / 2;
    var cy = $(this).height() / 2;
    var dx = e.clientX - cx;
    var dy = e.clientY - cy;

    $('#box1').css('left', cx + dx * 1.1);
    $('#box2').css('left', cx + dx * 1.2);
    $('#box3').css('left', cx + dx * 1.4);
    $('#box1').css('top', cy + dy * 1.3);
    $('#box2').css('top', cy + dy * 1.6);
    $('#box3').css('top', cy + dy * 1.9);
  });
});
