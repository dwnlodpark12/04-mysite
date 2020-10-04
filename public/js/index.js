/************* 네비게이션 **************/
$(".navi-wrap").find("li.navi").mouseenter(function() {
	$("ul.navi-lists").stop().slideDown();
});
$("li.navi").find("ul.navi-lists").mouseleave(function() {
	$(this).slideUp();
});
/************* dark-mode **************/






/************* .main-slide **************/




/************* text 슬라이드 **************/
$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

/************* play mouseAni **************/
/* $(".play-bgwrap").mouseomve(function(e) {
	$("img.play").css("transform","translateX(e.pageX)");
	$("img.play").css("transform","translateY(e.pageY)");
});
 */
/************* pop-hoverAni **************/
$("li.pop").hover(function() { //마우스 enter 했을 때 
	$(".img-hover").css("display","block");
},
function() { //마우스 leave했을 때
	$(".img-hover").css("display","none");
});