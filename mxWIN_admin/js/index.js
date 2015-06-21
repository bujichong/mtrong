window.onload = function(){
	$('#loading-mask').fadeOut();
}

var onlyOpenTitle="欢迎使用";//不允许关闭的标签的标题

var soPro = soPro||{};
soPro.index = {
	init : function () {
		var me =this;
		me.openWinInMain();
	},
	openWinInMain : function () {
		var me =this;
		$('.s-newwin').click(function() {
			// var tabTitle = $(this).attr('title');
			// var tabTitle = tabTitle||$(this).text();
			var url = $(this).attr('rel');
			$('#mainHtmlIframe').attr('src',url);
			// me.addTab(tabTitle,url);
		});
	},
	_createFrame : function(url){
		var iframe = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
		return iframe;
	}
}


$(function(){
	soPro.index.init();
});



//弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}
