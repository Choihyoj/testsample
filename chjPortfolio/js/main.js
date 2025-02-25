gsap.registerPlugin(ScrollTrigger);
new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation:true,
    // anchors:['sec01','sec02','sec03','sec04'],
});
new fullpage('#fullpage2', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    // navigation:true,
    // anchors:['work01', 'work02', 'work03', 'work04', 'work05', 'work06', 'work07', 'work08'],
});
$(function(){
    $('.nav_menu').click(function(){
        $('body').toggleClass('on');
    })
    $('nav>ul>li:nth-child(3)').mouseenter(function(){
        $('.depth2').stop().fadeIn();
    })
    $('nav>ul>li:nth-child(3)').mouseleave(function(){
        $('.depth2').stop().fadeOut();
    })
    // slick slide
    $('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // dots:true,
      });
    // design tab
    $('.d_wrap .uiux').hide();
    $('.tab li').click(function(){
        let num = $(this).index();
        $('.tab li').removeClass('on');
        $(this).addClass('on');
        $('.d_wrap .graphics').hide();
        $('.d_wrap .graphics').eq(num).show();
    })
})
// gsap
// $(function(){
//     gsap.timeline({
//         scrollTrigger:{
//             scrub:3,
//             trigger:'#sec04',
//             start:'0% 0%',
//             end:'50% 0%',
//             // markers:true,
//         }
//     })
//     .fromTo('#sec04 .c_wrap .line',{width:0, ease:'linear',duration:3},{width:'90%',ease:'linear',duration:3},0)
// })