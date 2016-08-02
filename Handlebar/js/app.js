$(function(){
	var source = $("#view-template").html();
	
	var template = Handlebars.compile(source);
	
	var context = {
		color: "Red"
	};
var html = template(context);	

$(document.body).html(html);
});
