/* Swipe */
function Swipe(a,b){"use strict";function c(){var c,d;for(n=m.children,q=n.length,n.length<2&&(b.continuous=!1),B.transitions&&b.continuous&&n.length<3&&(m.appendChild(n[0].cloneNode(!0)),m.appendChild(m.children[1].cloneNode(!0)),n=m.children),o=new Array(n.length),p=a.getBoundingClientRect().width||a.offsetWidth,m.style.width=n.length*p+"px",c=n.length;c--;)d=n[c],d.style.width=p+"px",d.setAttribute("data-index",c),B.transitions&&(d.style.left=c*-p+"px",h(c,r>c?-p:c>r?p:0,0));b.continuous&&B.transitions&&(h(f(r-1),-p,0),h(f(r+1),p,0)),B.transitions||(m.style.left=r*-p+"px"),a.style.visibility="visible"}function d(){b.continuous?g(r-1):r&&g(r-1)}function e(){b.continuous?g(r+1):r<n.length-1&&g(r+1)}function f(a){return(n.length+a%n.length)%n.length}function g(a,c){var d,e,g;if(r!=a){if(B.transitions){for(d=Math.abs(r-a)/(r-a),b.continuous&&(e=d,d=-o[f(a)]/p,d!==e&&(a=-d*n.length+a)),g=Math.abs(r-a)-1;g--;)h(f((a>r?a:r)-g-1),p*d,0);a=f(a),h(r,p*d,c||s),h(a,0,c||s),b.continuous&&h(f(a-d),-(p*d),0)}else a=f(a),j(r*-p,a*-p,c||s);r=a,A(b.callback&&b.callback(r,n[r]))}}function h(a,b,c){i(a,b,c),o[a]=b}function i(a,b,c){var d=n[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)"+"translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function j(a,c,d){var e,f;return d?(e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(m.style.left=c+"px",t&&k(),b.transitionEnd&&b.transitionEnd.call(event,r,n[r]),clearInterval(f),void 0):(m.style.left=(c-a)*(Math.floor(100*(g/d))/100)+a+"px",void 0)},4),void 0):(m.style.left=c+"px",void 0)}function k(){u=setTimeout(e,t)}function l(){t=0,clearTimeout(u)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z=function(){},A=function(a){setTimeout(a||z,0)},B={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b,c=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(b in c)if(void 0!==a.style[c[b]])return!0;return!1}(document.createElement("swipe"))};return a?(m=a.children[0],b=b||{},r=parseInt(b.startSlide,10)||0,s=b.speed||300,b.continuous=void 0!==b.continuous?b.continuous:!0,t=b.auto||0,v={},w={},y={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":A(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":A(this.transitionEnd(a));break;case"resize":A(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];v={x:b.pageX,y:b.pageY,time:+new Date},x=void 0,w={},m.addEventListener("touchmove",this,!1),m.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];w={x:c.pageX-v.x,y:c.pageY-v.y},"undefined"==typeof x&&(x=!!(x||Math.abs(w.x)<Math.abs(w.y))),x||(a.preventDefault(),l(),b.continuous?(i(f(r-1),w.x+o[f(r-1)],0),i(r,w.x+o[r],0),i(f(r+1),w.x+o[f(r+1)],0)):(w.x=w.x/(!r&&w.x>0||r==n.length-1&&w.x<0?Math.abs(w.x)/p+1:1),i(r-1,w.x+o[r-1],0),i(r,w.x+o[r],0),i(r+1,w.x+o[r+1],0)))}},end:function(){var a,c=+new Date-v.time,d=Number(c)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2,e=!r&&w.x>0||r==n.length-1&&w.x<0;b.continuous&&(e=!1),a=w.x<0,x||(d&&!e?(a?(b.continuous?(h(f(r-1),-p,0),h(f(r+2),p,0)):h(r-1,-p,0),h(r,o[r]-p,s),h(f(r+1),o[f(r+1)]-p,s),r=f(r+1)):(b.continuous?(h(f(r+1),p,0),h(f(r-2),-p,0)):h(r+1,p,0),h(r,o[r]+p,s),h(f(r-1),o[f(r-1)]+p,s),r=f(r-1)),b.callback&&b.callback(r,n[r])):b.continuous?(h(f(r-1),-p,s),h(r,0,s),h(f(r+1),p,s)):(h(r-1,-p,s),h(r,0,s),h(r+1,p,s))),m.removeEventListener("touchmove",y,!1),m.removeEventListener("touchend",y,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==r&&(t&&k(),b.transitionEnd&&b.transitionEnd.call(a,r,n[r]))}},c(),t&&k(),B.addEventListener?(B.touch&&m.addEventListener("touchstart",y,!1),B.transitions&&(m.addEventListener("webkitTransitionEnd",y,!1),m.addEventListener("msTransitionEnd",y,!1),m.addEventListener("oTransitionEnd",y,!1),m.addEventListener("otransitionend",y,!1),m.addEventListener("transitionend",y,!1)),window.addEventListener("resize",y,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){l(),g(a,b)},prev:function(){l(),d()},next:function(){l(),e()},getPos:function(){return r},getNumSlides:function(){return q},kill:function(){var a,b;for(l(),m.style.width="auto",m.style.left=0,a=n.length;a--;)b=n[a],b.style.width="100%",b.style.left=0,B.transitions&&i(a,0,0);B.addEventListener?(m.removeEventListener("touchstart",y,!1),m.removeEventListener("webkitTransitionEnd",y,!1),m.removeEventListener("msTransitionEnd",y,!1),m.removeEventListener("oTransitionEnd",y,!1),m.removeEventListener("otransitionend",y,!1),m.removeEventListener("transitionend",y,!1),window.removeEventListener("resize",y,!1)):window.onresize=null}}):void 0}(window.jQuery||window.Zepto)&&function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"cls",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?$(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),"easydrop"==c&&(f=r[c].rule(b,d,a)),r[c]&&b&&(f=r[c].rule(b,d,a)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},easydrop:{rule:function(a,b,c){var d=c.siblings(".combo").find(".combo-value").val();return d=$.trim(d),""===d?!1:!0},msg:function(){return"请选择..."}},remote:{rule:function(a,b){var d,e,c={};return c[b.key]=a,d=$.extend(c,b.data||{}),e=!1,$.ajax({url:b.url,data:d,async:!1,success:function(a){e=a.success},error:function(){alert("向服务器请求验证失败！")}}),e},msg:function(){return"您的填写不正确！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

$.pop=function(a){function h(a){function h(){var e,f,b=$(window).width();a.showMask&&c.css({bottom:"0px"}),e=a.width?a.width:b*a.widthPer,e=a.maxW&&e>a.maxW?a.maxW:e,d.css({height:a.height}),f=d.height(),"center"==a.pos&&(d.css({left:"50%",top:"-150%",width:e,marginLeft:-e/2,marginTop:-f/2}),setTimeout(function(){d.css({top:"50%"})},100)),"bottom"==a.pos&&(d.css({left:"0px",right:"0px",bottom:"-100%"}),setTimeout(function(){d.css({bottom:"0px"})},100)),"top"==a.pos&&(d.css({left:"0px",right:"0px",top:"-100%"}),setTimeout(function(){d.css({top:"0px"})},100))}var a=$.extend(b,a||{});a.cls&&d.addClass(a.cls),d.append(f),a.title&&d.append(e.html(a.title)),d.append(g),0==$(".so-openmask").length&&$("body").append(c),$("body").append(d),a.content&&g.append(a.content),a.target&&g.append($(a.target).show()),a.beforePop(d),h(),$(window).resize(function(){h()})}function i(){$("body").append($(b.target).hide()),b.closePop(),c.remove(),d.remove()}var b=$.extend({cls:null,width:null,widthPer:.9,pos:"center",title:null,maxW:null,height:null,target:null,content:null,show:!0,showMask:!0,maskClick:!0,beforePop:function(){},closePop:function(){}},a||{}),c=$('<div class="so-openmask"></div>'),d=$('<div class="so-popbox"></div>'),e=$('<div class="so-poptitle"></div>'),f=$('<span class="s-sopop-close">X</span>'),g=$('<div class="so-popbox-cont"></div>');return b.show&&h(),b.maskClick&&c.click(function(){i()}),f.click(function(){i()}),{wrap:d,removePop:i,showPop:h}},$.alert=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,removeDelay:0,callback:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn">确定</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-btn").click(function(){b.callback(),e.removePop()}),b.removeDelay&&setTimeout(function(){e.removePop()},b.removeDelay)},$.confirm=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,sure:function(){},cancel:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn s-sopop-sure">确定</span><span class="s-sopop-btn s-sopop-cancel">取消</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-sure").click(function(){b.sure(),e.removePop()}),e.wrap.find(".s-sopop-cancel").click(function(){b.cancel(),e.removePop()})},$.loadTip=function(a){var b=$.extend({cls:"so-loadtip",content:null,widthPer:.8,width:null,removeDelay:1e3},a||{}),c=$.pop(b);b.removeDelay&&setTimeout(function(){c.removePop()},b.removeDelay)};

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


var sos = sos || {}





sos.base = {
    init: function() {
        var me = this;
        me.exSubNav();
        me.extendSearch();
        me.listEventDetails();
        me.listEventBuy();
        me.subKindsEx();
        //me.numAd();
        me.cartChkAll();
        me.regLoginTab();
        me.formValidate();
        //me.provinceInit('上海','上海市','金山区');
        me.renderDropDistinct();
    },
    exSubNav: function() { //主导航点击展开子菜单
        var st = null;
        $('.fn-subnav').click(function() {
           st && clearTimeout(st);
            var $subNav = $(this).next('.ul-subnav');
            window.console && console.log($subNav.hasClass('ul-subnav-show'));
            if ($subNav.hasClass('ul-subnav-show')) {
                $subNav.removeClass('ul-subnav-show');
            }else{
                $subNav.addClass('ul-subnav-show');
                st = setTimeout(function() {
                    $subNav.removeClass('ul-subnav-show');
                }, 3000);
            };
        });
    },
    extendSearch: function() { //主导航点击展开搜索
        if ($('.s-exSearch').length) {
            $('.s-exSearch').click(function() {
                $('.searchbox').toggleClass('searchShow');
                moveChk();
            });
            $('.s-extend').click(function() {
                $('.searchbox').removeClass('searchShow');
                moveChk();
            });

            function moveChk() {
                if ($('.searchbox').hasClass('searchShow')) {
                    $('.totalSumBox').css({
                        bottom: '78px'
                    });
                } else {
                    $('.totalSumBox').css({
                        bottom: '40px'
                    });
                };
            }
        };
    },
    subKindsEx: function() { //二级分类点击展开
        if ($('.li-subKinds').length) {
            $('.li-subKinds').find('.s-title').click(function() {
                var $par = $(this).parent('.li-subKinds');
                $('.li-subKinds').removeClass('li-subKinds-ex');
                $par.addClass('li-subKinds-ex');
            })
        };
    },

    tabSlider : function () {
        if ($('#tabWrap-a').length) {
            var startSlide = 0;
            var startString = window.location.href.split('#');
            if (startString[1]&&startString[1]*1) {
                startSlide = startString[1];
            };
            $.touchSlider({
                auto : 0,
                startSlide :startSlide,
                galleryWrapId: 'tabWrap-a',
                thumb: '.li-tab',
                nowCls : 'li-now'
            });
        };
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
           $('.form-validate .txt,.form-validate .txta').focus(function () {
                var st = parseInt($('.all-main').scrollTop());
                var pt = parseInt($(this).position().top);
                $('.all-main').stop().animate({'scrollTop':st+pt-10},400);
           });
        };
    },
    regLoginTab : function () {//注册登录tab
        if ($('.btnLogin').length) {
            var me = this;
            var $tab = $('.tabTitle');
            var $cont = $('.p-tab');
            var $type = $('#regloginType');
            $tab.click(function() {
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
    listEventDetails: function() { //产品列表点击弹窗产品详情
        if ($('.fn-details').length) {
             var me=this;
             $('.popTabtitle').on('click',function () {
                 var indx = $('.popTabtitle').index(this);
                 $('.popTabtitleNow').removeClass('popTabtitleNow');
                 $(this).addClass('popTabtitleNow');
                 $('.poptab').hide().eq(indx).show();
                 return false;
             });
            $('.fn-details').on('click',function() { //查看详情
                var data = $(this).parents('.li-list').data('details');
                $is_collect=$(this).parents('.li-list').attr('is_collect');
               // alert($is_collect);
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

                    $('.scrollWrap').html($img);
                    $('.proDetail').find('.p-thumb').html($thumb);
                };
                if(data.imgs.length == 0){
                    $('.scrollWrap').html("");
                    $('.proDetail').find('.p-thumb').html("");
                };
                if (data.detail) {
                    $('.proDetail').find('.proIntro').html(data.detail);
                };
                me.buyPop   =  $.pop({
                    target: '.proDetail',
                    widthPer : 0.95,
                   beforePop: function() {//打开弹窗钱
                      var ww = $(window).width(),wh =$(window).height();
                      var sw = wh>ww?ww*0.85:wh*0.65;
                        $('.gallerybox').css({//设置相册高度，以便适应屏幕宽高
                            width: sw+'px',
                            height: sw+'px'
                        });
                        $('.proIntro').css({height:(sw+22)+'px'});//设置详情高度
                        $('.proDetail').css({height:(sw+65)+'px'});//设置显示框高度

                        if ($is_collect == 0) {//如果未收藏
                            $('.btn-setCollect').text('常用').attr('href','javascript:void(0)');
                        }
                        if ($is_collect > 0) {//如果已收藏
                            $('.btn-setCollect').text('不常用').attr('href','javascript:del_collect('+data.id+')').bind('click',function () {
                                sos.base.buyPop.removePop();
                                $.loadTip({
                                    content : '删除成功！',
                                    removeDelay : 800//1.5s,默认1s
                                });
                            });
                        };

                        $.touchSlider({
                            galleryWrapId: 'galleryWrap',
                            thumb: '.s-touchThumb'
                       })
                    },
                    closePop : function () {//关闭弹窗时重置弹窗内容
                        $('.scrollWrap').empty();
                        $('.proGallery').show();
                        $('.proIntro').empty().hide();
                        $('.popTabtitle').removeClass('popTabtitleNow').eq(0).addClass('popTabtitleNow');
                        $('.btn-setCollect').unbind('click');
                    }
                });
            });
        }
    },
    buyPop : null,
    listEventBuy: function() { //产品列表点击弹窗采购信息
        var me = this;
        if ($('.fn-buy').length) {
            $('.fn-buy').click(function() { //采购事件
                var proId = $(this).attr('proId');
                me.buyPop = $.pop({
                    cls: 'bookingPopBox',
                    target: '.bookingPop-'+proId,
                    height:230,
                    pos: 'bottom',
                    widthPer: 1,
                    beforePop: function() {
                        beforePop(proId);
                    }
                    // show : false
                });
            });
            $('.fn-inCart').click(function() {
                sos.base.buyPop.removePop();
                $.loadTip({
                    content : '购买成功！',
                    removeDelay : 1500//1.5s,默认1s
                });
            });

        };

        function beforePop(proId) {
            var $tc = $('.bookingPop-'+proId).find('.s-tc');
            $tc.click(function() {
                var _self =$(this);
                $tc.removeClass('s-tc-now');
                _self.addClass('s-tc-now');
                var $price=_self.attr('price');
                var attr_id=_self.attr('name');

                var $num = $(".drop-num-"+proId);
                $num.find('option[value=""]').remove();
                var num=$num.val();

                var htm_price=(num*$price).toFixed(2);
                $('.price_'+proId).html("￥"+htm_price);
                $('.price_'+proId).attr("nowprice",$price);
                $('.unit_'+proId).val(attr_id);
            });
        }

    },
    numAd: function() { //数字加减
        if ($('.fn-op-num').length) {
            var $fn = $('.fn-op-num');
            $fn.find('.em-op-d').click(function() { //减少
                var $num = $(this).next('.txt-num');
                var num = $num.val();
                var min = $num.attr('rel') || 1;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);
            });

            $fn.find('.em-op-a').click(function() { //增加
                var $num = $(this).prev('.txt-num');
                var num = $num.val();
                num = num * 1 + 1;
                $num.val(num);
            });

            $fn.find('.txt-num').keyup(function() { //按键操作
                var num = $(this).val();
                num = num.replace(/\D/g, '');
                num = (isNaN(num) ? 1 : num) * 1; //只能为数字
                num = num > 0 ? num : 1;
                $(this).val(num);
            });
        };
    },
    cartChkAll: function() {//购物车选择商品事件
        if ($('.chkall').length) {
            var limitPrice = 500;//临界价格值，如果每单临界值不同，可设置到页面dom属性上来获取
            var $t = $('.s-tipSel'),
                $t2 = $('.s-tipSel-2'),
                $go = $('.a-gotoBooking'),
                $one = $('.chkone'),
                $drop = $('.drop-num'),
                $all = $('.chkall');

            triggerStatus();//初始检查是否有已选中
            $one.click(function() {//单项点击事件
                if ($('.chkone:checked').length == $('.chkone').length) {//如果都选中则设置全选为真
                    $all.prop('checked',true);
                }else{
                    $all.prop('checked',false);
                };
                triggerStatus();
            });
            $all.click(function() { //全选点击事件
                if ($('.chkone:checked').length == $('.chkone').length) {//如果已经都全选则反选
                    $one.prop('checked',false);
                } else {//全选
                    $one.prop('checked',true);
                };
                triggerStatus();
            });

            $drop.change(function() {//数字下拉框变化事件
                var n = $(this).val();
                var price = $(this).attr('price');
                var oneSum = n*price;
                $(this).parents('.div-op').find('.s-price').text('￥'+oneSum.toFixed(2));//当前总价格赋值
                var indx = $drop.index(this);
                 if ($one.eq(indx).prop('checked')) {//如果当前被选中
                    triggerStatus();
                };
            });

            function triggerStatus() {//检查跟踪选择状态，设置提交状态
                if ($('.chkone:checked').length) {
                    if (sumPrice()) {//如果价格超过了500
                        $t.hide();
                        $go.show();
                    }else{
                        $t.hide();
                        $t2.show();
                        $go.hide();
                    };
                } else {
                    $t.show();
                    $go.hide();
                };
            }

            function sumPrice () {
                var allSum = 0;
                $drop.each(function(i, v) {
                    if ($one.eq(i).prop('checked')) {//如果当前被选中
                        var n = $(this).val();
                        var price = $(this).attr('price');
                        window.console && console.log(n,price);
                        oneSum = n*price;
                        allSum += oneSum;
                    };
                    //window.console && console.log($(this).val());
                });
                $('.em-totalPrice').text('￥'+allSum.toFixed(2))
                return allSum>=limitPrice?true:false;
                window.console && console.log(allSum);
            }

        };
    },
    renderDropDistinct : function () {//订单页
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
                var pName = $(this).find('option:selected').text();
                t.changeProvince(this.value,pName);
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
         var t1 = t1||'上海',t2=t2||'上海市',t3=t3||'黄浦区';
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
        // window.console && console.log(v1,t1,t2,t3);
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
        // window.console && console.log(t1,t2,t3);
          //$zip.text(v3||$('.drop-distinct option:first').val());
        $('#province').val(t1);
        $('#city').val(t2);
        $('#district').val(t3);
    }

};

$(function() {
    sos.base.init();


});
