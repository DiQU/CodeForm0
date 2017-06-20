$(document).ready(function(){
  $("#go-top").click(function(e){
    e.preventDefault();
    var target = $(e.currentTarget).attr("href");
    var offset = $(target).offset();
    $("html, body").animate({scrollTop: offset.top});
  });

  $(document).scroll(function(e){
    var $header = $("header");
    var scrollTop = $(document).scrollTop();
    console.log($(document).scrollTop());
    if(scrollTop > 0){ $header.addClass("fixed");}
  })
});
