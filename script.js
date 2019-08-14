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

 function vidplay() {
       var video = document.getElementById("video");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "";
       } else {
          video.pause();
          button.textContent = "";
       }
    }


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

$('button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('active-btn');
});