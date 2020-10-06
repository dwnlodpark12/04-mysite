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
(function() {
	var slides = [
		{id: 0, src: '../img/main1-1.jpg', title: 'Red Watch', categ:'Digital', price:'45.50€'},
		{id: 1, src: '../img/main1-2.jpg', title: 'Sweater Print', categ:'Urban', price:'45.50€'},
		{id: 2, src: '../img/main1-3.jpg', title: 'Framed Poster', categ:'Vision', price:'45.50€'},
		{id: 3, src: '../img/main1-4.jpg', title: 'Trendy Bags', categ:'Creative', price:'45.50€'}
	];

	var $slideStage = $(".main-right .stage");
	var $slideWrap = $(".main-right .slide-wrap");
	var $pagerWrap = $(".main-right .pager-wrap");
	var $pager;				// 생성된 $(".wrapper6 .pager")
	var $slides = [];	// $(".slide")들 모두를 담아놓는 배열(필요할때 복사해서 가져다 쓴다)
	var idx = 0;											// 현재 화면에 보이는 slide의 index
	var lastIdx = slides.length - 1;	// $(".slide")들 중에 마지막 index
	var interval;											// setInterval을 담아놓는 변수
})();



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
	$(this).css({"left": x+"px", "top": y+"px"});
	console.log(x, y);
});
