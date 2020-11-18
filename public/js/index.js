/************* 전역변수 **************/
var sctop;

/************* 네비게이션 **************/
$("li.navi").mouseenter(onEnter);
$("li.navi").mouseleave(onLeave);

function onEnter() {
	$(this).find(".navi-lists").stop().slideDown();
}

function onLeave() {
	$(this).children(".navi-lists").stop().slideUp();
}


/* 
$("li.navi-list").mouseenter(onSubEnter);
$("li.navi-list").mouseleave(onSubLeave);

function onSubEnter() {
	$(this).find("ul.sub-navi-wrap").stop().fadeIn(200);
}

function onSubLeave() {
	$(this).children("ul.sub-navi-wrap").stop().fadeOut(200);
}
 */

/************* dark-mode **************/
$(".dark-mode").click(onDarkMode);

function onDarkMode() {
	$(this).find("a.dot").toggleClass("dark");


	$(this).find("img.sun-w").attr("src","../img/sun_white.svg");
	$(this).find("img.moon-w").attr("src","../img/moon_white.svg");
	$(".logo-wrap").find(".logo").attr("src","../img/logo-light.png");
	$("body").addClass("dark");
	$(".header-bg").addClass("dark"); 
	$(".switch").addClass("dark"); 
	$(".bar").addClass("dark"); 
	$(".main-wrapper").addClass("dark"); 
	$(".main-left").addClass("dark"); 
	$("ul.navi-lists").addClass("dark"); 
	$("ul.sub-navi-wrap").addClass("dark"); 
	$(".pager").addClass("dark"); 
	$(".active").addClass("dark"); 
	$(".phrase").find("p").addClass("dark"); 
	$(".title-wrap").addClass("dark"); 
	$(".pop-wrapper h2").addClass("dark"); 
	$("li.pop").addClass("dark"); 
	$(".arrows").find("img.arrow").attr("src","../img/arrow_white.svg");
	$(".banner-wrap").addClass("dark"); 
	$(".bann-left").addClass("dark"); 
	$(".bann-right").find(".dot").addClass("dark"); 
	$(".f-right").addClass("dark"); 
	$(".f-right").find("li.circle").addClass("dark"); 
	$(".back-top").addClass("dark"); 
	$(".f-left").find("img.f-logo").attr("src","../img/footer-logo-light.png");
	
	
}


/************* .main-slide **************/
(function(){
	var slides = [
		{id: 0, src: '../img/main1-1.jpg', title: 'Red Watch', categ:'Digital', price:'45.50€'},
		{id: 1, src: '../img/main1-2.jpg', title: 'Sweater Print', categ:'Urban', price:'45.50€'},
		{id: 2, src: '../img/main1-3.jpg', title: 'Framed Poster', categ:'Vision', price:'45.50€'},
		{id: 3, src: '../img/main1-4.jpg', title: 'Trendy Bags', categ:'Creative', price:'45.50€'}
	];
	
	
		var $slideStage = $(".main-right .stage");
		var $slideWrap = $(".stage .slide-wrap");
		var $pagerWrap = $(".stage .pager-wrap");
		var $pager;
		var $slides = []; 
		var idx = 0; 
		var lastIdx = slides.length - 1; 
		var interval; 
	
	
		function init() {
			var html,i;
			for (i in slides) {
				html = '<div class="slide">'
				html += '<img class="w-100" src="'+slides[i].src+'">';
				html += '<div class="txt-wrap">'
				html += '<div class="txt-l">'
				html += '<div class="txt-title">'+slides[i].title+'</div>';
				html += '<div class="txt-categ">'+slides[i].categ+'</div>';
				html += '</div>'; /* /.txt-l */
				html += '<div class="txt-price">'+slides[i].price+'</div>';
				html += '</div>';	/* /.txt-wrap */
				html += '</div>';  /* /.slide */
				$slides[i] = $(html);
	
				html = '<span class="pager"></span>'; 
				 $pagerWrap.append(html); 
				}
	
			$pager = $pagerWrap.find(".pager");
			$pager.click(onPagerClick).eq(idx).addClass("active");
			slideInit();
			interval = setInterval(onInterval, 4000);
		}
	
		function slideInit() {
			$slideWrap.html($slides[idx].clone());
		}
	
		$slideStage.mouseover(onHover);
		$slideStage.mouseleave(onLeave);
	
		function onHover() {
			clearInterval(interval);
		}
		function onLeave() {
			interval = setInterval(onInterval, 4000);
		}
	
	
		function onPagerClick() {
			idx = $(this).index();
			ani();
		}
	
		function onInterval() {
			idx = (idx == lastIdx) ? 0 : idx + 1;
			ani();
		}
	
		function ani() {
			$pager.removeClass("active");
			$pager.eq(idx).addClass("active");
	
			$($slides[idx].clone()).appendTo($slideWrap).addClass("active").animate({"opacity":1},500, slideInit);
	/* 		$(".txt-wrap").removeClass("active")
			$(".txt-wrap").eq[idx].addClass("active") */
			/* .css({"position": "absolute", "top":0, "opacity": 0})) */
		}
		init();
	})(); 





/************* text 슬라이드 **************/

$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	console.log(sctop);
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

/************* selection hover **************/

/*
$("li.list").mouseenter(listEnter);
$("li.list").mouseleave(listLeave);

function listEnter(){
	$(this).find(".add-cart").stop().fadeIn(500);
} 
function listLeave(){
	$(this).find(".add-cart").stop().fadeOut(500);
} 
*/

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
	sctop = $(document).scrollTop();
	if(sctop<=500) {
		$(".back-top").stop().fadeOut(200);
	}
	else {
		$(".back-top").stop().fadeIn(200);
	}
});

$(".back-top").click(onTopClick);
function onTopClick() {
	$('html,body').animate({scrollTop:0},500);
}
