/* Swipe */
function Swipe(a,b){"use strict";function c(){var c,d;for(n=m.children,q=n.length,n.length<2&&(b.continuous=!1),B.transitions&&b.continuous&&n.length<3&&(m.appendChild(n[0].cloneNode(!0)),m.appendChild(m.children[1].cloneNode(!0)),n=m.children),o=new Array(n.length),p=a.getBoundingClientRect().width||a.offsetWidth,m.style.width=n.length*p+"px",c=n.length;c--;)d=n[c],d.style.width=p+"px",d.setAttribute("data-index",c),B.transitions&&(d.style.left=c*-p+"px",h(c,r>c?-p:c>r?p:0,0));b.continuous&&B.transitions&&(h(f(r-1),-p,0),h(f(r+1),p,0)),B.transitions||(m.style.left=r*-p+"px"),a.style.visibility="visible"}function d(){b.continuous?g(r-1):r&&g(r-1)}function e(){b.continuous?g(r+1):r<n.length-1&&g(r+1)}function f(a){return(n.length+a%n.length)%n.length}function g(a,c){var d,e,g;if(r!=a){if(B.transitions){for(d=Math.abs(r-a)/(r-a),b.continuous&&(e=d,d=-o[f(a)]/p,d!==e&&(a=-d*n.length+a)),g=Math.abs(r-a)-1;g--;)h(f((a>r?a:r)-g-1),p*d,0);a=f(a),h(r,p*d,c||s),h(a,0,c||s),b.continuous&&h(f(a-d),-(p*d),0)}else a=f(a),j(r*-p,a*-p,c||s);r=a,A(b.callback&&b.callback(r,n[r]))}}function h(a,b,c){i(a,b,c),o[a]=b}function i(a,b,c){var d=n[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)"+"translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function j(a,c,d){var e,f;return d?(e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(m.style.left=c+"px",t&&k(),b.transitionEnd&&b.transitionEnd.call(event,r,n[r]),clearInterval(f),void 0):(m.style.left=(c-a)*(Math.floor(100*(g/d))/100)+a+"px",void 0)},4),void 0):(m.style.left=c+"px",void 0)}function k(){u=setTimeout(e,t)}function l(){t=0,clearTimeout(u)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z=function(){},A=function(a){setTimeout(a||z,0)},B={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b,c=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(b in c)if(void 0!==a.style[c[b]])return!0;return!1}(document.createElement("swipe"))};return a?(m=a.children[0],b=b||{},r=parseInt(b.startSlide,10)||0,s=b.speed||300,b.continuous=void 0!==b.continuous?b.continuous:!0,t=b.auto||0,v={},w={},y={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":A(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":A(this.transitionEnd(a));break;case"resize":A(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];v={x:b.pageX,y:b.pageY,time:+new Date},x=void 0,w={},m.addEventListener("touchmove",this,!1),m.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];w={x:c.pageX-v.x,y:c.pageY-v.y},"undefined"==typeof x&&(x=!!(x||Math.abs(w.x)<Math.abs(w.y))),x||(a.preventDefault(),l(),b.continuous?(i(f(r-1),w.x+o[f(r-1)],0),i(r,w.x+o[r],0),i(f(r+1),w.x+o[f(r+1)],0)):(w.x=w.x/(!r&&w.x>0||r==n.length-1&&w.x<0?Math.abs(w.x)/p+1:1),i(r-1,w.x+o[r-1],0),i(r,w.x+o[r],0),i(r+1,w.x+o[r+1],0)))}},end:function(){var a,c=+new Date-v.time,d=Number(c)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2,e=!r&&w.x>0||r==n.length-1&&w.x<0;b.continuous&&(e=!1),a=w.x<0,x||(d&&!e?(a?(b.continuous?(h(f(r-1),-p,0),h(f(r+2),p,0)):h(r-1,-p,0),h(r,o[r]-p,s),h(f(r+1),o[f(r+1)]-p,s),r=f(r+1)):(b.continuous?(h(f(r+1),p,0),h(f(r-2),-p,0)):h(r+1,p,0),h(r,o[r]+p,s),h(f(r-1),o[f(r-1)]+p,s),r=f(r-1)),b.callback&&b.callback(r,n[r])):b.continuous?(h(f(r-1),-p,s),h(r,0,s),h(f(r+1),p,s)):(h(r-1,-p,s),h(r,0,s),h(r+1,p,s))),m.removeEventListener("touchmove",y,!1),m.removeEventListener("touchend",y,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==r&&(t&&k(),b.transitionEnd&&b.transitionEnd.call(a,r,n[r]))}},c(),t&&k(),B.addEventListener?(B.touch&&m.addEventListener("touchstart",y,!1),B.transitions&&(m.addEventListener("webkitTransitionEnd",y,!1),m.addEventListener("msTransitionEnd",y,!1),m.addEventListener("oTransitionEnd",y,!1),m.addEventListener("otransitionend",y,!1),m.addEventListener("transitionend",y,!1)),window.addEventListener("resize",y,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){l(),g(a,b)},prev:function(){l(),d()},next:function(){l(),e()},getPos:function(){return r},getNumSlides:function(){return q},kill:function(){var a,b;for(l(),m.style.width="auto",m.style.left=0,a=n.length;a--;)b=n[a],b.style.width="100%",b.style.left=0,B.transitions&&i(a,0,0);B.addEventListener?(m.removeEventListener("touchstart",y,!1),m.removeEventListener("webkitTransitionEnd",y,!1),m.removeEventListener("msTransitionEnd",y,!1),m.removeEventListener("oTransitionEnd",y,!1),m.removeEventListener("otransitionend",y,!1),m.removeEventListener("transitionend",y,!1),window.removeEventListener("resize",y,!1)):window.onresize=null}}):void 0}(window.jQuery||window.Zepto)&&function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"cls",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?$(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),"easydrop"==c&&(f=r[c].rule(b,d,a)),r[c]&&b&&(f=r[c].rule(b,d,a)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},easydrop:{rule:function(a,b,c){var d=c.siblings(".combo").find(".combo-value").val();return d=$.trim(d),""===d?!1:!0},msg:function(){return"请选择..."}},remote:{rule:function(a,b){var d,e,c={};return c[b.key]=a,d=$.extend(c,b.data||{}),e=!1,$.ajax({url:b.url,data:d,async:!1,success:function(a){e=a.success},error:function(){alert("向服务器请求验证失败！")}}),e},msg:function(){return"您的填写不正确！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

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


var sos = sos || {}





sos.base = {
    init: function() {
        var me = this;
        me.exSubNav();
        me.extendSearch();
        me.listEventDetails();
        me.listEventBuy();
        me.subKindsEx();
        me.numAd();
        me.cartChkAll();
        me.regLoginTab();
        me.formValidate();

        me.renderDropDistinct();
    },

    buyPop:null,

    exSubNav: function() { //主导航点击展开子菜单
        var st = null;
        $('.fn-subnav').click(function() {
            st && clearTimeout(st);
            var $subNav = $(this).next('.ul-subnav');
            $subNav.show();
            st = setTimeout(function() {
                $subNav.hide();
            }, 4000);
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
    formV : null,
    formValidate : function () {//表单验证
        var me = this;
        if ($('.form1-validate').length) {
           me.formV =  $('.form1-validate').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btn1Validate',
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
        };
          if ($('.form3-validate').length) {
           me.formV =  $('.form3-validate').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btn3Validate',
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
        };
          if ($('.form2-validate').length) {
           me.formV =  $('.form2-validate').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btn2Validate',
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

            $('.fn-details').click(function() { //查看详情
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

                    $('.scrollWrap').html($img)
                    $('.proDetail').find('.p-thumb').html($thumb);
                };
                if(data.imgs.length == 0){
                    $('.scrollWrap').html("")
                    $('.proDetail').find('.p-thumb').html("");
                };
                if (data.detail) {
                    $('.proDetail').find('.proIntro').html(data.detail);
                };

                if($is_collect>0)
                {
                    $del="<a href='javascript:del_collect("+data.id+")'><span class='s-zp' >从常用配料中删除</span></a>";
                    $('.center').html($del);
                };
                if($is_collect == 0)
                {
                    $del=" <span class='s-op'>从常用配料中删除</span>"
                    $('.center').html($del);
                };
           me.buyPop   =  $.pop({
                    target: '.proDetail',
                    width: 288,
                   beforePop: function() {
                        $.touchSlider({
                            galleryWrapId: 'galleryWrap',
                            thumb: '.s-touchThumb'
                       })
                    }
                });

         $('.s-zp').click(function() {
                sos.base.buyPop.removePop();
                $.loadTip({
                    content : '删除成功！',
                    removeDelay : 800//1.5s,默认1s
                });
       });
            });
        }

          if ($('.fn1-details').length) {
             var me=this;
            $('.fn1-details').click(function() { //查看详情
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

                    $('.scrollWrap').html($img)
                    $('.proDetail').find('.p-thumb').html($thumb);
                };
                if(data.imgs.length == 0){
                    $('.scrollWrap').html("")
                    $('.proDetail').find('.p-thumb').html("");
                };
                if (data.detail) {
                    $('.proDetail').find('.proIntro').html(data.detail);
                };

                if($is_collect>0)
                {
                    $del="<a href='javascript:del_collect_2("+data.id+")'><span class='s-zp' >从常用配料中删除</span></a>";
                    $('.center').html($del);
                };
                if($is_collect == 0)
                {
                    $del=" <span class='s-op'>从常用配料中删除</span>"
                    $('.center').html($del);
                };

                    me.buyPop =   $.pop({
                    target: '.proDetail',
                    width: 288,
                   beforePop: function() {
                        $.touchSlider({
                            galleryWrapId: 'galleryWrap',
                            thumb: '.s-touchThumb'
                       })
                    }
                });



         $('.s-zp').click(function() {
                sos.base.buyPop.removePop();
                $.loadTip({
                    content : '删除成功！',
                    removeDelay : 800//1.5s,默认1s
                });
       });
            });
        }
    },



    listEventBuy: function() { //产品列表点击弹窗采购信息
        var me=this;
        if ($('.fn-buy').length) {
            $('.fn-buy').click(function() { //采购事件
                var $id=$(this).attr("id");
               var $pop = $.pop({
                    cls: 'bookingPopBox',
                    target: '.'+$id,
                    pos: 'bottom',
                    widthPer: 1,
                    beforePop: function() {
                        beforePop($id);
                    }
                    // show : false
                });
                me.buyPop = $pop;

            });
               $('.fn-inCart').click(function() {
                sos.base.buyPop.removePop();

            });
        };

        function beforePop($id) {
            var $tc = $('.'+$id).find('.s-tc');
            $tc.click(function() {
                var ix = $tc.index(this);
                $tc.removeClass('s-tc-now');
                $(this).addClass('s-tc-now');
                var $price=$(this).attr('id');
                var attr_id=$(this).attr('name');


                $('.price_'+$id).html("￥"+$price);
                $('.price_'+$id).attr("nowprice",$price);
                $('.unit_'+$id).val(attr_id);

            });

        };

    },







    numAd: function() {

       if ($('.fn-op-num').length) {
            var $fn = $('.fn-op-num');
            $fn.find('.em-op-d').click(function() { //减少

                var id=$(this).attr("goods_id");

                if($(".price_"+id).attr('nowprice'))
                {
                var price=$(".price_"+id).attr('nowprice');
                var $num = $(this).next('.txt-num');
                var num = $num.val();
                var min = $num.attr('rel') || 1;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);
              $(".price_"+id).text('￥'+(parseFloat(price)*num).toFixed(2)+"元");
               }

            });

            $fn.find('.em-op-a').click(function() { //增加

                var id=$(this).attr("goods_id");

                if($(".price_"+id).attr('nowprice'))
                {
                var price=$(".price_"+id).attr('nowprice');
                var $num = $(this).prev('.txt-num');
                var num = $num.val();
                num = num * 1 + 1;
                $num.val(num);
               $(".price_"+id).text('￥'+(parseFloat(price)*num).toFixed(2)+"元");
                }


            });

            $fn.find('.txt-num').keyup(function() { //按键操作
                 var id=$(this).next(".em-op-a").attr("goods_id");

                if($(".price_"+id).attr('nowprice'))
                {
                    var price=$(".price_"+id).attr('nowprice');
                var num = $(this).val();
                num = num.replace(/\D/g, '');
                num = (isNaN(num) ? 1 : num) * 1; //只能为数字
                num = num > 0 ? num : 1;
                $(this).val(num);
                $(".price_"+id).text('￥'+(parseFloat(price)*num).toFixed(2)+"元");
            }
            else $(this).val(1);
            });
        };




        /****购物车部分*****/
        //数字加减
        if ($('.fn-op-num').length) {
            var $fn = $('.fn-op-num');
            $fn.find('.em-op-f').click(function() { //减少
                var $num = $(this).next('.txt-cart');
                var num = $num.val();
                var min = $num.attr('rel') || 1;
                $a=num * 1 - 1;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);

               var rec_id=$(this).attr('name');
                Ajax.call('flow.php?act=reduce_num', 'rec_id=' + $.toJSON(rec_id), null, 'POST', 'JSON');

              var price=parseFloat($("#price_"+rec_id).attr('goods_price').replace("￥", "").replace("元", ""));

             $("#price_"+rec_id).html("￥"+(price*num).toFixed(2)+"元");
         $status=$("."+rec_id).attr("checked");
        if($status == "checked")
     {
         if($a>=1)
         {
         $amount = parseFloat($(".em-totalPrice").text().replace("￥",""));
         $new_amount=($amount-price).toFixed(2);
         $(".em-totalPrice").text("￥"+$new_amount);
     }
     }

            });

            $fn.find('.em-op-e').click(function() { //增加

             var rec_id=$(this).attr('name');
            Ajax.call('flow.php?act=add_num', 'rec_id=' + $.toJSON(rec_id), null, 'POST', 'JSON');
     var $num = $(this).prev('.txt-cart');
     var num = $num.val();
    //  var rec_id=$(".em-op-a").attr("name");
     var price=parseFloat($("#price_"+rec_id).attr('goods_price').replace("￥", "").replace("元", ""));

      num = num * 1 + 1;
     $num.val(num);
     $("#price_"+rec_id).html("￥"+(price*num).toFixed(2)+"元");
     $status=$("."+rec_id).attr("checked");
     if($status == "checked")
     {
         $amount = parseFloat($(".em-totalPrice").text().replace("￥",""));
         $new_amount=($amount+price).toFixed(2);
         $(".em-totalPrice").text("￥"+$new_amount);
     }
                // alert($('.change_price').text());
//                var price=parseInt($('.change_price').text());
//              alert($('.change_price').text());
//                var total=num*price;
//                $('.change_price').html(total);

            });



            $fn.find('.txt-cart').keyup(function() { //按键操作
                var goods        = new Object();
                var num = $(this).val();

                num = num.replace(/\D/g, '');
                num = (isNaN(num) ? 1 : num) * 1; //只能为数字
                num = num > 0 ? num : 1;
                $(this).val(num);
                var rec_id=  $(this).prev('.em-op-f').attr("name");
                goods.rec_id=rec_id;
                goods.num=num;

                Ajax.call('flow.php?act=add_multi_num', 'goods=' + $.toJSON(goods),null, 'POST', 'JSON');

      var price=parseFloat($("#price_"+rec_id).attr('goods_price').replace("￥", "").replace("元", ""));
      var orgin =   $("#price_"+rec_id).html().replace("￥", "").replace("元", "");
      $("#price_"+rec_id).html("￥"+(price*num).toFixed(2)+"元");
     $status=$("."+rec_id).attr("checked");
     if($status == "checked")
     {
         $amount = parseFloat($(".em-totalPrice").text().replace("￥",""));
         $new_amount=($amount-orgin+price*num).toFixed(2);
         $(".em-totalPrice").text("￥"+$new_amount);
     }

            });

        };
    },
    cartChkAll: function() {//购物车选择商品事件
        if ($('.chkall').length) {
            var $t = $('.s-tipSel'),
                $go = $('.a-gotoBooking'),
                $one = $('.chkone'),
                $all = $('.chkall');

            triggerStatus();//初始检查是否有已选中
            $one.click(function() {//单项点击事件
           // alert($(this).attr("checked"));
////               $status=$(this).attr("checked");
////               if($status == "checked")$(this).removeAttr('checked');
////               else $(this).attr("checked","checked");
               //勾选则加价格
                $amount= parseFloat($(".em-totalPrice").text().replace("￥",""));
                $rec_id=$(this).attr("name");
                $price=parseFloat($("#price_"+$rec_id).text().replace("￥","").replace("元",""));

               if($(this).attr("checked"))
               {
                   $sum=($amount+$price).toFixed(2);
               }
               else
               {
                   $sum=($amount-$price).toFixed(2);
               }
                $(".em-totalPrice").text("￥"+$sum);
                //
                if ($('.chkone:checked').length == $('.chkone').length) {//如果都选中则设置全选为真
                    $all.attr('checked', 'checked');
                }else{
                    $all.removeAttr('checked');
                };
                triggerStatus();
            });
            $all.click(function() { //全选点击事件
                if ($('.chkone:checked').length == $('.chkone').length) {//如果已经都全选则反选
                    //Ajax.call('flow.php?act=add_num', null, notselectall, 'POST', 'JSON');
                    $(".em-totalPrice").text("￥0");
                    $one.removeAttr('checked');
                } else {//全选
                    $one.attr('checked', 'checked');
                     Ajax.call('flow.php?act=checkall', null, selectall, 'POST', 'JSON');
                };
                triggerStatus();
            });
        };

            function selectall($result)
            {
                  if($result.error>0)
                  {
                      alert($result.amount);
                  }
                  else $(".em-totalPrice").text("￥"+$result.amount.toFixed(2));
            }

        function triggerStatus() {//检查跟踪选择状态，设置提交状态
            if ($('.chkone:checked').length) {
                $t.hide();
                $go.show();
            } else {
                $t.show();
                $go.hide();
            };
        }
    },

     provinceInit : function (v1,v2,v3) {
        var t = this;
        var provinceHtml = '';
        for (i in region.data.province) {
            var d = region.data.province[i];
            provinceHtml += '<option value="'+d.id+'">'+d.name+'</option>';
        }
        $('.drop-province').html(provinceHtml);
        var v1 = v1||$('.drop-province option:first').val();
        $('.drop-province').val(v1);
        t.changeProvince(v1,v2,v3);

    },
        addOptHtml : function (data,val) {
        var arr = data[val];
        var h = '';
        var aLen = arr.length;
        for (i = 0; i < aLen; i++) {
            h += '<option value="'+arr[i].id+'">'+arr[i].name+'</option>';
        }
        return {html:h,arr:arr};
    },



           renderDropDistinct : function () {//订单页
        var t = this;
        if ($('.drop-province').length) {
            if($('#b-d').text()==''){//如果默认没有历史省市区
                $('.s-historyPCD').hide();
                $('.dropPCD').show();
                 t.provinceInit(330000,330400,null); //'310000'上海
            }else{
                $('#province').val($('#b-p').text());
                $('#city').val($('#b-c').text());
                $('#district').val($('#b-d').text());
            }

            //初始化
            $('.em-repairPCD').click(function () {
                $('.s-historyPCD').hide();
                $('.dropPCD').show();
                 t.provinceInit(330000,330400,null); //'310000'上海
            });
            //newAdd&&t.provinceInit();
            // change province
            $('.drop-province').change(function () {
                t.changeProvince(this.value);
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
    changeProvince : function (v1,v2,v3) {
        var t = this;
        //var $zip = $('.b-zipcode');
        var cityData = t.addOptHtml(region.data.city,v1);
        $('.drop-city').html(cityData.html);
        $('.drop-city').val(v2);
        var disParId = v2||cityData.arr[0].id;
        var districtData = t.addOptHtml(region.data.district,disParId);
        $('.drop-distinct').html(districtData.html);
        if (v3) {$('.drop-distinct').val(v3);}
          //$zip.text(v3||$('.drop-distinct option:first').val());
        $('#province').val($('.drop-province option:selected').text());
        $('#city').val($('.drop-city option:selected').text());
        $('#district').val($('.drop-distinct option:selected').text());

    }

};

$(function() {
    sos.base.init();


});

