// // Set the date we're counting down to
// var countDownDate = new Date("Feb 17, 2022 19:00:00").getTime();
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//     // Get today's date and time
//     var now = new Date().getTime();
//
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
//
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//     // Display the result in the element with id="demo"
//     document.getElementById("countdownWH2").innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";
//
//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);

$(function () {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2022/02/17 19:00:00').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span class="h1 font-weight-bold">%D</span> Day%!d'
            + '<span class="h1 font-weight-bold">%H</span> Hr'
            + '<span class="h1 font-weight-bold">%M</span> Min'
            + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });
    //
    // /* =========================================
    //     COUNTDOWN 2
    //  ========================================= */
    // $('#clock-a').countdown('2021/1/10').on('update.countdown', function(event) {
    //     var $this = $(this).html(event.strftime(''
    //         + '<span class="h1 font-weight-bold">%w</span> week%!w'
    //         + '<span class="h1 font-weight-bold">%D</span> Days'));
    // });
    //
    // /* =========================================
    //     COUNTDOWN 3
    //  ========================================= */
    // $('#clock-b').countdown('2021/1/1').on('update.countdown', function(event) {
    //     var $this = $(this).html(event.strftime(''
    //         + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div>'
    //         + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Hr</div>'
    //         + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Min</div>'
    //         + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'));
    // });
    //
    //
    // /* =========================================
    //     COUNTDOWN 4
    //  ========================================= */
    // function get15dayFromNow() {
    //     return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
    // }
    //
    // $('#clock-c').countdown(get15dayFromNow(), function(event) {
    //     var $this = $(this).html(event.strftime(''
    //         + '<span class="h1 font-weight-bold">%D</span> Day%!d'
    //         + '<span class="h1 font-weight-bold">%H</span> Hr'
    //         + '<span class="h1 font-weight-bold">%M</span> Min'
    //         + '<span class="h1 font-weight-bold">%S</span> Sec'));
    // });
    //
    // /* =========================================
    //     CALL TO ACTIONS FOR COUNTDOWN 4
    //  ========================================= */
    // $('#btn-reset').click(function() {
    //     $('#clock-c').countdown(get15dayFromNow());
    // });
    // $('#btn-pause').click(function() {
    //     $('#clock-c').countdown('pause');
    // });
    // $('#btn-resume').click(function() {
    //     $('#clock-c').countdown('resume');
    // });

});