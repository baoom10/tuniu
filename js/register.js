$(function() {

	//step1第一步表单验证
	var stepCall = false;
	var stepCode = false;
	var stepPhone = false;
	var stepCheckbox = false;
	var stepPwd = false;
	var regCall = /\d{11}/;
	var spaceNull = /\s/g;
	//手机号码验证
	$("#stepCall").focus(function() {
		if(!regCall.test($(this).val())) {
			$(".step1_1>td:last-child").html("手机注册，方便找回和修改密码").css("padding-left", "10px");
		}
		$(this).keyup(function() {
			if(regCall.test($(this).val())) {
				$(".step1_1>td:last-child").html("恭喜您，该手机可以注册").css("padding-left", "10px");
			} else {
				$(".step1_1>td:last-child").html("检查中...").css("padding-left", "10px");

			}
		});
	}).blur(function() {
		if(regCall.test($(this).val())) {
			stepCall = true;
			var stepCallDate = $(this).val();
			//			$.post('step1.php', {
			//				stepCallDate: stepCallDate
			//			}, function(text, status) {});
		} else {
			$(".step1_1>td:last-child").html("请正确输入手机号码").css("padding-left", "10px");
		}
	});
	$(".identify").empty().append('<input type="text" placeholder="请输入测试码" maxlength="4" id="stepCode" autofocus="autofocus"/ ><img src="bgCode.php" id="identify_refresh_img" />');
	$("#identify_refresh_click").click(function() {
		$.post("bgCode.php?r=" + Math.random(), function(data) {

			$(".identify").empty().append(
				'<input  type="text" placeholder="请输入测试码" maxlength="4" id="stepCode" autofocus="autofocus"/ ><img src="bgCode.php?r="' + Math.random() + 'id="identify_refresh_img" />');
		});
	});

	//手机验证码验证，代码生成图片
	$("#stepCode").focus(function() {

		$(".alertinfo").html("请先输入验证码").css("padding-left", "10px");

		$(this).keyup(function() {
			$(".alertinfo").html("检查中...").css("padding-left", "10px");
		});

	}).blur(function() {
		var stepCodeDate = $("#stepCode").val();
		
		$.post('codecheck.php', {
			'stepCodeDate':stepCodeDate
		}, function(text, status) {
			console.log(typeof text +text);
			if(text =="1") {
				stepCode = true;
				$(".alertinfo").empty();
				
			}else{
				$(".alertinfo").html("验证码错误...").css("padding-left", "10px");
				
			}

		});
	});
	var time; //总时间
	var count = 60;
	var timeless; //倒计时剩余时间
	$(".phone_get_code").click(function() {
		if(stepCall && stepCode) {
			$("#stepPhone").removeAttr("disabled");
			timeless = count;
			$(this).empty().html("请在" + timeless + "秒内输入验证码").css("width", "auto");
			time = setInterval(timefun, 1000);
			var stepPhoneDate = $("#stepPhone").val();
		} else {
			$(".step1_1>td:last-child").html("请先输入手机号码").css("padding-left", "10px");
			$(".alertinfo").html("请先输入验证码").css("padding-left", "10px");

		}
	});
	function timefun() {
		if(timeless == 0) {
			clearInterval(time);
			$(".phone_get_code").empty().html("获取动态码");
		} else {
			timeless--;
			$(".phone_get_code").html("请在" + timeless + "秒内输入验证码").css("width", "auto");
		}
	}
	$("#stepCheckbox").click(function() {
		$(this).attr("checked", "checked");
		if($(this).attr("checked") == "checked") {
			stepCheckbox = true;
			if(stepCall && stepCode && stepCheckbox) {
				$("#submit_1").css('background', '#FF8800');
			}
		}
	});
	$("#stepPhone").blur(function(){
		var stepPhoneDate=$(this).val();
	});
	$("#submit_1").click(function(e) {
		if(stepCall && stepCheckbox &&stepCode) {
			//$(".register_step2").css("display", "block").siblings().css("display", "none");
			$(".phone_register_inner").animate({
				"left": "-100%"
			}, 800);
		}
	});
	var regpwd = /^[a-zA-Z]\w{5,17}$/;
	$("#password").focus(function() {
		if(!regpwd.test($(this).val())) {
			$(this).next("span").html("以字符开头的，6到18位之间的密码，字符、数字或下划线");
		}
		$(this).keyup(function() {
			$(this).next("span").html("主人，请稍等，小的在查询中...");
		});
	}).blur(function() {
		var passwordDate=$(this).val();
		if(regpwd.test($(this).val())) {
			$(this).next("span").html("主人，你的密码通过了，记住哦");
		} else {
			$(this).next("span").html("boss,你的密码错误了啊！")
		}
	});
	$("#repassword").focus(function() {
		$(this).next("span").html("boss,艰巨的时刻到了，再输一遍密码");
		$(this).keyup(function() {

			$(this).next("span").html("boss,手不要抖！");
			if($(this).val() == $("#password").val()) {
				$(this).next("span").html("boss,你可以去拯救地球了！");
			}
		});

	}).blur(function() {
		if($(this).val() == $("#password").val()) {
			$(this).next("span").html("给你进入下个页面的机会");
			stepPwd = true;
		}
	});
	$("#submit_2").click(function(e) {
		if(e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		if(stepPwd) {
			$(".phone_register_inner").animate({
				"left": "-200%"
			}, 800);
		    $.ajax({
			type: "post",
			dataType: "json",
			url: 'step1.php',
			data: {"stepCallDate":stepCallDate,"passwordDate":passwordDate,"stepPhoneDate":stepPhoneDate},
			error:function(XMLHttpRequest, textStatus, errorThrown) {},
			success:function(data, status) {}
		    });	
		}
		
	});
});