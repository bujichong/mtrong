// ;(function(){
//         var isTouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click', _on = $.fn.on;
//             $.fn.on = function(){
//                 arguments[0] = (arguments[0] === 'click') ? isTouch: arguments[0];
//                 return _on.apply(this, arguments);
//             };
//     })();
/* Swipe */
function Swipe(a,b){"use strict";function c(){var c,d;for(n=m.children,q=n.length,n.length<2&&(b.continuous=!1),B.transitions&&b.continuous&&n.length<3&&(m.appendChild(n[0].cloneNode(!0)),m.appendChild(m.children[1].cloneNode(!0)),n=m.children),o=new Array(n.length),p=a.getBoundingClientRect().width||a.offsetWidth,m.style.width=n.length*p+"px",c=n.length;c--;)d=n[c],d.style.width=p+"px",d.setAttribute("data-index",c),B.transitions&&(d.style.left=c*-p+"px",h(c,r>c?-p:c>r?p:0,0));b.continuous&&B.transitions&&(h(f(r-1),-p,0),h(f(r+1),p,0)),B.transitions||(m.style.left=r*-p+"px"),a.style.visibility="visible"}function d(){b.continuous?g(r-1):r&&g(r-1)}function e(){b.continuous?g(r+1):r<n.length-1&&g(r+1)}function f(a){return(n.length+a%n.length)%n.length}function g(a,c){var d,e,g;if(r!=a){if(B.transitions){for(d=Math.abs(r-a)/(r-a),b.continuous&&(e=d,d=-o[f(a)]/p,d!==e&&(a=-d*n.length+a)),g=Math.abs(r-a)-1;g--;)h(f((a>r?a:r)-g-1),p*d,0);a=f(a),h(r,p*d,c||s),h(a,0,c||s),b.continuous&&h(f(a-d),-(p*d),0)}else a=f(a),j(r*-p,a*-p,c||s);r=a,A(b.callback&&b.callback(r,n[r]))}}function h(a,b,c){i(a,b,c),o[a]=b}function i(a,b,c){var d=n[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)"+"translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function j(a,c,d){var e,f;return d?(e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(m.style.left=c+"px",t&&k(),b.transitionEnd&&b.transitionEnd.call(event,r,n[r]),clearInterval(f),void 0):(m.style.left=(c-a)*(Math.floor(100*(g/d))/100)+a+"px",void 0)},4),void 0):(m.style.left=c+"px",void 0)}function k(){u=setTimeout(e,t)}function l(){t=0,clearTimeout(u)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z=function(){},A=function(a){setTimeout(a||z,0)},B={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b,c=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(b in c)if(void 0!==a.style[c[b]])return!0;return!1}(document.createElement("swipe"))};return a?(m=a.children[0],b=b||{},r=parseInt(b.startSlide,10)||0,s=b.speed||300,b.continuous=void 0!==b.continuous?b.continuous:!0,t=b.auto||0,v={},w={},y={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":A(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":A(this.transitionEnd(a));break;case"resize":A(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];v={x:b.pageX,y:b.pageY,time:+new Date},x=void 0,w={},m.addEventListener("touchmove",this,!1),m.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];w={x:c.pageX-v.x,y:c.pageY-v.y},"undefined"==typeof x&&(x=!!(x||Math.abs(w.x)<Math.abs(w.y))),x||(a.preventDefault(),l(),b.continuous?(i(f(r-1),w.x+o[f(r-1)],0),i(r,w.x+o[r],0),i(f(r+1),w.x+o[f(r+1)],0)):(w.x=w.x/(!r&&w.x>0||r==n.length-1&&w.x<0?Math.abs(w.x)/p+1:1),i(r-1,w.x+o[r-1],0),i(r,w.x+o[r],0),i(r+1,w.x+o[r+1],0)))}},end:function(){var a,c=+new Date-v.time,d=Number(c)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2,e=!r&&w.x>0||r==n.length-1&&w.x<0;b.continuous&&(e=!1),a=w.x<0,x||(d&&!e?(a?(b.continuous?(h(f(r-1),-p,0),h(f(r+2),p,0)):h(r-1,-p,0),h(r,o[r]-p,s),h(f(r+1),o[f(r+1)]-p,s),r=f(r+1)):(b.continuous?(h(f(r+1),p,0),h(f(r-2),-p,0)):h(r+1,p,0),h(r,o[r]+p,s),h(f(r-1),o[f(r-1)]+p,s),r=f(r-1)),b.callback&&b.callback(r,n[r])):b.continuous?(h(f(r-1),-p,s),h(r,0,s),h(f(r+1),p,s)):(h(r-1,-p,s),h(r,0,s),h(r+1,p,s))),m.removeEventListener("touchmove",y,!1),m.removeEventListener("touchend",y,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==r&&(t&&k(),b.transitionEnd&&b.transitionEnd.call(a,r,n[r]))}},c(),t&&k(),B.addEventListener?(B.touch&&m.addEventListener("touchstart",y,!1),B.transitions&&(m.addEventListener("webkitTransitionEnd",y,!1),m.addEventListener("msTransitionEnd",y,!1),m.addEventListener("oTransitionEnd",y,!1),m.addEventListener("otransitionend",y,!1),m.addEventListener("transitionend",y,!1)),window.addEventListener("resize",y,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){l(),g(a,b)},prev:function(){l(),d()},next:function(){l(),e()},getPos:function(){return r},getNumSlides:function(){return q},kill:function(){var a,b;for(l(),m.style.width="auto",m.style.left=0,a=n.length;a--;)b=n[a],b.style.width="100%",b.style.left=0,B.transitions&&i(a,0,0);B.addEventListener?(m.removeEventListener("touchstart",y,!1),m.removeEventListener("webkitTransitionEnd",y,!1),m.removeEventListener("msTransitionEnd",y,!1),m.removeEventListener("oTransitionEnd",y,!1),m.removeEventListener("otransitionend",y,!1),m.removeEventListener("transitionend",y,!1),window.removeEventListener("resize",y,!1)):window.onresize=null}}):void 0}(window.jQuery||window.Zepto)&&function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);

!function(a){a.fn.extend({soLazy:function(b){var c,d,e,f,g,h;return b=a.extend({scrollWrap:null,type:"scroll",imgTag:"src2",defHeight:40,defDelay:4e3},b||{}),c=a(this),d=c.find("img"),e=b.imgTag,"scroll"==b.type&&(f=function(){return b.scrollWrap?a(b.scrollWrap).height()+a(b.scrollWrap).scrollTop()-b.defHeight:document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-b.defHeight},g=function(){d.each(function(){if(a(this).offset().top<=f()){var b=a(this).attr(e);b&&a(this).attr("src",b).removeAttr(e)}})},g(),h=b.scrollWrap?a(b.scrollWrap):a(window),h.bind("scroll",function(){g()})),"delay"==b.type&&setTimeout(function(){d.each(function(){var b=a(this).attr(e);b&&a(this).attr("src",b).removeAttr(e)})},b.defDelay),c}})}(jQuery);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"cls",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?_self.find(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),r[c]&&b&&(f=r[c].rule(b,d)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^\w+$/.test(a)},msg:function(){return"只能用英文字母、数字和下划线"}},baseCnChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},phoneEmail:{rule:function(a){var b=/^((1)+\d{10})$/.test(a),c=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a);return b||c},msg:function(){return"请填写正确的手机号码或者电子邮箱！"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},plateNum:{rule:function(a){return/^[A-Za-z0-9]{6}$/.test(a)},msg:function(){return"请填写正确的车牌号码！"}},remote:{rule:function(val,param){var data,b,d={};return d[param.key]=val,data=$.extend(d,param.data||{}),b=!1,$.ajax({url:param.url,data:data,async:!1,success:function(data){window.console&&console.log(data);var data="string"==typeof data?eval("("+data+")"):data;b=data.success},error:function(){alert("向服务器请求验证失败！")}}),b},msg:function(){return"手机号码已存在！"}}}),$.fn.groupRequired=function(a){var b,c={style:"and",type:"required",attr:"class"};return"string"==typeof a?c.style=a:$.extend(c,a||{}),b=$(this),"and"==c.style&&b.blur(function(){""!=this.value?b.addClass(c.type):b.removeClass(c.type)}),"or"==c.style&&(b.addClass(c.type),b.blur(function(){var a=!1;b.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?b.removeClass(c.type):b.addClass(c.type)})),b}}(jQuery);

$.pop=function(a){function h(a){function h(){var f,g,b=$(window).height(),e=$(window).width();a.showMask&&c.css({width:e,height:b+2}),f=a.width?a.width:e*a.widthPer,f=a.maxW&&f>a.maxW?a.maxW:f,d.css({width:f,height:a.height}),g=d.height(),"center"==a.pos&&(d.css({left:"50%",top:"-150%",marginLeft:-f/2,marginTop:-g/2}),setTimeout(function(){d.css({top:"50%"})},100))}var a=$.extend(b,a||{});a.cls&&d.addClass(a.cls),d.append(f),a.title&&d.append(e.html(a.title)),d.append(g),0==$(".so-openmask").length&&$("body").append(c),$("body").append(d),a.content&&g.append(a.content),a.target&&g.append($(a.target).show()),a.beforePop(d),h(),$(window).resize(function(){h()}),"bottom"==a.pos&&(d.css({left:"0px",bottom:"-100%"}),setTimeout(function(){d.css({bottom:"0px"})},100)),"top"==a.pos&&(d.css({left:"0px",top:"-100%"}),setTimeout(function(){d.css({top:"0px"})},100))}function i(){$("body").append($(b.target).hide()),b.closePop(),c.remove(),d.remove()}var b=$.extend({cls:null,width:null,widthPer:.9,pos:"center",title:null,maxW:null,height:null,target:null,content:null,show:!0,showMask:!0,maskClick:!0,beforePop:function(){},closePop:function(){}},a||{}),c=$('<div class="so-openmask"></div>'),d=$('<div class="so-popbox"></div>'),e=$('<div class="so-poptitle"></div>'),f=$('<span class="s-sopop-close">X</span>'),g=$('<div class="so-popbox-cont"></div>');return b.show&&h(),b.maskClick&&c.click(function(){i()}),f.click(function(){i()}),{wrap:d,removePop:i,showPop:h}},$.alert=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,removeDelay:0,callback:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn">确定</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-btn").click(function(){b.callback(),e.removePop()}),b.removeDelay&&setTimeout(function(){e.removePop()},b.removeDelay)},$.confirm=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,sure:function(){},cancel:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn s-sopop-sure">确定</span><span class="s-sopop-btn s-sopop-cancel">取消</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-sure").click(function(){b.sure(),e.removePop()}),e.wrap.find(".s-sopop-cancel").click(function(){b.cancel(),e.removePop()})},$.loadTip=function(a){var b=$.extend({cls:"so-loadtip",content:null,widthPer:.8,width:null,removeDelay:1e3},a||{}),c=$.pop(b);b.removeDelay&&setTimeout(function(){c.removePop()},b.removeDelay)};

$.touchSlider = function(opt) {
    var o = $.extend({
        galleryWrapId: null,
        thumb: null,
        nowCls: 's-touchNow'
    }, opt || {});

    var slider = Swipe(document.getElementById(o.galleryWrapId), {
        auto: 3000,
        continuous: true,
        callback: function(index) {
            //window.console && console.log(index,$(o.thumb));
            $(o.thumb).removeClass(o.nowCls).eq(index).addClass(o.nowCls);
        }
    });
};


$.getFullDate = function (date) {
    var that = this;
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hh = date.getHours();// 时
    var mm = date.getMinutes();// 分
     var ss = date.getSeconds();//秒

    month = ('0'+month).slice(-2);
    day = ('0'+day).slice(-2);
    hh = ('0'+hh).slice(-2);
    mm = ('0'+mm).slice(-2);
    ss = ('0'+ss).slice(-2);
    return year+'年'+month+'月'+day+'日 '+hh+':'+mm+":"+ss;
};

$.views&&$.views.converters({//jsrender获取时间参数
    time: function (dateStr) {
        return $.getFullDate(dateStr);
    },
    orderState : function (stateVal) {
        var state = 'false';
        switch (stateVal) {
            case  "Delivering":// 邮递中
            case  "Finished":// 订单结束
            case  "Delivered":// 邮递结束
            case  "Confirmed":// 发货中
            case  "PartPaid":// 已付款
            case  "Cancelled":// 取消
                state = 'true';
                break;
            case  "NotPaid":// 未付款
            case  "Wait_Confirm":// 待确认
                state = 'false';
                break;
            default ://如果为空值或非法值
                state = 'false';
        }
        window.console && console.log(stateVal,":",state);
        return state;
    }
});


var sos = sos || {}


sos.base = {
    init: function() {
        var me = this;
        me.exSubNav();
        me.lazyload();
        me.regLoginTab();
        me.listEventDetails();
        me.scorllBanner();
        me.sliderGallery();
        me.proNumTotal();
        me.cartChangeTotal();
        me.cartChkAll();
        me.formValidate();
        me.renderDropDistinct();
        me.changeExpress();
        me.addCart();//加入购物车事件
        me.getKindOrder();
        me.getMoreOrder();
        me.sendWaiting();
        me.listEventBuy();
        me.kindsTab();
    },
    exSubNav: function() { //主导航点击展开子菜单
        var st = null;
        $('.fn-subnav').on('click',function() {
            var _self = $(this);
           st && clearTimeout(st);
            var $subNav = _self.next('.ul-subnav');
            if ($subNav.hasClass('ul-subnav-show')) {
                $subNav.removeClass('ul-subnav-show');
                _self.removeClass('a-now');
            }else{
                $subNav.addClass('ul-subnav-show');
                _self.addClass('a-now');
                st = setTimeout(function() {
                    $subNav.removeClass('ul-subnav-show');
                    _self.removeClass('a-now');
                }, 3000);
            };
        });
    },
    lazyload : function () {
        if ($('.lazybox').length) {
            if($('.all-main').length){
                $('.lazybox').soLazy({scrollWrap:'.all-main'});
            }else{
                $('.lazybox').soLazy();
            }
        };
    },
    scorllBanner : function () {
        if($('.scrollBanner').length){
            var len = $('.scrollBanner').find('.scrollWrap li').length;
            var $thumb="";
            for (var i = 0; i < len; i++) {
                $thumb += '<span class="s-touchThumb ' + (i == 0 ? "s-touchNow" : "") + '">' + i + '</span>';
            };
            $('.scrollBanner').find('.p-thumb').html($thumb);
        }
    },
    kindsTab : function () {
        if ($('.li-sidenav').length) {
            $('.li-sidenav').on('click', function() {
                var indx =  $('.li-sidenav').index(this);
                $('.li-sidenav-now').removeClass('li-sidenav-now');
                $('.kindBox-now').removeClass('kindBox-now');
                $(this).addClass('li-sidenav-now');
                $('.kindBox').eq(indx).addClass('kindBox-now');
            });
        };
    },
    sliderGallery:function () {
        if ($('#galleryWrap').length) {
          $.touchSlider({
                galleryWrapId: 'galleryWrap',
                thumb: '.s-touchThumb'
            });
        };
    },
    getKindOrder :function () {
       var me = this;
       if ($('.a-status').length) {
         var $status = $('.a-status');
            $status.on('click',function() {//分类订单
            	var from = $(".from").val();
        		var uId = $(".uId").val();
                // var ix = $status.index(this);
                $status.removeClass('a-status-now');
                $(this).addClass('a-status-now');
                var statusT = $(this).find('.em-status').text();
                $('.s-order-title').text('最近'+statusT+'的订单');
                var ajaxurl = $(this).attr('href');
                loadOpt.url = ajaxurl;
                me.pageNow = 1;
                me.loadMore(loadOpt.url,true);//加载更多事件
                return false;
            });

            $('.a-ordermore').on('click',function() {//所有订单
                $status.removeClass('a-status-now');
                $('.s-order-title').text('所有订单');
                var ajaxurl = $(this).attr('href');
                loadOpt.url = ajaxurl;
                me.pageNow = 1;
                me.loadMore(loadOpt.url,true);//加载更多事件
                return false;
            });
       };
    },
    getMoreOrder : function () {
        var me = this;
        if ($('.p-loadMore').length) {
            $('.p-loadMore').on('click',function () {//点击加载更多
                me.loadMore(loadOpt.url,false);//加载更多事件
            });
        };
    },
    pageNow : 2,//如果不重置分类，数据从第二页开始加载
    loadMore : function (ajaxurl,refresh) {//加载更多事件
        var me = this;
        var from = $(".from").val();
		var uId = $(".uId").val();
        window.console && console.log(ajaxurl);
        $.get(ajaxurl,{//第几页参数名pi ,每页多少条参数名：ps
            page :me.pageNow,
            pageSize : loadOpt.pageSize,
            from : from,
            uId : uId
        },function (data) {
            //var data = eval(data);
            //var data = eval('(' + data + ')');
            window.console && console.log(data);
            //alert(data.totalCount);
            if(data.totalCount==0){
                $('.p-emptytip').removeClass('p-emptytipHide');
            }else{
                $('.p-emptytip').addClass('p-emptytipHide');
            }
            if (data.statueList.length) {
                var totalCount = data.totalCount;//数据总长度
                // alert("totalCount:"+totalCount)
                // alert("data.length:"+data.orderStatuesList.length)
                var orderData = data.statueList;
                var dataAllLen = (me.pageNow-1)*loadOpt.pageSize+orderData.length;//当前已获得数据总长度 = (当前页码-1)*每页数量+当前获得数据长度
                if (totalCount<=dataAllLen) {
                    $('.p-loadMore').hide();
                    window.console && console.log('全部加载完毕');//如果当前中数据长度大于等于数据中长度，则隐藏更多按钮
                }else{
                    $('.p-loadMore').show();
                };
                $.each(orderData,function () {
                    var imgList = this.imgUrlList;
                    var newImgArr = [];
                    var tempImg = '';
                    if (imgList.length) {
                        $.each(imgList,function (i,v) {
                            if (v !== tempImg) {newImgArr.push(v)};
                            tempImg = v;
                        });
                    };
					this.status = (this.status=='待审核')?true:false;
                    this.imgUrlList = newImgArr;
                });

            window.console && console.log(orderData);
                var $list = $('#orderTem').render(orderData)//使用jsrender来模板载入数据
                if(refresh){
                    $('.ul-order').html($list);
                }else{
                    $('.ul-order').append($list);
                }
                me.pageNow++;//增加页码
            };
        })
    },
    formV : null,
    formValidate : function () {//表单验证
        var me = this;
        if ($('.form-validate').length) {
           me.formV =  $('.form-validate').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btnValidate',
                exInputs :'.p-type1 :input',
                submit : function (form) {//默认验证成功提交submit事件
                    form.submit();
                    window.console && console.log('验证通过，提交登录！');
                },
                fail : function (form,failInputs) {//验证失败
                    var $failF = $(failInputs[0]);
                    //$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
                    $failF.focus();
                }
            });
           // $('.form-validate .txt,.form-validate .txta').focus(function () {
           //      var st = parseInt($('.all-main').scrollTop());
           //      var pt = parseInt($(this).position().top);
           //      $('.all-main').stop().animate({'scrollTop':st+pt-10},400);
           // });
        };
    },
    sendWaiting : function () {
        if ($('.fn-btnsend').length) {
            $('.fn-btnsend').on('click',function() {
                $(this).hide();
                $('.btn-waiting').css('display','block');
            });
        };
    },
    /**
     * -------------------------------------------------------
     * 秦艽 点击加入购物车按钮，发送ajax请求，传递参数
     * --------------------------------------------------------
     */
    addCart : function(){
    	$(".a-toCart").on('click',function(){
                    $(this).hide();
                    $('.s-waitingCart').show();//进入提交等待状态
    		var itemname = encodeURI(encodeURI($(".h2-pro-title").text()));
    		var from = $(".from").val();
    		var uId = $(".uId").val();
            	var array = new Array();
            	$(".txt-num").each(function(){
                            var v = $(this).val();
                            if(v>0){
                                var spu = $(this).attr('sku');
                                array.push(spu+'-'+v);
                            }
            	});
//    		$.ajax({
//    			url : '/html/cart/addCart.do',
//    			type : 'post',
//    			dataType:'json',
//    			data : {
//    				"itemname":itemname,
//    				"array" : array.toLocaleString()
//    			},
//    			success : function(data) {
//    				alert("test");
//    				return;
//				},
//				error:function(){
//					 alert(arguments[1])
//				},
//    		});
        	window.location="/html/cart/addCart.do?itemname="+itemname+"&array="+array.toLocaleString()+
        	"&from="+from+"&uId="+uId
    	});
    },
    regLoginTab : function () {//注册登录tab
        if ($('.btnLogin').length) {
            var me = this;
            var $tab = $('.tabTitle');
            var $cont = $('.p-tab');
            var $type = $('#regloginType');
            $tab.on('click',function() {
                var ix = $tab.index(this);
                $tab.removeClass('tabTitleNow').eq(ix).addClass('tabTitleNow');
                $cont.addClass('hide');
                $('.p-type'+ix).removeClass('hide');
                me.formV.removeInputs('.p-tab :input');
                me.formV.addInputs('.p-type'+ix+' :input');
                $type.val(ix);
                return false;
            });
        };
    },
    buyPop : null,
    listEventBuy: function() { //产品列表点击弹窗采购信息
        var me = this;
        if ($('.fn-buy').length) {
            $('.fn-buy').on('click',function() { //采购事件
                var data = $(this).data('details');
                window.console && console.log(data);
                me.buyPop = $.pop({
                    cls: 'bookingPopBox',
                    target: '.bookingPop',
                    pos: 'bottom',
                    widthPer: 1,
                    beforePop: function() {
                        $('#pop-proInfo').html(
                            $('#proSkuListTem').render(data)
                        );
                        me.proNumTotal();
                    },
                    closePop : function () {
                        // $('.a-toCart').show();
                        // $('.s-waitingCart').hide();
                        $('.pro-totalCart').find('.em-totalNum').text(0);
                        $('.pro-totalCart').find('.em-totalPrice').text('0.00');
                    }
                    // show : false
                });
            });
            $('.fn-inCart').on('click',function() {
                sos.base.buyPop.removePop();
                $.loadTip({
                    content : '购买成功！',
                    removeDelay : 1500//1.5s,默认1s
                });
                return false;
            });

        };

    },
    listEventDetails: function() { //产品列表点击弹窗产品详情
        if ($('.fn-details').length) {
            var detailsPop = null;
            $('.fn-details').on('click',function() { //查看详情
                var data = $(this).parents('.li-list').data('details');
                //window.console && console.log(data);
                $('#proId').val(data.id);
                if (data.imgs.length > 0) {
                    var len = data.imgs.length;
                    var $img = '',
                        $thumb = '';
                    for (var i = 0; i < len; i++) {
                        $img += '<li><img src="' + data.imgs[i] + '" alt="" /></li>';
                        $thumb += '<span class="s-touchThumb ' + (i == 0 ? "s-touchNow" : "") + '">' + i + '</span>';
                    };
                    $('.scrollWrap').html($img)
                    $('.proDetail').find('.p-thumb').html($thumb);
                };
                if (data.detail) {
                    $('.proDetail').find('.proIntro').html(data.detail);
                };
                detailsPop = $.pop({
                    target: '.proDetail',
                    width: 288,
                    beforePop: function() {
                        $.touchSlider({
                            galleryWrapId: 'galleryWrap',
                            thumb: '.s-touchThumb'
                        })
                    }
                });
            });
            $('.fn-delFav').on('click',function () {
                detailsPop.removePop();
                $.loadTip({
                    content :'从常用配料中删除成功！'
                });
            });
        }
    },
    proNumTotal : function () {
        var me = this;
        if($('.st-proSkuList').length){
            me.numAd(function () {
                var $num = $('.st-proSkuList').find('.txt-num');
                var $totalNum = $('.pro-totalCart').find('.em-totalNum');
                var $total = $('.pro-totalCart').find('.em-totalPrice');
                var total = 0;
                var totalNum = 0;
                $num.each(function (i,v) {
                    var price = $(this).attr('price');
                    var num = $(this).val();
                    total +=price*num;
                    totalNum +=num*1;
                });
                $totalNum.text(totalNum);
                $total.text(total.toFixed(2));
            });
        }
    },
    numAd: function(callback) { //数字加减
        if ($('.fn-op-num').length) {
            var $fn = $('.fn-op-num');
            $fn.find('.em-op-d').on('click',function() { //减少
                var $num = $(this).next('.txt-num');
                var num = $num.val();
                var min = $num.attr('rel') || 0;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);
                if(callback){callback();}
            });

            $fn.find('.em-op-a').on('click',function() { //增加
                var $num = $(this).prev('.txt-num');
                var num = $num.val();
                num = num * 1 + 1;
                $num.val(num);
                if(callback){callback();}
            });

            $fn.find('.txt-num').keyup(function() { //按键操作
                var num = $(this).val();
                num = num.replace(/\D/g, '');
                num = (isNaN(num) ? 1 : num) * 1; //只能为数字
                num = num > 0 ? num : 1;
                $(this).val(num);
                if(callback){callback();}
            });
        };
    },
    changeExpress : function () {
        if ($('.s-exStyle').length) {
            $('.s-exStyle').on('click',function () {
                $('.s-exStyle').removeClass('s-exSel');
                $(this).addClass('s-exSel');
                var exPrice = $(this).attr('price');
                $('.s-totalExPrice').text(exPrice);
                $('.em-stylePrice').text(exPrice);
                $('.em-totalAllPrice').text($('.s-totalProPrice').text()*1+exPrice*1);
            })
        };
    },
    cartChangeTotal: function () {
        var me =this;
       if ($('.gotoBooking').length) {
            me.numAd(function () {
                me.cartSetNumTotal();
            });
       };
    },
    cartSetNumTotal : function () {
        var total = 0;
        var totalNum = 0;
        var skuNumArr = [];
        $('.li-list').each(function () {
            var $chk = $(this).find('input.chkone:checked');
            if ($chk.length) {
                var $num =$(this).find('.txt-num');
                $num.each(function (i,v) {
                    var price = $(this).attr('price');
                    var num = $(this).val();
                    total +=price*num;
                    if(num>0){
                        var sku = $(this).attr('sku');
                        skuNumArr.push(sku+'-'+num);
                    }
                });
            };
        });
        $('#txt-skuNumString').val(skuNumArr.join(','));
        total = "￥"+total.toFixed(2);
        $('.totalSumBox').find('.em-totalPrice').text(total);
    },
    cartChkAll: function() {//购物车选择商品事件
        var me = this;
        if ($('.chkall').length) {
            var $t = $('.s-tipSel'),
                $go = $('.a-gotoBooking'),
                $one = $('.chkone'),
                $all = $('.chkall');

            triggerStatus();//初始检查是否有已选中
            $one.on('click',function() {//单项点击事件
                if ($('.chkone:checked').length == $('.chkone').length) {//如果都选中则设置全选为真
                    $all.attr('checked', 'checked');
                }else{
                    $all.removeAttr('checked');
                };
                triggerStatus();
            });
            $('.s-del').click(function() {
                var _self = $(this);
                var $p =$(this).parents('.skuItems');
                var $t;
                if ($p.find('.div-skuItem').length==1) {
                    $t = $(this).parents('.li-list');
                }else{
                    $t = $(this).parents('.div-skuItem');
                };
                $.confirm({
                    title : "删除提示",
                    content : '你确定要删除此商品吗？',
                    sure : function () {
                        // var cartId = _self.attr('cartId');
                        $t.remove();
                        triggerStatus();
                    }
                })

            });
            $all.on('click',function() { //全选点击事件
                window.console && console.log($('.chkone:checked').length,$('.chkone').length);
                if ($('.chkone:checked').length == $('.chkone').length) {//如果已经都全选则反选
                    $one.removeAttr('checked');
                } else {//全选
                    $one.attr('checked', 'checked');
                };
                triggerStatus();
            });
            $go.on('click',function () {
                $(this).hide();
                $t.text('提交中...').show();
                $one.unbind('click');
                $all.unbind('click');
                if('ontouchstart' in document.documentElement){
                     $one.unbind('touchstart');
                    $all.unbind('touchstart');
                }
            });
        };

        function triggerStatus() {//检查跟踪选择状态，设置提交状态
            me.cartSetNumTotal();
            if ($('.chkone:checked').length) {
                $t.hide();
                $go.show();
            } else {
                $t.show();
                $go.hide();
            };
        }
    },

    renderDropDistinct : function () {//地区切换
        var t = this;
        if ($('.drop-province').length) {
            //初始化
            if($('#district').val()!=''){
                var p = $('#province').val();
                var c = $('#city').val();
                var d = $('#district').val();
                t.provinceInit(p,c,d);
            }else{
                t.provinceInit();
            }
            // change province
            $('.drop-province').change(function () {
                var provinceText = $(this).find('option:selected').text();
                t.changeProvince(this.value,provinceText);
            });
            // change city
            $('.drop-city').change(function () {
                var districtData = t.addOptHtml(region.data.district,this.value);
                $('.drop-distinct').html(districtData.html);
                $('#city').val($('.drop-city option:selected').text());
                $('#district').val($('.drop-distinct option:selected').text());
            });
            // change distinct
            $('.drop-distinct').change(function () {
                $('#district').val($('.drop-distinct option:selected').text());
                //$zip.text(this.value);
            });
        };

    },
    provinceInit : function (t1,t2,t3) {
        var t = this;
        var provinceHtml = '';
        var v1 = null;
         var t1 = t1||'浙江省',t2=t2||'嘉兴市',t3=t3||'南湖区';
        for (i in region.data.province) {
            var d = region.data.province[i];
            provinceHtml += '<option value="'+d.id+'">'+d.name+'</option>';
            d.name==t1&&(v1=d.id);
        }
        $('.drop-province').html(provinceHtml);

        $('.drop-province').val(v1);
        t.changeProvince(v1,t1,t2,t3);

    },
    addOptHtml : function (data,v,tn) {
        var arr = data[v];
        var h = '';
        window.console && console.log(v);
        var aLen = arr.length;
        var vn = null;
        var tn = tn || arr[0].name;
        for (i = 0; i < aLen; i++) {
            h += '<option value="'+arr[i].id+'">'+arr[i].name+'</option>';
            arr[i].name==tn&&(vn=arr[i].id);
        }
        return {html:h , arr:arr , v:vn , t:tn};
    },
    changeProvince : function (v1,t1,t2,t3) {
        //window.console && console.log(v1,t1,t2,t3);
        var t = this;
        //var $zip = $('.b-zipcode');
        var cityData = t.addOptHtml(region.data.city,v1,t2);
        var v2 = cityData.v;
        var t2 = cityData.t;
        $('.drop-city').html(cityData.html).val(v2);
        var districtData = t.addOptHtml(region.data.district,v2,t3);
        var v3 = districtData.v;
        var t3 = districtData.t;
        $('.drop-distinct').html(districtData.html).val(v3);

          //$zip.text(v3||$('.drop-distinct option:first').val());
        $('#province').val(t1);
        $('#city').val(t2);
        $('#district').val(t3);
    }

};

$(function() {
    sos.base.init();


});
