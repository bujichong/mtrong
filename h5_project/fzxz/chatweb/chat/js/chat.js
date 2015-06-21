var chatroom = chatroom || {};
chatroom.justso ={
	init : function () {
		var that = this;
		var getUrl = chatroom.getUrl;
		var sendUrl = chatroom.sendUrl;
		var always = null;
		that.rowLetterNum = Math.floor($('#txt-reply').width()/14.4*2)-1;
		$(window).resize(function () {
			that.rowLetterNum = Math.floor($('#txt-reply').width()/14.4*2)-1;
		});

		that.getMsg(getUrl);
		that.setAutoBottom();
		that.sendContLimite();
		that._scrollToButtom();
		//that.closeInterTip();
		always = setInterval(function () {//巡检获取信息
			that.getMsg(getUrl);
		},5000);

		$('#s-send').click(function () {//增加信息
			that.sendMsg(sendUrl,function () {
				clearInterval(always);//获取成功后，重置巡检
				always = setInterval(function () {
					that.getMsg(getUrl);
				},5000);
			});
		});
	},
	$msgList : $('#ul-chat-list'),
	sendW : 0,
	lastChatRecordId : null,
	autoBottom : true,
	setAutoBottom : function () {
		var that = this;
		$('#chat-title .s-title').click(function () {
			if ($(this).hasClass('s-auto')) {
				$(this).removeClass('s-auto');
				$('#img-scroll').attr('src','images/chat/icon-unscroll.png');
				that.autoBottom = false;
			}else {
				$(this).addClass('s-auto');
				$('#img-scroll').attr('src','images/chat/icon-scroll.png');
				that.autoBottom = true;
			}
		});
		$('#txt-reply').focus(function () {
			that._scrollToButtom();
			//$('#chat-title').addClass('fixed');
		});
//		$('#s-send').click(function () {
//			$('#chat-title').removeClass('fixed');
//		});
	},
	sendContLimite : function () {
		var that = this;
		$('#txt-reply').keyup(function () {
			var val = $.trim($(this).val());
			if (val.length>100) {
				$(this).val(val.slice(0,100));
			}
			if (val.replace(/[^\x00-\xff]/g,"aa").length>that.rowLetterNum) {
				$('#chat-list').addClass('anyrows');
				$('#chat-reply').addClass('anyrows');
				$(this).addClass('anyrows');
			}else {
				$('#chat-list').removeClass('anyrows');
				$('#chat-reply').removeClass('anyrows');
				$(this).removeClass('anyrows');
			}
		});
	},
	closeInterTip : function () {
		$('.inter-mask').click(function () {
			$(this).fadeOut();
			$('#chat-title .s-photo').css({'opacity':'1'});
		});
		setTimeout(function () {
			$('.inter-mask').fadeOut();
			$('#chat-title .s-photo').css({'opacity':'1'});
		},8000);
	},
	getMsg : function (url,callback) {//获取信息
		var that = this;
		var lastCId = that.lastChatRecordId;
		var url = (lastCId != null)?(url+'?lastChatRecordId='+lastCId):url;
		$.getJSON(url,function (data) {
			if (data.success&&data.data.length>0) {
				that._contactMsg(data.data);
				that._scrollToButtom();
				callback&&callback();
				//window.console && console.log('get message success');
			}else {
				that._chatErr(data);
			}
		});
	},
	sendMsg : function (url,callback) {//发送信息，并返回插入新信息
		var that = this;
		var lastCId = that.lastChatRecordId;
		var url = (lastCId != null)?(url+'?lastChatRecordId='+lastCId):url;
		var msg = $.trim($('#txt-reply').val());
		//window.console && console.log(msg);
		if (msg!=='') {
			that.allowSend = false;
			$.ajax({
				url : url,
				type : 'get',
				dataType : 'json',
				data : {msg : msg},
				success : function (data) {
					if (data.success&&data.data.length>0) {
						that._contactMsg(data.data);
						that._scrollToButtom();
						callback&&callback();
						that._scrollToButtom();
						//window.console && console.log('send message success');
					}else {
						that._chatErr(data);
					}
				}
			});
			$('#txt-reply').val('').removeClass('anyrows');
			$('#chat-list').removeClass('anyrows');
			$('#chat-reply').removeClass('anyrows');
		}
	},
	_contactMsg : function (data) {//组装信息
		var that = this;
		var me = chatroom.memberId; //当前用户
		var msgs = '';
		var dataLen = data.length;
		$.each(data,function (i,v) {
			var $li = '';
			(i == (dataLen-1))&&(that.lastChatRecordId = v.chatRecordId);//设置lastChatRecordId
			if (v.contentType == 2) {
				$li = '<li class="li-chat li-tip"><span class="s-tip">'+v.content+'</span></li>';
			}else {
				var tCls = v.memberId === me?'li-msg-b':'li-msg-a';
				var srcImg = (v.avatarImageFileId=='')?'http://cdn21.ehaier.com/file/5362002b58e17969ff9a74ec.png':v.avatarImageFileId;
				$li = '<li class="li-chat '+tCls+'"><span class="s-photo"><img class="img-photo" src="'+srcImg+'" alt="" /></span><div class="msgbox"><p class="p-abs"><span class="s-name">'+v.userName+'</span><span class="s-date">'+that._switchTime(v.addTime)+'</span></p><p class="p-msg">'+v.content+'<em class="em-xx"></em></p></div></li>';
			}
			msgs += $li;
		});
		that.$msgList.append(msgs);
		var moreLen = $('.li-chat').length-100;
		if (moreLen>0) {
			$('.li-chat:lt('+moreLen+')').remove();
		}
	},
	_chatErr : function (data) {
		if (data.message === '1') {
			alert('对不起，您尚未登录，请登录后进入聊天室！');
			setTimeout(function () {
				window.location.href='/mobile/member/toMemberLogin.html';
			},1000);
		};
		if (data.message === '2') {
			alert('对不起，您已被系统禁止发言！');
		};
		if (data.message === '3') {
			alert('对不起，服务异常，消息发送失败，请尝试刷新页面！');
			setTimeout(function () {
				window.location.href=window.location.href;
			},3000);
		}
	},
	_switchTime : function (time) {//转换时间戳为标准时间格式
		var time = new Date(time);
		var year = time.getFullYear();
		var month = time.getMonth()+1;
		var date = time.getDate();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		//return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
		return month+"-"+date+" "+hour+":"+minute+":"+second;
	},
	_scrollToButtom : function () {//滚动到底部
		var that = this;
		var $ul =that.$msgList;
		if (that.autoBottom) {//开启自动滚屏
			var st = $ul[0].scrollHeight;
			$ul.scrollTop(st);
		}
	}
	

}




$(function(){
	chatroom.justso.init();
});