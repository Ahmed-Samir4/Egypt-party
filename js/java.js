/// <reference path="../typings/globals/jquery/index.d.ts" />
// sideNavbar
$('.openNav').click(function () {
    $('.sideNavbar').animate({ 'width': '250px' }, 100);
    $('.openNav').animate({ 'margin-left': '250px' })
    $('.homeContent').animate({ 'margin-left': '250px' }, 100)
})
$('.close').click(function () {
    $('.sideNavbar').animate({ 'width': '0px' }, 100);
    $('.openNav').animate({ 'margin-left': '0px' })
    $('.homeContent').animate({ 'margin-left': '0px' }, 100)
})
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 2000);
//     return false;
// });
// slider
$('.toggle').click(function (e) {
    $('.sliderContent').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
    // $(e.target).next().siblings().slideUp(500);
    // $('.sliderContent').slideUp(500,function () {

    // });
})

// timer
let countDownDate = new Date("Apr 28, 2024 21:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.days').html(`${days} Days`);
    $('.hours').html(`${hours} Hours`);
    $('.minutes').html(`${minutes} Minutes`);
    $('.seconds').html(`${seconds} Seconds`);

    //   if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    //   }
}, 1000);

//counter
$('textarea').keyup(function () {
    let temp = $('textarea').val().length;
    $('.counter').html(`${100 - temp}`);
    if (100 - temp < 0) {
        $('.counter').html('your available character finished');
        $('.remaining').html('');
    } else {
        $('.remaining').html(' Characyer Reamining');
    }
})