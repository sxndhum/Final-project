window.addEventListener("scroll", function(){
    var navbar = document.querySelector("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
 })
$(document).ready(function(){
    $(".invisible-content").hide();

$(document).on('click', "#btn",function(){
    var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
    $(this).text(moreLessButton);
    $(this).parent(".box").find(".invisible-content").toggle();
    $(this).parent(".box").find(".visible-content").toggle();
});
});
//  var swiper = new Swiper(".mySwiper"); {
//      slidesPerView: 1;  
//       grabCursor: true;
//     loop: true;
//    pagination: {
//          el: ".swiper-pagination";
//       clickable: true;
//     };
//      navigation: {
//        nextEl: ".swiper-button-next";
//        prevEl: ".swiper-button-prev";
//      };
//   };
  