/* json */
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,h,g=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,h=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)h[c]=str(c,i)||"null";return e=0===h.length?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=0===h.length?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

(function () {
	//jQuery.cookie
	jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};
	/* hoverClass */
	$.fn.hoverClass=function(a,b,c){var d=this;return d.each(function(e){d.eq(e).mouseenter(function(){$(this).addClass(a),b&&b(this)}),d.eq(e).mouseleave(function(){$(this).removeClass(a),c&&c(this)})}),d};
	/* textFocus */
	$.fn.textFocus=function(a){var b,c;return a=$.extend({val:null,focusCls:"txt-focus",changeCls:"txt-change",keyback:function(){}},a||{}),b=a.focusCls,c=a.changeCls,this.each(function(){var d=$(this),e=null==a.val?$(d).val():a.val;d.val(e),d.focus(function(){d.val()==e&&d.val(""),b&&d.addClass(b)}),d.blur(function(){""==d.val()&&d.val(e),b&&d.removeClass(b)}),c&&d.keyup(function(){d.val()!=e&&""!=d.val()?d.addClass(c):d.removeClass(c),a.keyback(d)})}),this};

})(jQuery);

/* soLazy */
(function(a){a.fn.extend({soLazy:function(h){h=a.extend({type:"scroll",imgTag:"src2",defHeight:40,defDelay:4000},h||{});var b=a(this);var d=b.find("img"),f=h.imgTag;if(h.type=="scroll"){var c=function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-h.defHeight};var g=function(){d.each(function(){if(a(this).offset().top<=c()){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}}})};g();a(window).bind("scroll",function(){g()})}if(h.type=="delay"){var e=setTimeout(function(){d.each(function(){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}})},h.defDelay)}return b}})})(jQuery);

/* soScrollTo */
jQuery.extend(jQuery.easing,{easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c}}),function(a){a.fn.soScrollTo=function(b){var c;b=a.extend({direction:"y",speed:800,easeType:"easeInOutExpo",dis:0},b||{}),c=a(this),c.click(function(){var d,c=a(this).attr("href");return c=a("#"!=c?c:"body"),c.length&&(d={t:(c.offset().top+b.dis)||0,l:(c.offset().left+b.dis)||0},"x"==b.direction?a("html,body").stop().animate({scrollLeft:d.l},b.speed,b.easeType):a("html,body").stop().animate({scrollTop:d.t},b.speed,b.easeType)),!1})}}(jQuery);

/* soChange 1.6.2 */
(function(a){a.fn.extend({soChange:function(b){b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:true,slideTime:1000,autoChange:true,clickFalse:true,overStop:true,changeTime:5000,delayTime:300,callback:function(){}},b||{});var h=a(this);var i;var k=h.size();var e=0;var g;var c;var f;function d(){if(e!=g){if(b.thumbObj){a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass)}if(b.slideTime<=0){h.eq(e).hide();h.eq(g).show()}else{if(b.changeType=="fade"){h.eq(e).fadeOut(b.slideTime);h.eq(g).fadeIn(b.slideTime)}else{h.eq(e).slideUp(b.slideTime);h.eq(g).slideDown(b.slideTime)}}if(b.callback){b.callback(e,g)}e=g}}function j(){g=(e+1)%k;d()}h.hide().eq(0).show();if(b.thumbObj){i=a(b.thumbObj);i.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass);i.click(function(){g=i.index(a(this));d();if(b.clickFalse){return false}});if(b.thumbOverEvent){i.hover(function(){g=i.index(a(this));f=setTimeout(d,b.delayTime)},function(){clearTimeout(f)})}}if(b.btnNext){a(b.btnNext).click(function(){if(h.queue().length<1){j()}return false})}if(b.btnPrev){a(b.btnPrev).click(function(){if(h.queue().length<1){g=(e+k-1)%k;d()}return false})}if(b.autoChange){c=setInterval(j,b.changeTime);if(b.overStop){h.hover(function(){clearInterval(c)},function(){c=setInterval(j,b.changeTime)})}}}})})(jQuery);

/* sobox 2.0 */
!function(a,b){a.sobox={maskIndex:0,showMask:function(c){var e,f,g,d=this;return c?(e=a(".so-openmask"),e.length?d.maskIndex++:(e=a('<div class="so-openmask"></div>'),a("body").append(e),d.maskIndex=1),f="undefined"==typeof b.body.style.maxHeight?b:window,g=a(f).height()-18,e.height(c?g+20:0),a(window).resize(function(){var b=a(f).height()-18;e.height(c?b+20:0)}),e.css("z-index",1e3+10*d.maskIndex)):e=null,e},show:function(b,c,d){var e=this,f=a(b.obj),g=e.showMask(c);return e.setPos(b),b.onlyOne&&a("body").data("soonlyone",!0),f.css("z-index",1002+10*e.maskIndex).fadeIn(),f.find(".s-close").bind("click",function(){e.hide(f)}),d&&d(),g},hide:function(b,c,d){var e=this,f=a(".so-openmask");a(b).fadeOut("fast",function(){d&&d()}),c&&(e.maskIndex--,f.css("z-index",1e3+10*e.maskIndex),0==e.maskIndex&&f.remove()),a(b).find(".s-close").unbind("click")},drag:function(c,d){function g(a){null==a&&(a=window.event),e.css({opacity:"0.4",left:a.clientX-posX+"px",top:a.clientY-posY+"px"})}var e=a(c),f=a(d);f.mousedown(function(c){c||(c=window.event),posX=c.clientX-parseInt(e.css("left")),posY=c.clientY-parseInt(e.css("top")),a(b).bind("mousemove.drag",function(a){g(a)})}),a(b).mouseup(function(c){c.target==f.get(0)&&(a(b).unbind("mousemove.drag"),e.css({opacity:"1"}))})},setPos:function(c){var e,f,g,h,i,j,k,l,m,n;switch(c=a.extend({mode:"center",obj:null,pos:[0,0],offset:[0,0]},c),e=a(c.obj),f=Math.floor(e.height()/2),g=Math.floor(e.width()/2),h=a(window).scrollTop(),i=a(window).height(),j=c.pos[0],k=c.pos[1],l=c.offset[0],m=c.offset[1],e.css({position:"fixed"}),"undefined"==typeof b.body.style.maxHeight&&(n=e.find("select"),a("select").not(n).hide()),c.mode){case"win":e.css({left:j+l,top:k+m}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+k+m});break;case"doc":e.css({position:"absolute",left:j+l,top:k+m});break;case"tc":e.css({left:"50%",top:m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+m});break;case"bc":e.css({left:"50%",bottom:m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+m+i});break;default:e.css({top:"50%",left:"50%",marginTop:-f-10+m,marginLeft:-g+l}),"undefined"==typeof b.body.style.maxHeight&&e.css({position:"absolute",top:h+i/2})}},pop:function(b){function j(i){var j,l,m;b=a.extend(b,i||{}),b.showTitle&&e.append(f),b.outCloseBtn&&g.addClass("s-sopop-out-close"),e.append(g).append(h),b.height&&"iframe"!=b.type&&e.css("height",b.height+"px"),e.css({visibility:b.visibility?"visible":"hidden"}),"content"==b.type&&h.html(b.content),"target"==b.type&&(j=a(b.target).show(),h.append(j)),"iframe"==b.type&&(l=a('<iframe id="'+b.iframeID+'" name="'+b.iframeID+'" src="'+b.iframe+'" width="100%" height="'+b.height+'" frameborder="0" scrolling="auto"></iframe>'),h.html(l)),"ajax"==b.type&&h.load(b.ajax.url,b.ajax.data,function(){c.setPos({mode:b.posType,obj:e,pos:b.pos,offset:b.offset}),b.ajax.callback&&b.ajax.callback()}),b.btn.length>0&&(m=a('<p class="p-so-popBtn"></p>'),a.each(b.btn,function(){var b=a.extend({cls:null,text:"确定",link:"#",removePop:!0,callback:function(){}},this),c=a('<a class="a-sopop-btn" href="'+b.link+'"><span class="s-sopop-btn">'+b.text+"</span></a>");null!==b.cls&&c.addClass(b.cls),c.bind("click",function(){return b.callback&&b.callback(k)&&k(),b.removePop&&k(),"#"===b.link?!1:!0}),m.append(c)}),e.append(m)),a("body").append(e),b.showTitle&&b.drag&&(f.addClass("h2-sopop-move"),c.drag(e,f)),b.beforePop(e,f,g,h),d=c.show({mode:b.posType,obj:e,pos:b.pos,offset:b.offset,onlyOne:b.onlyOne},b.showMask,b.onPop(e)),g.bind("click",function(){k()}),d&&b.maskClick&&d.bind("click",function(){k()})}function k(d){b=a.extend(b,d||{}),c.hide(e,b.showMask),a("body").removeData("soonlyone"),null!=b.target&&a(b.target).appendTo("body").hide(),e.remove(),b.closePop()}var d,e,f,g,h,i,c=this;return b=a.extend({type:"content",target:null,content:null,iframe:null,iframeID:"sopop-iframe",ajax:{url:null,data:null,callback:function(){}},posType:"center",pos:[0,0],offset:[0,0],cls:null,width:400,height:null,defaultShow:!0,visibility:!0,title:"提示",showTitle:!0,outCloseBtn:!1,showMask:!0,onlyOne:!1,drag:!0,maskClick:!0,btn:[],beforePop:function(){},onPop:function(){},closePop:function(){}},b||{}),e=a('<div class="so-popbox '+(b.cls?b.cls:"")+'" style="width:'+b.width+'px;display:none;"></div>'),f=a('<h2 class="h2-sopop"><span class="s-sopop-title">'+b.title+"</span></h2>"),g=a('<span class="s-sopop-close">[关闭]</span>'),h=a('<div class="so-popbox-cont"></div>'),i=a("body").data("soonlyone"),b.defaultShow&&!i&&j(),{wrap:e,mask:d,opt:b,removePop:k,showPop:j}},alert:function(a,b,c){var d=this;d.pop({cls:"so-popAlert",title:a,width:360,content:b,btn:[{text:"确定"}],closePop:c})},confirm:function(a,b,c,d){var e=this;e.pop({cls:"so-popConfirm",title:a,width:360,content:b,btn:[{text:"确定",callback:function(){c&&c()}},{text:"取消",cls:"a-sopop-cancel",callback:function(){d&&d()}}]})},tip:function(b){var e,c=this,d=null;return b=a.extend({cls:"so-popTip",showTitle:!1,posType:"tc",showMask:!1,width:250,stayTime:5e3,offset:[0,5],closePop:function(){d&&clearTimeout(d)}},b||{}),e=c.pop(b),b.stayTime>0&&(d=setTimeout(function(){e.removePop()},b.stayTime)),e},loading:function(b){var d,c=this;return b=a.extend({type:"content",cls:"so-loading",showTitle:!1,maskClick:!1,width:80,height:36,content:"",stayTime:0},b||{}),d=c.pop(b),b.stayTime>0&&setTimeout(function(){d.removePop()},b.stayTime),{open:d.showPop,close:d.removePop}}},a.fn.extend({soIframePop:function(b){var c=a.extend({type:"iframe",targetTag:"href",splitString:"#soIframe?",width:800,height:480,showTitle:!1},b||{}),d=[];return this.each(function(){var g,h,b=a(this),e=b.attr(c.targetTag).split(c.splitString),f=e[0];par=e[1]?e[1].split("&"):"",g={},a.each(par,function(){var a=this.split("=");g[a[0]]=a[1]}),c=a.extend(c,g||{}),c.showTitle="true"==c.showTitle?1:+c.showTitle,c.iframe=f,c.defaultShow=!1,h=a.sobox.pop(c),d.push(h),b.click(function(){return h.showPop(),a(this).data("iframePop",h),!1})}),d},soSidePop:function(b){var c=a(this),d=b.event||"click",e=null;return c.bind(d,function(c){var d=a(this).offset(),f="mouse"==b.por?[c.pageX,c.pageY]:[d.left,d.top],g=a.extend({showMask:!1,posType:"doc",por:"mouse",pos:f,offset:[10,10],onlyOne:!0,returnFalse:!0},b||{});return e=a.sobox.pop(g),g.returnFalse?!1:void 0}),1==b.leaveHide&&c.bind("mouseout",function(){e&&e.removePop()}),c},soOverTip:function(b){var c=a(this),d=a.extend({cls:"so-overTip",showMask:!1,posType:"doc",offset:[10,10],showTitle:!1,onlyOne:!0},b||{}),e=null;return c.mouseenter(function(b){d.pos=[b.pageX,b.pageY],e=a.sobox.pop(d)}).mouseleave(function(){e.removePop()}),c},clickPop:function(b){var c;b=a.extend({optAll:null},b||{}),c=a(this),c.click(function(){var f,g,h,j,c=a(this).attr("rel"),d=this,e=a(this).attr("popType")||"target";if(c){for(f=b.optAll,g=c.split("."),h=g.length,i=0;h>i;i++)f=f[g[i]];j=c.replace(".","_"),optT=a.extend({title:a(this).text(),type:e,target:a("#"+j),iframe:a(this).attr("href")},f),optT.beforePop=function(a,b,c,e){f.beforePop&&f.beforePop.call(d,a,b,c,e)},b.optAll.$pop=a.sobox.pop(optT)}})}})}(jQuery,document);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"class",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?$(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r.required.rule(b)),r[c]&&b&&(f=r[c].rule(b,d)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clear:function(){_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,clear:vv.clear,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},remote:{rule:function(a,b){var c={};c[b.name]=a,$.ajax({url:b.url,data:c,success:function(a){return a},error:function(){alert("向服务器请求验证失败！")}})},msg:function(){return"您的填写不正确！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

var mTrong = mTrong||{};

mTrong.base = {
	init : function () {
		var t = this;
		t.lazy();
		t.loginTxt();
		t.wx2wHover();
		//t.cartManyE();
		t.mainKindNav();
		t.favHome();
		t.navFix();

		t.proHover();
		t.favAnimate();
		t.activePopLogin();
		t.miniCartGet();
		t.eachCoutdown();
		$('.miniDrop').hoverClass('minicart-over');
		$('.js-scorllTo').soScrollTo();
		$(window).scroll(function () {
			var $backTop = $('.a-backtop');
			if ($(document).scrollTop()>300) {$backTop.show();}else{$backTop.hide();};
		});
	},
	lazy : function () {//懒加载
		$('.lazybox').soLazy();
		$('.mainBanner').soLazy({type : 'delay',imgTag : 'src3',defDelay:2000});
	},
	wx2wHover : function () {//微信显示隐藏
		var $img = $('.img-wx2w');
		$('.p-loveme').mouseenter(function () {
			var src = $img.attr('src4');//懒加载
			src&&$img.attr('src',src).removeAttr('src4');
			$img.show();
		}).mouseleave(function () {
			$img.hide();
		});
	},
	loginTxt : function () {//顶部登录框focus事件
		$('.txt-h').textFocus();
	},
	miniCartGet : function () {//更新mini购物车
		var t = this;
		$.ajax({
			url : '/site/api/minicartzip.aspx/get',
			//data : JSON.stringify(data),
			dataType : 'json',
			contentType : 'application/json',
			type : 'post',
			success : function (res) {
			//$.getJSON('/site/api/minicartzip.aspx/get',function (data) {\
				var data = res.d&&JSON.parse(res.d);
				if (data&&data.data) {
					var $ul = $('.minicart .ul-cartlist');
					var $pTotal = $('.minicart .p-minTotal');
					var itemList = data.data.cart_items;
					var $lists = '';
					$.each(itemList,function (i,v) {
						$lists += '<li class="li-cart" title="'+v.goods_name+'">'+
							'<span class="a-thumb" rel="'+v.goods_sku+'"><img width="36" height="36" alt="" src="'+v.image_s_url+'"></span>'+
							'<span class="s-justNum"><em class="em-op em-op-d" rel="'+v.goods_sku+'">-</em><input type="text" value="'+v.buy_quantity+'" name="txt" class="txt txt-num"><em class="em-op em-op-a" rel="'+v.goods_sku+'">+</em></span>'+
							'<span class="s-op"><em class="em-tPrice">￥'+v.goods_price+'</em><a href="#" class="a-op a-op-x" rel="'+v.id+'">X</a></span>'+
						'</li>';
					});
					$ul.html($lists);
					$pTotal.find('.em-num').text(data.data.total.item_quantity);
					$('.minicart').find('.em-totalNum').text('(共'+data.data.total.item_quantity+'件)');
					$pTotal.find('.em-price').text('￥'+data.data.total.order_amount);
					$('.minicart').find('.em-totalPrice').text('￥'+data.data.total.order_amount);
					t.cartManyE();
				}
			}
		});
	},
	cartManyE : function () {//操作增减商品数量
		t = this;
		var modifyUrl = '/site/api/minicartzip.aspx/modifyqty';
		$('.minicart .em-op-d').click(function () {//减少
			var $num = $(this).next('.txt-num');
			var num = $num.val();
			var min = $num.attr('rel')||1;
			num = (num*1-1)<min?min:(num*1-1);
			var sku = $(this).attr('rel');
			modifyCart(sku,num);
		});

		$('.minicart .em-op-a').click(function () {//增加
			var $num = $(this).prev('.txt-num');
			var num = $num.val();
			num =num*1+1;
			var sku = $(this).attr('rel');
			modifyCart(sku,num);
		});

		$('.minicart .txt-num').keyup(function () {//按键操作
			var num = $(this).val();
			num = num.replace(/\D/g,'');
			num = (isNaN(num)?0:num)*1;//只能为数字
			$(this).val(num);
			var sku = $(this).next('.em-op').attr('rel');
			modifyCart(sku,num);
		});

		$('.minicart .a-op-x').click(function () {//删除
			var id = $(this).attr('rel');
			t.ajaxUrlSa('/site/api/minicartzip.aspx/delete',{tiid:id},function () {
				t.miniCartGet();
			});
			return false;
		});

		$('.minicart .a-clearCart').click(function () {//清空
			var $ul = $('.minicart .ul-cartlist');
			var $pTotal = $('.minicart .p-minTotal');
			t.ajaxUrlSa('/site/api/minicartzip.aspx/clear',function () {
				$ul.html('');
				$pTotal.find('.em-num').text(0);
				$('.minicart').find('.em-totalNum').text('(共0件)');
				$pTotal.find('.em-price').text('￥0.0');
				$('.minicart').find('.em-totalPrice').text('￥0.0');
				if (pagePos&&pagePos=='cart') {
					window.location.reload();
				};
			});
			return false;
		});

		function modifyCart(sku,num) {
			t.ajaxUrlSa(modifyUrl, {'sku_id': sku, 'qty': num },function () {
				t.miniCartGet();
			});
		}
	},
	mainKindNav : function () {//主导航及侧边总分类事件
		var $dl = $('.dl-mainKinds');
		var $a = $('.a-cellKinds');
		var $ul = $('.ul-subNavKinds');
		var auto = $dl.hasClass('dl-kindsAuto');

		$('.dl-kindsOver').hoverClass('dl-mainKinds-over');//经过显示下拉菜单

		if (auto) {//自动展开子菜单
			var tArr = [];
			$a.each(function () {
				var tim = $(this).attr('href');
				$(tim).length&&tArr.push(Math.floor($(tim).offset().top)+20);
			});
			var len = tArr.length;
			tArr.push(1000000);
			window.console && console.log(tArr);
			$(window).scroll(function () {
				var st = Math.floor($(window).scrollTop());
				for (i = 0; i < len; i++) {
					if (st>tArr[i]&&st<tArr[i+1]) {
						$a.removeClass('a-cellKinds-now').eq(i).addClass('a-cellKinds-now');
						$ul.removeClass('ul-subNow').eq(i).addClass('ul-subNow');
						$ul.not('.ul-subNow').slideUp();
						$ul.eq(i).slideDown('fast');
					}
				}
			});
		}
		$a.soScrollTo({dis:-45});//scrollTo
		$a.click(function () {//点击展开子菜单
			$a.removeClass('a-cellKinds-now');
			$(this).addClass('a-cellKinds-now');
			$ul.slideUp('fast');
			$(this).next('.ul-subNavKinds').stop().slideDown('fast');
		});
	},
	favHome : function () {//顶部收藏事件
		$('.s-hTool-fav').click(function () {
			var siteUrl = "http://www.mtrong.com/";
			var title = "Mtrong 麦动，打造互联网供应链";
			if (document.all) {//ie
				window.external.addFavorite(siteUrl, title);
			}
			else {
				alert("当前浏览器不支持此操作，请使用 Ctrl+D 收藏 Mtrong麦动！");
			}
		});
	},
	navFix : function () {//导航固定事件
		if ($('.fix-mainnav').length) {
			var $nav = $('.fix-mainnav');
			var t = $nav.offset().top;
			$(window).scroll(function () {
				var st = $(window).scrollTop();
				if (st>t) {
					$nav.css({'position':'fixed'});
					if (!-[1,]&&!window.XMLHttpRequest) {//ie6
						$nav.css({'position':'absolute','top':st+'px'});
					}
				}else {
					$nav.css({'position':'relative','top':'0px'});
				}
			});
		}
	},
	proHover : function () {//商品列表鼠标经过
		$('.li-pro').hoverClass('li-pro-over');
	},
	favAnimate : function () {//收藏商品
		var t = this;
		if ($('.s-favPro').length) {//有侧边收藏栏类型
			var $lin = $('<div class="linPro"></div>');
			var $favNum = $('.em-favNum');
			$('.s-favPro').click(function () {
				var _self = $(this);
				var iid = _self.attr('rel');
				if (_self.hasClass('s-favedPro')) {//取消收藏
					t.ajaxUrlSa('/site/api/favorite.aspx/removefavorite',{iid:iid},function () {
						_self.removeClass('s-favedPro').text('收藏');
						$favNum.text($favNum.text()*1-1);
					});
				}else {//添加收藏
					t.ajaxUrlSa('/site/api/favorite.aspx/addfavorite',{iid:iid},function () {
						var $pro = _self.parents('.li-pro');
						var pPos = $pro.offset();
						var favPos = $('.a-nowFav').offset();
						var pt = pPos.top,pl = pPos.left;
						var ft = favPos.top+12,fl = favPos.left+110;
						_self.addClass('s-favedPro').text('已收藏');
						if (!$('.linPro').length) {$('body').append($lin);}
						$lin.css({'top':pt,'left':pl}).show()
							.animate({'left':fl,'top':ft,'width':'0px','height':'0px'},800,'easeInOutExpo',function () {
								$lin.hide().css({'width':'331px','height':'381px'});
								$favNum.text($favNum.text()*1+1);
							});
					});
				}
			});
		}
		if ($('.s-favPro-b').length) {//无侧边收藏栏类型
			$('.s-favPro-b').click(function () {
				var _self = $(this);
				var iid = _self.attr('rel');
				if ($(this).hasClass('s-favedPro')) {//取消收藏
					t.ajaxUrlSa('/site/api/favorite.aspx/removefavorite',{iid:iid},function () {
						_self.removeClass('s-favedPro').text('收藏');
					});
				}else {//添加收藏
					t.ajaxUrlSa('/site/api/favorite.aspx/addfavorite',{iid:iid},function () {
						_self.addClass('s-favedPro').text('已收藏');
					});
				}
			});
		}
	},
	eachCoutdown : function () {//倒计时
		var t = this;
		if ($('.s-endTime').length) {
			$('.s-endTime').each(function () {
				var longtime = $(this).attr('endtime')*1 - mTrong.opt.nowtime;
				var $emTime = $(this).find('.em-endTime');
				$emTime.html('<b class="count_day"></b>天<b class="count_ho"></b>时<b class="count_min"></b>分<b class="count_sec"></b>秒');
				t.coutDownEvent($emTime,longtime);
			});
		}
	},
	coutDownEvent : function (o,time) {//倒计时函数
		var time=time*1;var jThis=$(o);var $day=jThis.find('.count_day');var $ho=jThis.find('.count_ho');var $mi=jThis.find('.count_min');var $se=jThis.find('.count_sec');var cd=null;var jDay=0;var jHour=0;var jMinute=0;var jSecond=0;var countDown=function(){if(time>0){time--;};jMinute=parseInt((time%3600)/60);jSecond=parseInt(time%60);if ($day.length) {jDay=parseInt((time/3600)/24);jHour=parseInt((time/3600)%24);if(jDay==0&&jHour==0&&jMinute==0&&jSecond==0){clearInterval(cd);clearInterval(cms1);clearInterval(cms2);};sDay=(jDay<10)?('0'+jDay):jDay;$day.html(sDay);}else{jHour=parseInt(time/3600);if(jHour==0&&jMinute==0&&jSecond==0){clearInterval(cd);clearInterval(cms1);clearInterval(cms2);}};sHour=(jHour<10)?('0'+jHour):jHour;sMinute=(jMinute<10)?('0'+jMinute):jMinute;sSecond=(jSecond<10)?('0'+jSecond):jSecond;$ho.html(sHour);$mi.html(sMinute);$se.html(sSecond);};cd=setInterval(countDown,1000);var $ms1=jThis.find('.count_ms1');if ($ms1.length) {var $ms2=jThis.find('.count_ms2');var cms1=null;var cms2=null;var ms2=0;var ms1=0;var countMS1=function(){ms1++;ms1=(ms1<10)?(ms1):0;$ms1.html(ms1);};var countMS2=function(){ms2++;ms2=(ms2<10)?(ms2):0;$ms2.html(ms2);};cms1=setInterval(countMS1,100);cms2=setInterval(countMS2,80);};
	},
	ajaxUrlSa : function (url,data,successback) {//公用ajax方法
		var t = this;
		var req = null;
		//window.console && console.log(data instanceof Array);
		if (data) {
			req = JSON.stringify(data);
		}else {
			req = data;
		}
		//window.console && console.log(req);
		$.ajax({
			url : url,
			data : req,
			dataType : 'json',
			contentType : 'application/json',
			type : 'post',
			success : function (res) {
				var result = res.d&&JSON.parse(res.d);
				//window.console && console.log(result);
				if (result&&result.error==0) {
					successback(result);
				}
				if (res.errorcode==0) {
					successback(res);
				}
				if ((result&&result.error==1)||res.errorcode==1) {//未登录，弹窗登录
					t.popLogin();
				}
			}
		});
//		$.post(url,data,function (res) {
//			if (res.errorcode===0) {
//				successback();
//			}
//			if (res.errorcode===1) {//未登录，弹窗登录
//				t.popLogin();
//			}
//		});
	},
	popL : null,
	popR : null,
	popLoginHtml : function () {//pop登录html
		var html = '<div class="popLoginBox">'+
			'<form id="pop-formLogin" class="form-regLogin" method="post" action="">'+
				'<p class="p-item"><label class="lab-item">手机号码登录：</label><span class="s-txt"><input type="text" class="txt" name="loginId" validate="{required:'+'\'请输入用户名\''+'}" /></span></p>'+
				'<p class="p-item"><label class="lab-item">登录密码：</label><span class="s-txt"><input type="password" class="txt" name="password" validate="{required:'+'\'请输入密码\''+'}" /></span><a class="a-forgetPass" href="#">忘记密码？</a></p>'+
				'<p class="p-validate"><span id="s-loginErr" class="s-err"></span></p>'+
				'<p class="p-btn"><input type="submit" class="btn btn-login" name="btn_submit" value="登 录" /></p>'+
				'<a class="a-toReg" href="#">还没有账号？立即注册！</a>'+
			'</form>'+
		'</div>';
		return html;
	},
	popRegHtml : function () {//pop注册html
		var html = '<div class="popRegBox">'+
			'<form id="pop-formReg" class="form-regLogin form-reg" method="post" action="">'+
				'<p class="p-validate"><span id="s-regErr" class="s-err"></span></p>'+
				'<p class="p-item"><label class="lab-item">手机号码：</label><input type="text" class="txt" name="loginId" validate="{required:'+'\'请输入用户名\''+',mobile:true}" /> <em class="em-re">*</em></p>'+
				'<p class="p-item"><label class="lab-item">设置密码：</label><input id="password" type="password" class="txt" name="password1" validate={required:"请输入密码",len:{opt:[5,33],msg:"密码长度为6-32个字符"}} /> <em class="em-re">*</em></p>'+
				'<p class="p-item"><label class="lab-item">再次输入密码：</label><input type="password" class="txt" name="password2" validate={required:"请输入密码",len:{opt:[5,33],msg:"密码长度为6-32个字符"},equalTo:{opt:"#password",msg:"两次输入密码不一致"}} /> <em class="em-re">*</em></p>'+
				'<p class="p-item"><label class="lab-item">店铺简称：</label><input type="text" class="txt" name="e_name" validate={required:"请输入店铺简称"} /> <em class="em-re">*</em></p>'+
				'<p class="p-tip-a"><span class="s-tip">以下内容非必填</span></p>'+
				'<p class="p-item p-item-b"><label class="lab-item">会员姓名：</label><input type="text" class="txt txt-b" name="user_name" /> <label class="lab-rad"><input type="radio" class="rad" name="sex" value="man" checked="checked" />先生</label><label class="lab-rad"><input type="radio" class="rad" name="sex" value="woman" />女士</label></p>'+
				'<p class="p-item p-item-b"><label class="lab-item">客户服务编号：</label><input type="text" class="txt txt-b" name="link_e_id" validate={number:"客户服务编号为数字"} /> <em>编号为数字，如果没有可不填</em></p>'+
				'<p class="p-item p-btn"><input type="submit" class="btn-reg" name="btn_submit" value="提交注册" />标注<em class="em-re">*</em>的选项是必填内容</p>'+
				'<a class="a-toLogin" href="#">我有账号，立即登录</a>'+
			'</form>'+
		'</div>';
		return html;
	},
	activePopLogin : function () {//链接激活注册和登录
		var t = this;
		if ($('.a-toLogin').length) {
			$('.a-toLogin').click(function () {
				t.popLogin();
				return false;
			});
		}
		if ($('.a-toReg').length) {
			$('.a-toReg').click(function () {
				t.popReg();
				return false;
			});
		}
	},
	popLogin : function () {//弹窗登录
		t = this;
		t.popR&&t.popR.removePop();
		if (t.popL) {
			t.popL.showPop();
		}else {
			if (!$('.popLoginBox').length) {
				$('body').append(t.popLoginHtml());
			}
			t.popL = $.sobox.pop({
				type : 'target',
				target : '.popLoginBox',
				title : '您还没有登录',
				cls : 'mtrongBox-b',
				width :435,
				onPop : function () {
					$('.popLoginBox').find('.a-toReg').click(function () {
						if (!$('.popRegBox').length) {
							$('body').append(t.popRegHtml());
						}
						t.popReg();
						return false;
					});
				}
			});

			$('#pop-formLogin').soValidate({//验证登录弹窗里的表单
				submit : function (form) {//默认验证成功提交submit事件
					var v = form.serializeObject();
					window.console && console.log(v);
					$.ajax({
						url : '/site/api/user.aspx/Login',
						data : JSON.stringify(v),
						dataType : 'json',
						contentType : 'application/json',
						type : 'post',
						success : function (res) {//登录成功
							var result = res.d&&JSON.parse(res.d);
							if (result.error===0) {
								$('#s-loginErr').hide();
								t.popL.removePop();
								$('.p-welcome').html('<span class="s-toRegPass">欢迎'+result.data.user_name+' </span> <span class="s-toRegPass"><a href="/app/common/login/signoff.aspx" class="a-reg">注销退出</a></span>');
							}else {
								$('#s-loginErr').text(result.message).css('display','block');
							}
						}
					});
					//form.submit();
					//alert('验证通过，提交登录！');
				},
				fail : function (form,failInputs) {//验证失败
					var $failF = $(failInputs[0]);
					//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
					$failF.focus();
				}
			});
		}
	},
	popReg : function () {//弹窗注册
		t = this;
		t.popL&&t.popL.removePop();
		if (t.popR) {
			t.popR.showPop();
		}else {
			if (!$('.popRegBox').length) {
				$('body').append(t.popRegHtml());
			}
			t.popR = $.sobox.pop({
				type : 'target',
				target : '.popRegBox',
				title : '您还没有注册？',
				cls : 'mtrongBox-b',
				offset : [0,-30],
				width :465,
				onPop : function () {
					$('.popRegBox').find('.a-toLogin').click(function () {
						if (!$('.popLoginBox').length) {
							$('body').append(t.popLoginHtml());
						}
						t.popLogin();
						return false;
					});
				}
			});

			$('#pop-formReg').soValidate({//验证注册弹窗里的表单
				submit : function (form) {//默认验证成功提交submit事件
					var v = form.serializeObject();
					window.console && console.log(v);
					$.ajax({
						url : '/site/api/user.aspx/Register',
						data : JSON.stringify(v),
						dataType : 'json',
						contentType : 'application/json',
						type : 'post',
						success : function (res) {
							var result = res.d&&JSON.parse(res.d);
							if (result.error===0) {
								$('#s-regErr').hide();
								t.popR.removePop();
								$('.p-welcome').html('<span class="s-toRegPass">欢迎'+v.e_name+'</span> <span class="s-toRegPass"><a href="/app/common/login/signoff.aspx" class="a-reg">注销退出</a></span>');
							}else {
								window.console && console.log(result);
								$('#s-regErr').text(result.message).css('display','block');
							}
						}
					});
				},
				fail : function (form,failInputs) {
					var $failF = $(failInputs[0]);
					//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
					$failF.focus();
				}
			});
		}
	}
};

$(function () {
	mTrong.base.init();
});
