$.pop = function(o) {
    var oo = $.extend({
        cls: null,
        width: null,
        widthPer: 0.9,
        pos: 'center', //center|bottom
        title :null,
        maxW: null,
        height: null,
        target: null,
        content : null,
        show: true,
        showMask: true,
        maskClick: true,
        beforePop: function() {},
        closePop: function() {}
    }, o || {});

    var $mask = $('<div class="so-openmask"></div>');
    var $wrap = $('<div class="so-popbox"></div>');
    var $title = $('<div class="so-poptitle"></div>');
    var $close = $('<span class="s-sopop-close">X</span>');
    var $cont = $('<div class="so-popbox-cont"></div>');

    if (oo.show) {
        showPop();
    }

    if (oo.maskClick) {
        $mask.click(function() {
            removePop();
        });
    }

    $close.click(function() {
        removePop();
    });

    return {
        wrap : $wrap,
        removePop: removePop,
        showPop: showPop
    };

    function showPop(opt) { //opt为更新的参数
        var opt = $.extend(oo, opt || {});
        opt.cls && $wrap.addClass(opt.cls);
        $wrap.append($close);
        if(opt.title){$wrap.append($title.html(opt.title))}
        $wrap.append($cont);
        if ($('.so-openmask').length == 0) {
            $('body').append($mask);
        };
        $('body').append($wrap);
        opt.content&&$cont.append(opt.content);
        opt.target&&$cont.append($(opt.target).show());
        opt.beforePop($wrap);

        function popE() {
            var wH = $(window).height(),
                wW = $(window).width();
            if (opt.showMask) {
                $mask.css({
                    width: wW,
                    height: (wH + 2)
                });
            };

            var boxW = opt.width ? opt.width : wW * opt.widthPer;
            boxW = (opt.maxW && boxW > opt.maxW) ? opt.maxW : boxW;
            $wrap.css({
                width: boxW,
                height: opt.height
            });
            var boxH = $wrap.height();
            if (opt.pos == 'center') {
                $wrap.css({
                    'left': '50%',
                    'top': '-150%',
                    'marginLeft': -boxW / 2,
                    'marginTop': -boxH / 2
                });
                setTimeout(function() {
                    $wrap.css({
                        'top': '50%'
                    });
                }, 100);
            };
        }

        popE();
        $(window).resize(function() {
            popE();
        });

        if (opt.pos == 'bottom') {
            $wrap.css({
                'left': '0px',
                'bottom': '-100%'
            });
            setTimeout(function() {
                $wrap.css({
                    'bottom': '0px'
                });
            }, 100);
        };
        if (opt.pos == 'top') {
            $wrap.css({
                'left': '0px',
                'top': '-100%'
            });
            setTimeout(function() {
                $wrap.css({
                    'top': '0px'
                });
            }, 100);
        };
    };

    function removePop() {
        $('body').append($(oo.target).hide());
        oo.closePop();
        $mask.remove();
        $wrap.remove();
    };
};
$.alert = function (opt) {
    var o = $.extend({
        title : '提示',
        content : null,
        widthPer : 0.8,
        removeDelay : 0 ,
        callback : function () {}
    },opt||{});
    var d = '<div class="d-content">'+o.content+'</div>';
    var b = '<p class="p-sopop-btn"><span class="s-sopop-btn">确定</span></p>';
   var p =  $.pop(
        $.extend(o, {content : (d+ b)})
    );
   p.wrap.find('.s-sopop-btn').click(function() {
        o.callback();
       p.removePop();
   });

   if(o.removeDelay){
        setTimeout(function () {
           p.removePop();
       },o.removeDelay);
   }
};
$.loadTip =  function (opt) {
    var o = $.extend({
        cls : 'so-loadtip',
        content : null,
        widthPer :0.8,
        width : null,
        removeDelay : 1000
    },opt||{});
   var p =  $.pop(o);
   if(o.removeDelay){
        setTimeout(function () {
           p.removePop();
       },o.removeDelay);
   }
}