function updateOutput() {
	
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
	
	document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
	
	
	
}

$(".toggleBtn").hover(function() {
	
	$(this).addClass("highliBtn");
	
}, function() {
	
	$(this).removeClass("highliBtn");
	
});

$(".toggleBtn").click(function() {
	
	$(this).toggleClass("active");
	
	$(this).removeClass("highliBtn");
	
	var panelId = $(this).attr("id") + "Panel";
	
	$("#" + panelId).toggleClass("hidden");
	
	var numberOfActivePanels = 4 - $('.hidden').length;
	
	$(".panel").width(($(window).width() / numberOfActivePanels) - 10);
	
})

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('change keyup paste', function() {

	updateOutput();
	
});