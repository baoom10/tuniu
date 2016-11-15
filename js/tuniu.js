$(function(){
//头部广告登录一次隐藏
$("#top_ad").delay(2000).slideUp(2000);
//	头部导航标签切换 
$("#top_item_right>li").hover(
	function(){
		$(this).find(".inner").css("display","block");
	},
	function(){
		$(this).find(".inner").css("display","none");
	}
);
$(".order_form ,.site_map").hover(
	function(){$(this).find("b").css("background"," url(img/header_v3.png) -15px -4px no-repeat")},
	function(){$(this).find("b").css("background"," url(img/header_v3.png) -5px -5px no-repeat")}
	
);
	
	
	
	
	
	
	
	
	
	
console.log($(".code").css('width'))	;
	
	$(".code").mouseover(function(){console.log($(".code").css('width'))	});
	
})
