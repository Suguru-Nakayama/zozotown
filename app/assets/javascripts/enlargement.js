$(function() {

  $(".main-image").on("mouseenter", function(){
    var scale = 500 / 200;
    var zoom_image = $('.top_image').outerWidth();
    zoom_image_size = zoom_image * scale;

    $('.zoom_image').width(zoom_image_size);
    $(".zoom-area").addClass('active');
  });

  $(".main-image").on("mouseleave", function(){
    $(".zoom-area").removeClass('active');
  });


  $(".main-image").on("mousemove", function(e){
    var image_offset = $('.main-image').offset();
    var size_left = (e.pageX - image_offset.left - 100) + 'px';
    var size_top = (e.pageY - image_offset.top - 100 ) + 'px';

    // var size_content = e.pageXOffset;
    // if (size_left < 300 && 0 < size_left && 0 < size_top && size_top < 400){
    $(".image-grass").css("left", size_left);
    $(".image-grass").css("top", size_top);
    // }

    // var unleft = "-" + ((e.pageX - 260) * 2 ) + 'px';
    // var untop = "-" + ((e.pageY - 160) * 2 ) + 'px';
    // $( ".zoom_image" ).css( "margin-top" , untop );
    // $( ".zoom_image" ).css( "margin-left" , unleft );

  });
});
