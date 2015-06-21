
var chatroom ={
    init : function () {
        var that = this;
        $('#s-sendMsg').click(function () {//增加信息
            var msg = $.trim($('#txt-reply').val());
            that.sendMsg(1,msg);
        });
        that.keyupAndTap();
        $('.addPicTool').soUploadImg({afterLoadBack:function (data) {
            window.console && console.log(data);
            that.sendMsg(2,data.src,'js/chatP.json');
        }});
    },
    sendUrl : 'js/chat.json',
    $msgList : $('#ul-chat-list'),
    keyupAndTap : function () {
        var that = this;
        $('#txt-reply').keyup(function() {
            var key = $(this).val();
            if (key!=='') {
                $('.p-send').addClass('p-sendMsg');
            }else{
                $('.p-send').removeClass('p-sendMsg');
            };
        });

        $('#s-sendAdd').click(function () {
            var $main = $('.all-main-chat');
            var $chat = $('#chat-reply');
            var $txt = $('#txt-reply');
            if ($chat.hasClass('showAddPic')) {
                $main.removeClass('all-main-chatA');
                $chat.removeClass('showAddPic');
                $txt.focus();
            }else{
                $main.addClass('all-main-chatA');
                $chat.addClass('showAddPic');
                $txt.blur();
            };
            that._scrollToButtom();
        });
    },
    sendMsg : function (type,msg,url) {//发送信息，并返回插入新信息
        var that = this;
        var $msgList = that.$msgList;
        var url = url||that.sendUrl;
        data =  type===1?{msg:msg}:{src:msg};
        window.console && console.log(data);
        //window.console && console.log(msg);
        if (msg!=='') {
            $.ajax({
                url : url,
                type : 'get',
                dataType : 'json',
                data : data,
                success : function (data) {
                    if (data.success) {
                        var msgs = that._contactMsg(data.data);
                        $msgList.append(msgs);
                        setTimeout(function(){
                            that._scrollToButtom();
                        },200);
                        $('#txt-reply').val('');
                        $('.p-send').removeClass('p-sendMsg');
                    }
                }
            });
        }
    },
    _contactMsg : function (data) {//组装信息
        var that = this;
        var content = data.type ==1?data.content:'<span class="imgauto s-contPic"><img src="'+data.content+'" alt=""></span>';//type为1，为文字信息，其他为图片信息
        var msgs = '<li class="li-chat li-tip"><span class="s-tip">'+that._switchTime(data.addTime)+'</span></li>';
        msgs += '<li class="li-chat li-msg-b"><span class="s-photo"><img class="img-photo" src="'+data.photoImg+'" alt="" /></span><div class="msgbox"><p class="p-msg">'+content+'<em class="em-xx"></em></p></div></li>';
        return msgs;
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
        var st = $('#ul-chat-list')[0].scrollHeight;
        $('body').scrollTop(st);
    }

}

$(function(){
    chatroom.init();
});