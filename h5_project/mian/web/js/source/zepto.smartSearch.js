;(function () {

$.fn.smartSearch = function (o) {
    var o = $.extend({
        url : null,
        keyString : 'key'
    },o||{});
    var _self = $(this);
    var smart = {
        init : function () {//初始化
            var me = this;
            me.appendHtml();//初始化添加smart html
            _self.on('focus',function () {//focus时显示smart层
                me.target = $(this);
                me.placeholder = $(this).attr('placeholder');
                me.url =o.url || $(this).attr('rel');
                me.showSmart();//显示智能搜索层
            });
            me.smartKeyUp();//输入框输入时，根据url联想列表
            me.okAndBack();//点击确认与点击返回
        },
        target : null,
        placeholder : null,
        url : null,
        appendHtml : function () {//插入smart html
            var smartHtml = '<div class="smartBox"><div class="smartHead"><span class="a-headBack a-smartBack">返回</span><span class="s-smartTxt"><input type="text" class="txt txt-smartKey" name="txt" /></span><span class="a-headOk a-smartOk">确定</span></div><div class="smartCont"><ul class="ul-smart"></ul></div></div>';
            if ($('.smartBox').length==0) {
                $('body').append(smartHtml);
            };
        },
        showSmart : function () {
            var me = this;
            if($('body').height()>$(window).height()){
                $('body').addClass('body-fixed');
            }
            $('.smartBox').addClass('smartBoxIn');
            $('.txt-smartKey').attr('placeholder',me.placeholder).focus();
        },
        clearSmart : function  () {
            $('body').removeClass('body-fixed');
            $('.smartBox').removeClass('smartBoxIn');
            $('.txt-smartKey').val('');
            $('.ul-smart').html('');
        },
        smartKeyUp : function () {
            var me = this;
            $('.txt-smartKey').on('keyup',function () {
                var v = $(this).val();
                $.ajax({
                    type : 'GET',
                    url : me.url+'?'+o.keyString+'='+v,
                    success : function (data) {
                        if (data.success) {
                            var listHtml = '';
                            $.each(data.data,function (k,v) {
                                listHtml += '<li class="li-smart"><span class="a-smart">'+v+'</span></li>'
                            });
                            $('.ul-smart').html(listHtml);
                            $('.li-smart').on('tap',function () {
                                var v = $(this).text();
                                me.target.val(v);
                                me.clearSmart();
                                return false;
                            });
                        };
                    }
                });
            });
        },
        okAndBack : function () {
            var me = this;
            $('.a-smartBack').on('tap',function () {
                me.clearSmart();
            });
            $('.a-smartOk').on('tap',function () {
                var v = $('.txt-smartKey').val();
                me.target.val(v);
                me.clearSmart();
            });
        }
    }

    smart.init();
    return $(this);
}

})(window.Zepto);