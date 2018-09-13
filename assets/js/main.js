$(document).ready(function() {

    // Get Started

});

/* active link */
$("#menu li").on("click", function() {
    $("#menu li").removeClass("active");
    $(this).addClass("active");
});