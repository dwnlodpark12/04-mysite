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
(function(){
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

	function init() {
		var html, i;
		for(i in slides) {
			html = '<div class="slide">';
			html += '<img class="w-100" src="'+slides[i].src+'">';
			html += '<h1>'+slides[i].title+'</h1>';
			html += '</div>';
			$slides[i] = $(html);
			html = '<span class="pager">●</span>';
			$pagerWrap.append(html);
		}
		$pager = $pagerWrap.find(".pager");
		$pager.click(onPagerClick).eq(idx).addClass("active");
		slideInit();
		interval = setInterval(onNext, 3000);
	}

	function slideInit() {
		$slideWrap.html($slides[idx].clone());
	}

	$btnPrev.click(onPrev);
	$btnNext.click(onNext);
	$slideStage.mouseover(onHover);
	$slideStage.mouseleave(onLeave);

	function onHover() {
		clearInterval(interval);
	}

	function onLeave() {
		interval = setInterval(onNext, 3000);
	}

	function onPrev() {
		idx = (idx == 0) ? lastIdx : idx - 1;
		ani();
	}

	function onNext() {
		idx = (idx == lastIdx) ? 0 : idx + 1;
		ani();
	}

	function onPagerClick() {
		idx = $(this).index();
		ani();
	}

	function ani() {
		$pager.removeClass("active").eq(idx).addClass("active");
		$($slides[idx].clone()).appendTo($slideWrap).stop().animate({"opacity": 1}, 500, slideInit);
	}
	init();
})();
























/* 
  var $slideStage = $(".main-right .stage");
  var slideWrap = $(".main-right .slide-wrap");
  var txtWrap = $(".main-right .txt-wrap");
  var pagerWrap = $(".main-right .pager-wrap");
  var pager;
  var slides = []; 
  var idx = 0; 
  var lastIdx = slides.length - 1; 
  var interval; 


  function init() {
    var html,i;
    for (i in slides) {
      html = '<div class="slide">'
      html += '<img class="w-100" src="'+slides[i].src+'">';
      html += '</div>';
      $slides[i] = $(html);

      html = '<div class="txt-l">'
      html += '<div class="txt-title">'+slides[i].title+'</div>';
      html += '<div class="txt-categ">'+slides[i].categ+'</div>';
      html += '</div>';
      html += '<div class="txt-price">'+slides[i].price+'</div>';
      $txtWrap.append(html);

      html = '<span class="pager">●</span>'; 
       $pagerWrap.append(html); 
    }
    $pager = $pagerWrap.find(".pager");
    $pager.click(onPagerClick).eq(idx).addClass("active");
		slideInit();
		interval = setInterval(onNext, 3000); 
  }

  function slideInit() {
    $slideWrap.html($slides[idx].clone());
  }
  init();
})();
 */


