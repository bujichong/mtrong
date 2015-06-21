/* smartSearch */
!function(){$.fn.smartSearch=function(a){var b,c;return a=$.extend({url:null,keyString:"key"},a||{}),b=$(this),c={init:function(){var c=this;c.appendHtml(),b.on("focus",function(){c.target=$(this),c.placeholder=$(this).attr("placeholder"),c.url=a.url||$(this).attr("rel"),c.showSmart()}),c.smartKeyUp(),c.okAndBack()},target:null,placeholder:null,url:null,appendHtml:function(){var a='<div class="smartBox"><div class="smartHead"><span class="a-headBack a-smartBack">返回</span><span class="s-smartTxt"><input type="text" class="txt txt-smartKey" name="txt" /></span><span class="a-headOk a-smartOk">确定</span></div><div class="smartCont"><ul class="ul-smart"></ul></div></div>';0==$(".smartBox").length&&$("body").append(a)},showSmart:function(){var a=this;$("body").height()>$(window).height()&&$("body").addClass("body-fixed"),$(".smartBox").addClass("smartBoxIn"),$(".txt-smartKey").attr("placeholder",a.placeholder).focus()},clearSmart:function(){$("body").removeClass("body-fixed"),$(".smartBox").removeClass("smartBoxIn"),$(".txt-smartKey").val(""),$(".ul-smart").html("")},smartKeyUp:function(){var b=this;$(".txt-smartKey").on("keyup",function(){var c=$(this).val();$.ajax({type:"GET",url:b.url+"?"+a.keyString+"="+c,success:function(a){if(a.success){var c="";$.each(a.data,function(a,b){c+='<li class="li-smart"><span class="a-smart">'+b+"</span></li>"}),$(".ul-smart").html(c),$(".li-smart").on("tap",function(){var a=$(this).text();return b.target.val(a),b.clearSmart(),!1})}}})})},okAndBack:function(){var a=this;$(".a-smartBack").on("tap",function(){a.clearSmart()}),$(".a-smartOk").on("tap",function(){var b=$(".txt-smartKey").val();a.target.val(b),a.clearSmart()})}},c.init(),$(this)}}(window.Zepto);

/* pop */
$.pop=function(a){function h(a){function h(){var f,g,b=$(window).width();$(window).height(),a.showMask&&c.css({bottom:"0px"}),f=a.width?a.width:b*a.widthPer,f=a.maxW&&f>a.maxW?a.maxW:f,d.css({height:a.height}),g=d.height(),"center"==a.pos&&(d.css({left:"50%",top:"-150%",width:f,marginLeft:-f/2,marginTop:-g/2}),setTimeout(function(){d.css({top:"50%"})},100)),"bottom"==a.pos&&(d.css({left:"0px",right:"0px",bottom:"-100%"}),setTimeout(function(){d.css({bottom:"0px"})},100)),"top"==a.pos&&(d.css({left:"0px",right:"0px",top:"-100%"}),setTimeout(function(){d.css({top:"0px"})},100))}var a=$.extend(b,a||{});a.cls&&d.addClass(a.cls),d.append(f),a.title&&d.append(e.html(a.title)),d.append(g),0==$(".so-openmask").length&&$("body").append(c),$("body").append(d),a.content&&g.append(a.content),a.target&&g.append($(a.target).show()),a.beforePop(d),h(),$(window).resize(function(){h()})}function i(){$("body").append($(b.target).hide()),b.closePop(),c.remove(),d.remove(),$("html,body").removeClass("body-fixed").css({height:"auto"})}var b=$.extend({cls:null,width:null,widthPer:.9,pos:"center",title:null,maxW:null,height:null,target:null,content:null,show:!0,showMask:!0,maskClick:!0,beforePop:function(){},closePop:function(){}},a||{}),c=$('<div class="so-openmask"></div>'),d=$('<div class="so-popbox"></div>'),e=$('<div class="so-poptitle"></div>'),f=$('<span class="s-sopop-close">X</span>'),g=$('<div class="so-popbox-cont"></div>');return b.show&&h(),b.maskClick&&c.click(function(){i()}),f.click(function(){i()}),{wrap:d,removePop:i,showPop:h}},$.alert=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,removeDelay:0,callback:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn">确定</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-btn").click(function(){b.callback(),e.removePop()}),b.removeDelay&&setTimeout(function(){e.removePop()},b.removeDelay)},$.confirm=function(a){var b=$.extend({title:"提示",content:null,widthPer:.8,sure:function(){},cancel:function(){}},a||{}),c='<div class="d-content">'+b.content+"</div>",d='<p class="p-sopop-btn"><span class="s-sopop-btn s-sopop-sure">确定</span><span class="s-sopop-btn s-sopop-cancel">取消</span></p>',e=$.pop($.extend(b,{content:c+d}));e.wrap.find(".s-sopop-sure").click(function(){b.sure(),e.removePop()}),e.wrap.find(".s-sopop-cancel").click(function(){b.cancel(),e.removePop()})},$.loadTip=function(a){var b=$.extend({cls:"so-loadtip",content:null,widthPer:.8,width:null,removeDelay:1e3},a||{}),c=$.pop(b);b.removeDelay&&setTimeout(function(){c.removePop()},b.removeDelay)};

/* soUploadImg */
!function(){$.fn.soUploadImg=function(a){var b,c;return a=$.extend({accept:"image",quality:.7,afterLoadBack:function(a){window.console&&console.log(a)}},a||{}),b=$(this),c={init:function(){var a=this;a.appendFile(),a.triggerFile(),a.fileChangeE()},target:null,appendFile:function(){if(0==$("#soLoadImgFile").length){var b='<input id="soLoadImgFile" style="display:none;" accept="'+a.accept+'/*" type="file" capture="camera" />';$("body").append(b)}},triggerFile:function(){var a=this;b.on("tap",function(){a.target=$(this),$("#soLoadImgFile").trigger("click")})},fileChangeE:function(){var b=this;$("#soLoadImgFile").on("change",function(){lrz(this.files[0],{before:function(){console.log("压缩开始")},fail:function(a){console.error(a),$.loadTip&&$.loadTip({content:"上传失败，请重新上传！",removeDelay:1500})},always:function(){console.log("压缩结束")},done:function(c){console.log(c),b.afterUpLoad(c,c.base64,c.base64.length*a.quality)}})})},afterUpLoad:function(b,c,d){var e=this,f=new Image;f.src="string"==typeof c?c:URL.createObjectURL(c),f.onload=function(){var c={me:e.target,results:b,src:f.src,size:d,width:f.width,height:f.height};a.afterLoadBack(c),f=null}}},c.init(),b}}(window.Zepto);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"class",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:".btn-submit",validateBtn:".btn-validate",validateBack:function(){},submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.off("blur"),$submitBtn&&$submitBtn.off("touchend"),$inputs=_self.find("input,select,textarea"),o.inInputs&&$inputs.add(o.inInputs),o.exInputs&&$inputs.not(o.exInputs),$submitBtn=$(o.submitBtn),$validateBtn=$(o.validateBtn),o.validate&&($submitBtn.on("touchend",function(a){a.preventDefault(),vv._submitValidate(!0)}),$validateBtn.on("touchend",function(a){a.preventDefault(),vv._submitValidate(!1)}),$inputs.on("blur",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(a){var b=!0,c=[];$inputs.each(function(){var a=vv._inputCheck(this);!a.state&&c.push(this),b=b&&a.state}),b?a?o.submit(_self):o.validateBack(_self):o.fail(_self,c)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),r[c]&&b&&(f=r[c].rule(b,d)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){$inputs.unbind("blur.validate");var b=$(a).find("input,select,textarea");return $inputs=$inputs.add(b),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){$inputs.unbind("blur.validate");var b=$(a).find("input,select,textarea");return $inputs=$inputs.not(b),b.removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^\w+$/.test(a)},msg:function(){return"只能用英文字母、数字和下划线"}},baseCnChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},plateNum:{rule:function(a){return/^[A-Za-z0-9]{6}$/.test(a)},msg:function(){return"请填写正确的车牌号码！"}},remote:{rule:function(a,b){var d,e,c={};return c[b.key]=a,d=$.extend(c,b.data||{}),e=!1,$.ajax({url:b.url,data:d,async:!1,success:function(a){e=a.success},error:function(){alert("向服务器请求验证失败！")}}),e},msg:function(){return"您的填写不正确！"}}})}(window.jQuery||window.Zepto);


var sos = sos || {};

sos.base = {
    init: function() {
        var me = this;
        me.markClass();//打分
        me.exInSidePop();//展开搜索右侧边面版
        me.exInSideNav();//展开搜索侧边栏
        me.smartSearch();//smartSearch联想搜索
        me.formValidate();//通用表单验证事件
        me.skillAddValidate();//技能增加表单验证事件
        me.skillInEdit();//编辑技能
        me.repairEmail();//修改邮箱地址[个人信息页]
        me.repairPhone();//修改手机号码[个人信息页]
        me.sendPhoneValidCode();//发送手机验证码[个人信息页]
    },
    markClass : function ($pro) {
        if ($('.prosMarkBox').length) {
            var proR = ['入门','初级','中级','熟练','精通'];
            $pro = $pro || '.em-pro';
            $($pro).on('tap',function() {
                var ix = $(this).index();
                var mark = ix+1;
                var $p = $(this).parents('.p-item');
                $p.find('.s-pro').attr('class','s-pro s-pro-'+mark);
                $p.find('.s-info').html('('+proR[ix]+')');
                $p.find('.txt-hide').val(mark);
            });
        };
    },
    smartSearch : function () {
        if ($('.txt-smart').length) {
            $('.txt-smart').smartSearch({
                keyString:"key"
            });
        };
    },
    exInSideNav : function () {
        var me = this;
        if ($('.headHandler').length) {
            $('.headHandler').on('tap',function () {//handler点击时收起或展开
                if ($('.subnav').hasClass('subnav-move')) {
                    me.hideSideNav();
                }else{
                    me.showSideNav();
                };
            });
            $('.all-main-d').on('swipeRight',function () {
                me.showSideNav();
            }).on('swipeLeft',function () {
                me.hideSideNav();
            });
            $('.subnav').on('swipeLeft',function () {
                 me.hideSideNav();
            });
        };
    },
    showSideNav : function () {
        var me = this;
        $('.all-main-d').addClass('all-main-move');
        $('header').addClass('header-move');
        $('.fix-nav').addClass('fix-nav-move');
        $('.subnav').addClass('subnav-move');
        $('body').addClass('overhide');
        $('.s-fileExin').hide();
        me.inSidePop();
    },
    hideSideNav : function () {
        $('.all-main-d').removeClass('all-main-move');
        $('header').removeClass('header-move');
        $('.fix-nav').removeClass('fix-nav-move');
        $('.subnav').removeClass('subnav-move');
        $('body').removeClass('overhide');
        $('.s-fileExin').show();
    },
    sc : {
        $handler : $('.s-exin'),
        $mask : $('.so-openmask'),
        $pop : $('.popSideBox'),
        handlerCls : 's-ex',
        maskCls : 'so-showmask',
        popWith : '14em'
    },
    exInSidePop : function () {
        var me = this;
        if ($('.s-exin').length) {
            me.sc.$handler.on('tap',function () {//handler点击时收起或展开
                if($(this).hasClass(me.sc.handlerCls)){
                    me.inSidePop();//收起sidepop
                }else{
                    me.exSidePop();//展开sidepop
                }
            });
            me.sc.$pop.on('swipeRight',function () {//pop向右滑动，收起
                 me.inSidePop();
            });
        };
    },
    exSidePop : function () {
        var sc = this.sc;
        sc.$handler.addClass(sc.handlerCls);
        sc.$mask.addClass(sc.maskCls);
        sc.$pop.css({
            right : '1px'
        });
    },
    inSidePop : function () {
        var sc = this.sc;
        sc.$handler.removeClass(sc.handlerCls);
        sc.$mask.removeClass(sc.maskCls);
        sc.$pop.css({
            right : -sc.popWith*1
        });
    },
    formV : null,
    formValidate : function () {//表单验证
        var me = this;
        if ($('.form-validate').length) {
           me.formV =  $('.form-validate').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btnValidate',
                submit : function (form) {//默认验证成功提交submit事件
                    window.console && console.log(form.serializeObject());
                    window.console && console.log('验证通过，提交登录！');
                    form.submit();
                    return false;
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
    skillAddValidate : function () {
        if ($('.form-validateSkill').length) {
            var OneSkillHtml = '<div class="addOneSkill"><p class="p-item"><input type="text" class="txt" name="name" validate="{required:\'请填写技能名称\'}" placeholder="技能名称" /></p>'+
            '<div class="p-item prosBox prosMarkBox">'+
            '<span class="s-pro"><em class="em-pro em-pro-1"></em><em class="em-pro em-pro-2"></em><em class="em-pro em-pro-3"></em><em class="em-pro em-pro-4"></em><em class="em-pro em-pro-5"></em></span><span class="s-info">(未评)</span>'+
            '<input type="hidden" class="txt-hide" name="txt" value=""  validate="{required:\'请点击评定技能水平\'}" /></div>'+
            '</div>';

            var validateSkill = $('.form-validateSkill').soValidate({//验证登录弹窗里的表单
                submitBtn : '.btnValidate',
                submit : function (form) {//默认验证成功提交submit事件
                    window.console && console.log(form.serializeObject());
                    window.console && console.log('验证通过，提交登录！');
                    form.submit();
                    return false;
                },
                validateBack : function (form) {
                    $('.addNewSkillBox').append(OneSkillHtml);
                    validateSkill.addArea($('.addOneSkill').last());
                    // sos.base.formValidate();
                    sos.base.markClass($('.prosMarkBox').last().find('.em-pro'));
                },
                fail : function (form,failInputs) {//验证失败
                    var $failF = $(failInputs[0]);
                    $failF.focus();
                }
            });
        };
    },
    skillInEdit : function () {
        if ($('.a-editSkill').length) {
            var $txt = $('.s-skillTxt'),
            $sInput = $('.s-skillInput'),
            $input = $('.txt-skillName'),
            $submit =$('.a-submitSkill');
            $prosBox = $('.prosBox');
            $('.a-editSkill').on('tap',function () {
                $input.val($txt.text());
                $txt.addClass('none');
                $sInput.removeClass('none');
                $submit.removeClass('none');
                $prosBox.addClass('prosMarkBox');
                sos.base.markClass();
                return false;
            });
        };
    },
    repairEmail : function () {//修改验证邮箱 [个人信息页]
        if ($('.a-repairEmail').length) {
            $('.a-repairEmail').on('tap',function () {
                if ($(this).hasClass('bg-grey')) {
                    $(this).removeClass('bg-grey');
                    var val = $('.s-repairEmail').addClass('none').find('.txt').val();
                    $('.s-readEmail').removeClass('none').text(val);
                }else{
                    $(this).addClass('bg-grey');
                    var val = $('.s-readEmail').addClass('none').text();
                    $('.s-repairEmail').removeClass('none').find('.txt').val(val);
                };
                return false;
            });
        };
    },
    repairPhone : function () {//修改验证手机 [个人信息页]
        if ($('.a-repairPhone').length) {
            $('.a-repairPhone').on('tap',function () {
                if ($(this).hasClass('bg-grey')) {
                    var $txt = $('.txt-userPhone');
                    var v = $.trim($txt.val());
                    if(v!==''&&(/^((1)+\d{10})$/.test(v))){//如果输入框有值并且粗验为手机号码
                        $txt.removeClass('txt-err');
                        $(this).removeClass('bg-grey');
                        var val = $('.s-repairPhone').addClass('none').find('.txt').val();
                        $('.s-readPhone').removeClass('none').text(val);
                    }else{
                        $txt.addClass('txt-err');
                        //.val('').attr('placeholder','请输入正确的手机号');
                    }
                }else{
                    $(this).addClass('bg-grey');
                    var val = $('.s-readPhone').addClass('none').text();
                    $('.s-repairPhone').removeClass('none').find('.txt').val(val);
                }
                return false;
            });
        };
    },
    sendPhoneValidCode : function () {
        if($('.a-getPhoneValidCode').length){
            $('.a-getPhoneValidCode').on('tap',function () {
                var _self = $(this);
                var $txt = $('.txt-userPhone');
                var v = $.trim($txt.val());
                if(v!==''&&(/^((1)+\d{10})$/.test(v))){//如果输入框有值并且粗验为手机号码
                    //执行发送验证码
                    $txt.removeClass('txt-err');
                    _self.addClass('none');
                    $('.p-phoneValidCode').removeClass('none');//验证框显示
                    $('.p-fn-validatePhone').addClass('none');//修改手机号隐藏
                    $('.s-getedValidCode').removeClass('none');
                    var $second = $('.em-second');
                    var s = $second.attr('rel')*1||30;
                    var changeS = setInterval(function () {
                        if (s>0) {
                            s--;
                            $second.text(s);
                        }else{
                            clearInterval(changeS);
                            _self.removeClass('none');
                            $('.s-getedValidCode').addClass('none');
                        };
                    },1000);
                }else{//如果没有输入正确的手机号
                    $txt.addClass('txt-err');
                    //.val('').attr('placeholder','请输入正确的手机号');
                }
            });
        }
    }

};

$(function() {
    sos.base.init();
});
