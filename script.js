const anchors = document.querySelectorAll('header a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

$(function(){

  $("#video-play").click(function(){
    var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
    $(this).parents('.js-video').html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay="1" frameborder="0" width="100%" height="500px" allowfullscreen></iframe>')
  });

});




$('.nav-btn').on('click', function(e) {
  e.preventDefault();
  $('.main-nav').toggleClass('main-nav-active');
})

$('.nav-list a').click(function() {
        if ( $('.main-nav').hasClass('main-nav-active')) {
         $('.main-nav').removeClass('main-nav-active');
         $('.nav-btn').removeClass('nav-btn-active')
        }
     }) 


$('.nav-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('nav-btn-active');
});


$(".tab-item").not(":first").hide();
$(".tab").click(function() {
  $(".tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
  $(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab-active");