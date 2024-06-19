$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#7e0000");
		$(this).css("color", "#000");
	},function() {
		$(this).css("background-color", "#000");
		$(this).css("color", "#7e0000");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#7e0000");
		$(this).css("color", "#000");
	}, function() {
		$(this).css("background-color", "#000");
		$(this).css("color", "#7e0000");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
