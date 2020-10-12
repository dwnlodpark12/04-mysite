/************* 네비게이션 **************/
$("li.navi").mouseenter(onEnter);
$("li.navi").mouseleave(onLeave);

function onEnter() {
	$(this).find(".navi-lists").stop().slideDown();
}

function onLeave() {
	$(this).children(".navi-lists").stop().slideUp();
}

/************* dark-mode **************/
$(".dark-mode").click(onDarkMode);

function onDarkMode() {
	$(this).find("a.dot").css({
		"left":"26px",
		"background-color":"inherit",
		"border":"1px solid #fff"
});
	$("body").toggleClass("dark-mode");
}

/************* .main-slide **************/




/************* text 슬라이드 **************/
$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	console.log(sctop);
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

$("li.pop").mouseenter(popEnter);
$("li.pop").mouseleave(popLeave);

function popEnter() {
	$(this).find(".img-hover").css("display", "block");
	$(this).find(".img-hover img").css("transform");
	$(this).find(".img-hover img").css("transform", "scaleX(1)");
}
function popLeave() {
	$(this).find(".img-hover img").css("transform", "scaleX(1.3)");
	$(this).find(".img-hover").css("display", "none");
}



$(".play-wrap .play").mousemove(function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var wid = $(this).outerWidth() / 2;
	var hei = $(this).outerHeight() / 2;
	var tarX = x - wid;
	var tarY = y - hei;
	if(tarX > -300 && tarX < 300 && tarY > -150 && tarY < 150) {
		$(this).css("transform", "translate("+tarX+"px,"+tarY+"px)");
	}
	else {
		$(this).css("transform", "translate(0, 0)");
	}
});
