
$(window).scroll(function () {
	var sctop = $(document).scrollTop();
	if(sctop > 100) {
		$(".wide").css("transform", "translateX(-"+sctop+"px)");
	}
});

