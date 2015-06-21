var YMG =  YMG ||{};
YMG.runing = {
	init :function () {
		var t = this;
		t.clickPop();
		t.formValidate();
		t.navCurr();
		t.initDateAndTime();//初始化日历控件
		t.initDropGoto();//初始化下拉转跳
		t.extendChildTr();//点击展开子列表
		t.schemeChoose();
		$T.updateWinWH();//实时更新页面宽高数据
	},
	navCurr : function () {
		$T.popTip({
			tips : [{content : '欢迎进入一品云管理系统！',type : 'success'}]
		})
		var $li = $('.ul-sidenav li');
		var now = $T.getCookie('navnow')||0;
		$li.eq(now).addClass('now');
		$li.click(function () {
			var ix = $li.index(this);
			var url = $(this).find('a').attr('href');
			$T.setCookie('navnow',ix);
			window.location.href=url;
			return false;
		});

	},
	clickPop : function () {//绑定显示弹窗
		$('.fn-popBtn').clickPop({optAll : YMG.popOpt});
		$('.s-popCancel,.s-popClose').click(function () {
			YMG.popOpt.$pop&&YMG.popOpt.$pop.removePop();//隐藏弹窗
		})
	},
	formValidate : function () {//表单验证
		var t = this;
		$('.form-item').soValidate({//验证登录弹窗里的表单
			//inputPar :  null,
			submit : function (form) {//默认验证成功提交submit事件
				var opt = YMG.popOpt;
				var oAim = form.attr('rel');
				if (oAim) {
					var aimArr = oAim.split('.');
					var oAimLen = aimArr.length;
					for (i = 0; i < oAimLen; i++) {
						opt = opt[aimArr[i]];
					};
					var diyResult = opt.validate?opt.validate(form):true;
					if (diyResult) {//如果通过了自定义的其他验证，则提交表单数据
						if (opt.async) {
							opt.afterSend&&opt.afterSend();
							form.submit();
						}else{
							t._ajaxForm(form,opt.afterSend);//执行自定义提交后事件
						};
					}
				}else{
					t._ajaxForm(form);
				}


				//form.submit();
				//alert('验证通过，提交登录！');
			},
			fail : function (form,failInputs) {//验证失败
				var $failF = $(failInputs[0]);
				//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
				$failF.focus();
			}
		});
	},
	_ajaxForm : function (form,callback) {
		var formVals = form.serializeObject();
		var url = form.attr('action');
		var dataSubmit = form.data('submit');
		if (typeof(dataSubmit)=='string') {
			window.console && console.error('传递的data-opt格式不是标准的json格式，请注意引号的正确使用,参考： data-opt=\'{id:1,name:"嘻嘻哈哈"}\'');
		};
		//window.console && console.log(dataSubmit);
		window.console && console.log(url,formVals);
		YMG.popOpt.$pop&&YMG.popOpt.$pop.removePop();//隐藏弹窗
		$.reqUrlEx($.extend({
			url : url,
			data : formVals,
			success : function (rst) {
				form.clearForm();
				if (callback) {
					callback(rst);
				}
			}
		},dataSubmit||{}));
	},
	extendChildTr : function () {
		$('.fn-extend').click(function () {
			var aim = '.tr-'+$(this).attr('href');
			$(aim).toggle();
			if ($(aim+':hidden').length) {
				$(this).text('展开');
				$(this).parents('tr').removeClass('tr-ex');
			}else{
				$(this).text('收缩');
				$(this).parents('tr').addClass('tr-ex');
			}

			return false;
		});
	},
	initDateAndTime : function () {//初始化日期和时间下拉框
		if ($('.hk-date').length) {
			$('.hk-date').addClass('Wdate').each(function(){
				window.console && console.log(this);
				$(this).click(function(){
				window.console && console.log(this);
					var data = $T.data(this)||{};
					data = $.extend({dateFmt:'yyyy-MM-dd',readOnly:true},data);
					window.console && console.log(data);
					WdatePicker(data);
				});
			});
		};
		if ($('.hk-time').length) {
			$('.hk-time').addClass('Wdate').css('width',140).each(function(){
				$(this).click(function(){
					var data = $T.data(this)||{};
					data = $.extend({dateFmt:'yyyy-MM-dd HH:mm',readOnly:true},data);
					WdatePicker(data);
				});
			});
		};
	},
	initDropGoto : function () {//初始化下拉转跳
		$('.hk-goto').openSelVal('self');
	},
	schemeChoose : function () {
		var $one = $('#ul-schemeList .s-one');
		if ($one.length) {
			$('#ul-schemeList .s-one').click(function () {
				$one.removeClass('s-selected');
				$(this).addClass('s-selected');
			})
		}
	}

}

$(function () {
	YMG.runing.init();
})
