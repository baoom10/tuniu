$(function(){
	
	
	//中国0086折叠情况
	function telGet(sel) {

		$(sel).click(function() {
			$(this).next(".addrs").find(".addsItem>ul>li").eq(0).addClass("itemActive").siblings().removeClass("itemActive");
			$(this).next(".addrs").find(".addsContent>ul").eq(0).css("display", "block").siblings().css("display", "none");

			if($(this).next(".addrs").css("display") == "block") {
				$(this).next(".addrs").css("display", "none");
				$(this).css("border-bottom-color", "#ccc");
			} else {
				$(this).next(".addrs").css("display", "block");
				$(this).css("border-bottom-color", "#FFF");
			}

			//			var liLength = $(".addsItem>ul>li").length;

			$(this).next(".addrs").find(".addsItem>ul>li").click(function() {
				//			  	 console.log($(this).html());
				console.log($(this).index());
				var index = $(this).index();
				$(this).css("border-bottom-color", "#FFF");
				//				console.log(index);
				$(this).addClass("itemActive").siblings().removeClass("itemActive");
				//				console.log($(".addsContent>ul").eq(index).html());
				//              console.log($(this).parent().parent().next(".addsContent").children("ul").eq(index).css("display"));
				if($(this).parent().parent().next(".addsContent").children("ul").eq(index).css("display") == "none") {
					$(this).parent().parent().next(".addsContent").children("ul").eq(index).css("display", "block").siblings().css("display", "none")
				}

			});

			$(this).next(".addrs").find(".addsContent>ul>li").click(function() {
				var htmltext = $(this).text();
				$(sel + ">span").html(htmltext);
				$(this).parent().parent().parent().css("display", "none");
				$(this).parent().parent().parent().prev().css("border-bottom-color", "#ccc");
			});
		});

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//中国0086电话获取
	telGet(".addd1");
	telGet(".addd2");	
	telGet(".addd3");	
	
	
	
	
	
	
	
});
