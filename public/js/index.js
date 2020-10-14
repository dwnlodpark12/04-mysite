
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
	$(this).find(".switch").css("border-color","#fff"),
	$(this).find("img.sun-w").attr("src","../img/sun_white.svg"),
	$(this).find("img.moon-w").attr("src","../img/moon_white.svg"),
	$(".tab-bar").find(".bar").css("border-color","#fff"),
	$(".logo-wrap").find(".logo").attr("src","../img/logo-light.png"),
	$("body").addClass("dark");
	$(".header-bg").addClass("dark");

}

/************* .main-slide **************/
	var slides = [
		{id: 0, src: '../img/main1-1.jpg', title: 'Red Watch', categ:'Digital', price:'45.50€'},
		{id: 1, src: '../img/main1-2.jpg', title: 'Sweater Print', categ:'Urban', price:'45.50€'},
		{id: 2, src: '../img/main1-3.jpg', title: 'Framed Poster', categ:'Vision', price:'45.50€'},
		{id: 3, src: '../img/main1-4.jpg', title: 'Trendy Bags', categ:'Creative', price:'45.50€'}
	];





/************* text 슬라이드 **************/

$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	console.log(sctop);
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

/************* selection hover **************/

$("li.list").mouseenter(listEnter);
$("li.list").mouseleave(listLeave);

function listEnter(){
	$(this).find(".add-cart").stop().fadeIn(500);
} 
function listLeave(){
	$(this).find(".add-cart").stop().fadeOut(500);
} 


/************* play mouseAni **************/

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

/************* back-to-top **************/

$(window).scroll(function() {
	var sctop = $(document).scrollTop();

	if(sctop<=500) {
		$(".back-top").fadeOut(200);
	}
	else {
		$(".back-top").fadeIn(200);
	}
});


$(".back-top").click(onTopClick);
function onTopClick() {
	var sctop = $(document).scrollTop();

	$('html,body').animate({scrollTop:0},500);
	return
}