/************* 네비게이션 **************/





/************* .main-slide **************/




/************* text 슬라이드 **************/
$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

/************* play mouse hover-ani **************/
$(".play-bgwrap").mousehover(function(e) {
	$("img.play").css("transform","translateX(-30%)");
	$("img.play").css("transform","translateY(30%)");
});
