$(function() {
	//刷新背景图随机变化
	function bgrandom(num) {
		var random_bg = Math.floor(Math.random() * num + 1);
		var bg = 'url(img/bg_' + random_bg + '.jpg)';
		$(".bg").css("background-image", bg);

	}
	//	第一页腾讯   ,新浪  划入划出显示文字
	function otherTab(elem) {
		$(elem).hover(
			function() {
				$(this).siblings().css("display", "block");
			},
			function() {
				$(this).siblings().css("display", "none");
			}
		);
	}

	//国际登录普通登录切换
	//----------------------
	function interTab(sel) {
		$(".sname a").click(function() {
			$(".sname").css("display", "none");
			$(".phonelogin").css("display", "block");
		});

		$(sel).siblings(".tellogin").find("input").focus(function() {

			$(this).css("border-color", "#c4f269");
			$(sel).css("border-color", "#c4f269");
			if($(sel).next(".addrs").css("display") == "block")
				$(sel).css("border-bottom-color", "#FFF");

		}).blur(function() {
				$(this).css("border-color", "#ccc");
				$(sel).css("border-color", "#ccc");
				if($(sel).next(".addrs").css("display") == "block") {
					$(sel).css("border-bottom-color", "#fff")
				}
			}

		);
		$(".phonelogin a").click(function() {
			$(".sname").css("display", "block");
			$(".phonelogin").css("display", "none");

		});
	}
	//动态登录切换
	function tabs() {

		$(".tap2").click(function() {
			$(this).css({
					"background": "#43B413",
					"color": "#fff"
				})
				.siblings("li").css({
					"background": "#e6f7df",
					"color": "#89c86f"
				});
			$(this).find("b").addClass("trippl");
			$(".tap1").find("b").removeClass("trippl");
			if($(".form2").css("display") == "none") {
				$(".form2").css("display", "block");
				$(".form1").css("display", "none");
			}
			//$(".addrs").css("display","none");
		});
		$(".tap1").click(function() {
			$(this).css({
					"background": "#43B413",
					"color": "#fff"
				})
				.siblings("li").css({
					"background": "#e6f7df",
					"color": "#89c86f"
				});
			$(this).find("b").addClass("trippl");
			$(".tap2").find("b").removeClass("trippl");
			if($(".form1").css("display") == "none") {
				$(".form1").css("display", "block");

				$(".form2").css("display", "none");

			}

		});
	}
	//二维码登录页面-----
	function codeLogin() {
		$(".codes").on("click", function() {
			$(".addrs").hide();
			$(".addr").css("border-bottom-color", "#ccc");
			//通过判断按钮btn有没有active这个class名判断是否已经点击过
			if($(this).hasClass("active")) {
				//如果有了active，假设已经点击过了
				//执行你的代码
				$(".codeLogin").css("z-index", 200);
				$(this).removeClass("code").addClass("code2");
				$('.tripp2').show();
				//把active去掉
				$(this).removeClass("active");
				$(".back").click(function() {
					$(".codeLogin").css("z-index", -200);
					$(".codes").removeClass("code2").addClass("code");
					$('.tripp2').hide();
					$(".codes").addClass("active");

				});
			} else {
				//没有active，假设还没有点击过
				//执行你的代码
				$(".codeLogin").css("z-index", -200);
				$(this).removeClass("code2").addClass("code");
				$('.tripp2').hide();
				$(this).addClass("active");
			}
		})

	}
	//	第一页腾讯   ,新浪  划入划出显示文字
	otherTab('.tx');
	otherTab('.xl');
	//刷新背景图随机变化
	bgrandom(5);

	//国际登录普通登录切换
	interTab(".addd1");
	interTab(".addd2");
	//动态登录切换 
	tabs();
	//二维码登录
	codeLogin();
});