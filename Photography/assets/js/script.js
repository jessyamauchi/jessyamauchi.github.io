$(document).ready(function() {

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".genre-item1").offset().top},
        'slow');
});


$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".genre-item2").offset().top},
        'slow');
});

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".genre-item3").offset().top},
        'slow');
});


});