$(document).ready(function(){
$("#news").hide();
$("#news").fadeIn(500);
// tabs secon page
$("ul#tabs li").click(function(){
	event.preventDefault();
$("ul#tabs li").removeClass("selected");
$(this).addClass("selected");
});
});