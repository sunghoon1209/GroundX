
$(window).scroll(() => {
    // 스크롤 이동시 헤더메뉴 변경
    if ($(this).scrollTop() > 10) {
        $("header").css("background-color", "#fff");
        $("ul.nav_list").css("color", "#000");
        $("ul.nav_list").css("color", "#000");
        $(".logo a img").attr("src", "./images/logo-c.png");

    } else {
        $("header").css("background-color", "");
        $("ul.nav_list").css("color", "");
        $(".logo a img").attr("src", "./images/logo-b.png");


    };

    if ($(this).scrollTop() > 2200) {
        $(".companyIn").css("color", "#38A8FA");

    } 
    if ($(this).scrollTop() > 3300) {
        $(".companySec").css("color", "#38A8FA");
        $(".companyIn").css("color", "");
    } 

    if ($(this).scrollTop() < 3300) {
        $(".companySec").css("color", "");
        
    } 
    if ($(this).scrollTop() < 2200) {
        $(".companyIn").css("color", "");

    } 


});

// // 스크롤 위치확인용
window.addEventListener('scroll', function () {
    console.log(window.scrollY)
});

// 클릭시 스크롤 이동
$(document).ready(function($) {

    $(".companyIn").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$("#missionVision").offset().top}, 500);

    });
    $(".companySec").click(function(event){         

            event.preventDefault();

            $('html,body').animate({scrollTop:$("#service").offset().top}, 500);

    });

    $(".logo").click(function(event){         

        event.preventDefault();

        $('html,body').animate({scrollTop:$("#mainPage").offset().top}, 0.1 );

  });
// .frame 상자에 마우스올릴때 설명
$(".frame1").mouseover(function(){
    $(".unactive01").addClass("textbox");
    $(".unactive01").removeClass("unactive01");   
});

$(".frame1").mouseout(function(){
    $(".textbox").addClass("unactive01");
    $(".textbox").removeClass("textbox");   
});
// 
$(".frame2").mouseover(function(){
    $(".unactive02").addClass("textbox");
    $(".unactive02").removeClass("unactive02");   
});

$(".frame2").mouseout(function(){
    $(".textbox").addClass("unactive02");
    $(".textbox").removeClass("textbox");   
});
// 
$(".frame3").mouseover(function(){
    $(".unactive03").addClass("textbox");
    $(".unactive03").removeClass("unactive03");   
});

$(".frame3").mouseout(function(){
    $(".textbox").addClass("unactive03");
    $(".textbox").removeClass("textbox");   
});
// 
});