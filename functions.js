// function parallax_height() {
//     var scroll_top = $(this).scrollTop();
//     var sample_section_top = $(".sample-section").offset().top;
//     var header_height = $(".sample-header-section").outerHeight();
//     $(".sample-section").css({ "margin-top": header_height });
//     $(".sample-header").css({ height: header_height - scroll_top });
// }
// parallax_height();
// $(window).scroll(function() {
//     parallax_height();
// });
// $(window).resize(function() {
//     parallax_height();
// });

const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * .3 + "px"
        bac
    }

)