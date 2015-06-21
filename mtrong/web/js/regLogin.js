var mTrong = mTrong||{};
mTrong.regLogin = {
	init : function () {
		var t = this;
		t.regValidate();
	},
	regValidate : function () {
		$('#form-reg').soValidate({
			submit : function (form) {//默认验证成功提交submit事件
				form.submit();
				alert('提交成功！');
			},
			fail : function (form,failInputs) {
				var $failF = $(failInputs[0]);
				//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
				$failF.focus();
			}
		});
	}
};

$(function () {
	mTrong.regLogin.init();
});
