
/* 
function onScroll() {
	$(".phrase").find("p.wide").css({
		"transform": "translateX(pageY)",
		"transition": "all 2s"
	});
}

$(window).scroll(onScroll);
 */

var wheelY = $(window).height();

function onScroll() {
	$(".phrase").find("p.wide").css({
		"transform": "translateX(wheelY)",
		"transition": "all 2s"
	});
}

$(window).scroll(onScroll);