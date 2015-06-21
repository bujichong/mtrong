
;(function () {

$.fn.soUploadImg = function (o) {
    var o = $.extend({
        accept : 'image',//接收类型，默认为image，其实也只做了img  :)，其他类型自己改
        quality : 0.7, //base64图片质量 0-1，默认0.7
        afterLoadBack : function (backData) { //加载后执行函数，backData里有需要的返回参数
                // backData = {
                // me : me.target,//指向当前对象
                // results : results,//返回所有上传后返回数据
                // src : img.src,//图片src
                // size : size,//图片大小
                // width : img.width,//图片实际宽
                // height : img.height//图片实际高
                // }
                window.console && console.log(backData);
        }
    },o||{});
    var _self = $(this);

    var loadImg = {
        init : function () {
            var me = this;
            me.appendFile();//向body里添加file对象
            me.triggerFile();//self点击时触发上传控件
            me.fileChangeE();//上传控件上传事件
        },
        target : null,//用来缓存当前指向对象
        appendFile : function () {//向body里添加file对象
            if($('#soLoadImgFile').length==0){
                var $file = '<input id="soLoadImgFile" style="display:none;" accept="'+o.accept+'/*" type="file" capture="camera" />';
                $('body').append($file);
            }
        },
        triggerFile : function () {//self点击时触发上传控件
            var me =this;
            _self.on('tap',function () {
                me.target = $(this);//获取当前指向对象
                $('#soLoadImgFile').trigger('click');
            })
        },
        fileChangeE : function () {//上传控件上传事件
            var me = this;
            $('#soLoadImgFile').on('change',function () {
                lrz(this.files[0], {//调用lrz上传插件
                    before: function() {
                        console.log('压缩开始');
                    },
                    fail: function(err) {
                        console.error(err);
                        $.loadTip&&$.loadTip({
                            content : '上传失败，请重新上传！',
                            removeDelay : 1500//1.5s,默认1s
                        });
                    },
                    always: function() {
                        console.log('压缩结束');
                    },
                    done: function (results) {
                        // 你需要的数据都在这里，可以以字符串的形式传送base64给服务端转存为图片。
                        console.log(results);
                        me.afterUpLoad(results,results.base64, results.base64.length * o.quality);//上传后执行事件
                    }
                });
            });
        },
        afterUpLoad : function (results,src, size) {//上传后执行事件
            var me = this;
            var img = new Image();
             img.src = typeof src === 'string' ? src : URL.createObjectURL(src);
            img.onload = function () {
                var backData = {
                    me : me.target,//指向当前对象
                    results : results,//返回所有上传后返回数据
                    src : img.src,//图片src
                    size : size,//图片大小
                    width : img.width,//图片实际宽
                    height : img.height//图片实际高
                }
                o.afterLoadBack(backData);//执行返回函数
                img = null;//释放img
            };
        }
    }
    loadImg.init();
    return _self;
}

})(window.Zepto);