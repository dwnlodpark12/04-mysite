
$(window).scroll(function () {
	var height = $(document).scrollTop();

	console.log(height);

	/* if ( height > 0 ) {
		$(".phrase").find("p.wide").css({
			"transform":"translateX("+height+")",
			"trasition":"all 1s"
		});
	}
	else {
		
	} */
});

function log(str){
$(document).text(str);
}
