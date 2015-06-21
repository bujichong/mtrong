/*上午好下午好晚上还*/
function getText(){
	var _date = new Date();
	var _time = _date.getHours();
	var _text = '';
	if(_time>=1&&_time<12)
		_text = '上午好';
	else if(_time>=12&&_time<17)
		_text = '下午好';
	else
		_text = '晚上好';
	return _text;
}
/*购物车初始化加载总价总数量*/
function totleNum()
{
	var $num = $('.st-proSkuList').find('.txt-num');
	var $totalNum = $('.pro-totalCart').find('.em-totalNum');
	var $total = $('.pro-totalCart').find('.em-totalPrice');
	var total = 0;
	var totalNum = 0;
	$num .each(function (i,v){
	    var price = $(this).attr('price');
	    var num = $(this).val();
	    total +=price*num;
	    totalNum +=num*1;
	});
	$totalNum.text(totalNum);
	$total.text(total.toFixed(2));
}
/*end*/
/*订单详情初始化加载总价总数量*/
function OrdertotleNum()
{
	var $num = $('.div-skuItem').find('.right');
	var $total = $('.li-total').find('.em-totalPrice');
	var total = 0;
	$num .each(function (i,v){
	    var price = $(this).attr('price');
	    var num = $(this).attr('num');
	    total +=price*num;
	});
	return total.toFixed(2);
}
/*end*/
/*总金额计算（商品总价+运费）*/
function totalAllPrice()
{
	var $num = $('.div-skuItem').find('.right');
	var $total = $('.li-total').find('.em-totalPrice');
	var total = 0;
	var yunfei = $('.p-totalPrice').find('.s-totalExPrice').attr('yunfei');
	var totalAllPrice = 0;
	$num .each(function (i,v){
	    var price = $(this).attr('price');
	    var num = $(this).attr('num');
	    total +=price*num;
	});
	totalAllPrice = parseInt(total)+parseInt(yunfei);
	return totalAllPrice;
}
/*end*/
/*booking页面*/
function totalprice()
{
    var exPrice = $('.s-exSel').attr('price');
    return $('.s-totalProPrice').text()*1+exPrice*1;
}
/*end*/
/*booking页面总价计算*/
function totalproprice()
{
	var $num = $('.right');
    var total = 0;
    $num.each(function (i,v) {
        var price = $(this).attr('price');
        var num = $(this).attr('num');
        total +=price*num;
    });
    return total.toFixed(2);
}
/*end*/
/*js弹窗*/
;!function(a,b){
"use strict";
var c,d,
e="", //组件存放目录，为空表示自动获取
f={getPath:function(){var a=document.scripts,b=a[a.length-1].src;return e?e:b.substring(0,b.lastIndexOf("/")+1)},type:["dialog","page","iframe","loading","tips"]};a.layer={v:"1.8.5",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:f.getPath(),use:function(a,b){var d=c("head")[0],a=a.replace(/\s/g,""),e=/\.css$/.test(a),f=document.createElement(e?"link":"script"),g=a.replace(/\.|\//g,"");e&&(f.type="text/css",f.rel="stylesheet"),f[e?"href":"src"]=/^http:\/\//.test(a)?a:layer.path+a,f.id=g,c("#"+g)[0]||d.appendChild(f),b&&(document.all?c(f).ready(b):c(f).load(b))},alert:function(a,b,d,e){var f="function"==typeof d,g={dialog:{msg:a,type:b,yes:f?d:e},area:["auto","auto"]};return f||(g.title=d),c.layer(g)},confirm:function(a,b,d,e){var f="function"==typeof d,g={dialog:{msg:a,type:4,btns:2,yes:b,no:f?d:e}};return f||(g.title=d),c.layer(g)},msg:function(a,d,e,f){var g={title:!1,closeBtn:!1,time:d===b?2:d,dialog:{msg:""===a||a===b?"&nbsp;":a},end:f};return"object"==typeof e?(g.dialog.type=e.type,g.shade=e.shade,g.shift=e.rate):"function"==typeof e?g.end=e:g.dialog.type=e,c.layer(g)},load:function(a,b){return"string"==typeof a?layer.msg(a,b||0,16):c.layer({time:a,loading:{type:b},bgcolor:b?"#fff":"",shade:b?[.1,"#000"]:[0],border:3!==b&&b?[6,.3,"#000"]:[0],type:3,title:["",!1],closeBtn:[0,!1]})},tips:function(a,b,d,e,f,g){var h={type:4,shade:!1,success:function(a){this.closeBtn||a.find(".xubox_tips").css({"padding-right":10})},bgcolor:"",tips:{msg:a,follow:b}};return h.time="object"==typeof d?d.time:0|d,d=d||{},h.closeBtn=d.closeBtn||!1,h.maxWidth=d.maxWidth||e,h.tips.guide=d.guide||f,h.tips.style=d.style||g,h.tips.more=d.more,c.layer(h)}};var g=["xubox_layer","xubox_iframe",".xubox_title",".xubox_text",".xubox_page",".xubox_main"],h=function(a){var b=this,d=b.config;layer.index++,b.index=layer.index,b.config=c.extend({},d,a),b.config.dialog=c.extend({},d.dialog,a.dialog),b.config.page=c.extend({},d.page,a.page),b.config.iframe=c.extend({},d.iframe,a.iframe),b.config.loading=c.extend({},d.loading,a.loading),b.config.tips=c.extend({},d.tips,a.tips),b.creat()};h.pt=h.prototype,h.pt.config={type:0,shade:[.3,"#000"],fix:!0,move:".xubox_title",title:"&#x4FE1;&#x606F;",offset:["","50%"],area:["310px","auto"],closeBtn:[0,!0],time:0,bgcolor:"#fff",border:[6,.3,"#000"],zIndex:19891014,maxWidth:400,dialog:{btns:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:8,msg:"",yes:function(a){layer.close(a)},no:function(a){layer.close(a)}},page:{dom:"#xulayer",html:"",url:""},iframe:{src:"http://sentsin.com",scrolling:"auto"},loading:{type:0},tips:{msg:"",follow:"",guide:0,isGuide:!0,style:["background-color:#FF9900; color:#fff;","#FF9900"]},success:function(){},close:function(a){layer.close(a)},end:function(){}},h.pt.space=function(a){var b=this,a=a||"",c=b.index,d=b.config,e=d.dialog,f=-1===e.type?"":'<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype'+e.type+'"></span>',h=['<div class="xubox_dialog">'+f+'<span class="xubox_msg xubox_text" style="'+(f?"":"padding-left:20px")+'">'+e.msg+"</span></div>",'<div class="xubox_page">'+a+"</div>",'<iframe scrolling="'+d.iframe.scrolling+'" allowtransparency="true" id="'+g[1]+c+'" name="'+g[1]+c+'" onload="this.className=\''+g[1]+'\'" class="'+g[1]+'" frameborder="0" src="'+d.iframe.src+'"></iframe>','<span class="xubox_loading xubox_loading_'+d.loading.type+'"></span>','<div class="xubox_tips" style="'+d.tips.style[0]+'"><div class="xubox_tipsMsg">'+d.tips.msg+'</div><i class="layerTipsG"></i></div>'],i="",j="",k=d.zIndex+c,l="z-index:"+k+"; background-color:"+d.shade[1]+"; opacity:"+d.shade[0]+"; filter:alpha(opacity="+100*d.shade[0]+");";d.shade[0]&&(i='<div times="'+c+'" id="xubox_shade'+c+'" class="xubox_shade" style="'+l+'"></div>'),d.zIndex=k;var m="",n="",o="z-index:"+(k-1)+";  background-color: "+d.border[2]+"; opacity:"+d.border[1]+"; filter:alpha(opacity="+100*d.border[1]+"); top:-"+d.border[0]+"px; left:-"+d.border[0]+"px;";d.border[0]&&(j='<div id="xubox_border'+c+'" class="xubox_border" style="'+o+'"></div>'),!d.maxmin||1!==d.type&&2!==d.type||/^\d+%$/.test(d.area[0])&&/^\d+%$/.test(d.area[1])||(n='<a class="xubox_min" href="javascript:;"><cite></cite></a><a class="xubox_max xulayer_png32" href="javascript:;"></a>'),d.closeBtn[1]&&(n+='<a class="xubox_close xulayer_png32 xubox_close'+d.closeBtn[0]+'" href="javascript:;" style="'+(4===d.type?"position:absolute; right:-3px; _right:7px; top:-4px;":"")+'"></a>');var p="object"==typeof d.title;return d.title&&(m='<div class="xubox_title" style="'+(p?d.title[1]:"")+'"><em>'+(p?d.title[0]:d.title)+"</em></div>"),[i,'<div times="'+c+'" showtime="'+d.time+'" style="z-index:'+k+'" id="'+g[0]+c+'" class="'+g[0]+'"><div style="background-color:'+d.bgcolor+"; z-index:"+k+'" class="xubox_main">'+h[d.type]+m+'<span class="xubox_setwin">'+n+'</span><span class="xubox_botton"></span></div>'+j+"</div>"]},h.pt.creat=function(){var a=this,b="",d=a.config,e=d.dialog,f=a.index,h=d.page,i=c("body"),j=function(d){var d=d||"";b=a.space(d),i.append(c(b[0]))};switch(d.type){case 0:d.title||(d.area=["auto","auto"]),c(".xubox_dialog")[0]&&layer.close(c(".xubox_dialog").parents("."+g[0]).attr("times"));break;case 1:if(""!==h.html)j('<div class="xuboxPageHtml">'+h.html+"</div>"),i.append(c(b[1]));else if(""!==h.url)j('<div class="xuboxPageHtml" id="xuboxPageHtml'+f+'">'+h.html+"</div>"),i.append(c(b[1])),c.get(h.url,function(a){c("#xuboxPageHtml"+f).html(a.toString()),h.ok&&h.ok(a)});else{if(0!=c(h.dom).parents(g[4]).length)return;j(),c(h.dom).show().wrap(c(b[1]))}break;case 3:d.title=!1,d.area=["auto","auto"],d.closeBtn=["",!1],c(".xubox_loading")[0]&&layer.closeLoad();break;case 4:d.title=!1,d.area=["auto","auto"],d.fix=!1,d.border=[0],d.tips.more||layer.closeTips()}1!==d.type&&(j(),i.append(c(b[1])));var k=a.layerE=c("#"+g[0]+f);if(k.css({width:d.area[0],height:d.area[1]}),d.fix||k.css({position:"absolute"}),d.title&&(3!==d.type||4!==d.type)){var l=0===d.type?e:d,m=k.find(".xubox_botton");switch(l.btn=d.btn||e.btn,l.btns){case 0:m.html("").hide();break;case 1:m.html('<a href="javascript:;" class="xubox_yes xubox_botton1">'+l.btn[0]+"</a>");break;case 2:m.html('<a href="javascript:;" class="xubox_yes xubox_botton2">'+l.btn[0]+'</a><a href="javascript:;" class="xubox_no xubox_botton3">'+l.btn[1]+"</a>")}}"auto"===k.css("left")?(k.hide(),setTimeout(function(){k.show(),a.set(f)},500)):a.set(f),d.time<=0||a.autoclose(),a.callback()},f.fade=function(a,b,c){a.css({opacity:0}).animate({opacity:c},b)},h.pt.offset=function(){var a=this,b=a.config,c=a.layerE,e=c.outerHeight();a.offsetTop=""===b.offset[0]&&e<d.height()?(d.height()-e-2*b.border[0])/2:-1!=b.offset[0].indexOf("px")?parseFloat(b.offset[0]):parseFloat(b.offset[0]||0)/100*d.height(),a.offsetTop=a.offsetTop+b.border[0]+(b.fix?0:d.scrollTop()),-1!=b.offset[1].indexOf("px")?a.offsetLeft=parseFloat(b.offset[1])+b.border[0]:(b.offset[1]=""===b.offset[1]?"50%":b.offset[1],a.offsetLeft="50%"===b.offset[1]?b.offset[1]:parseFloat(b.offset[1])/100*d.width()+b.border[0])},h.pt.set=function(a){var b=this,e=b.config,h=(e.dialog,e.page),i=(e.loading,b.layerE),j=i.find(g[2]);switch(b.autoArea(a),e.title?0===e.type&&layer.ie6&&j.css({width:i.outerWidth()}):4!==e.type&&i.find(".xubox_close").addClass("xubox_close1"),i.attr({type:f.type[e.type]}),b.offset(),4!==e.type&&(e.shift&&!layer.ie6?"object"==typeof e.shift?b.shift(e.shift[0],e.shift[1]||500,e.shift[2]):b.shift(e.shift,500):i.css({top:b.offsetTop,left:b.offsetLeft})),e.type){case 0:i.find(g[5]).css({"background-color":"#fff"}),e.title?i.find(g[3]).css({paddingTop:18+j.outerHeight()}):(i.find(".xubox_msgico").css({top:8}),i.find(g[3]).css({marginTop:11}));break;case 1:i.find(h.dom).addClass("layer_pageContent"),e.shade[0]&&i.css({zIndex:e.zIndex+1}),e.title&&i.find(g[4]).css({top:j.outerHeight()});break;case 2:var k=i.find("."+g[1]),l=i.height();k.addClass("xubox_load").css({width:i.width()}),k.css(e.title?{top:j.height(),height:l-j.height()}:{top:0,height:l}),layer.ie6&&k.attr("src",e.iframe.src);break;case 4:var m=[0,i.outerHeight()],n=c(e.tips.follow),o={width:n.outerWidth(),height:n.outerHeight(),top:n.offset().top,left:n.offset().left},p=i.find(".layerTipsG");e.tips.isGuide||p.remove(),i.outerWidth()>e.maxWidth&&i.width(e.maxWidth),o.tipColor=e.tips.style[1],m[0]=i.outerWidth(),o.autoLeft=function(){o.left+m[0]-d.width()>0?(o.tipLeft=o.left+o.width-m[0],p.css({right:12,left:"auto"})):o.tipLeft=o.left},o.where=[function(){o.autoLeft(),o.tipTop=o.top-m[1]-10,p.removeClass("layerTipsB").addClass("layerTipsT").css({"border-right-color":o.tipColor})},function(){o.tipLeft=o.left+o.width+10,o.tipTop=o.top,p.removeClass("layerTipsL").addClass("layerTipsR").css({"border-bottom-color":o.tipColor})},function(){o.autoLeft(),o.tipTop=o.top+o.height+10,p.removeClass("layerTipsT").addClass("layerTipsB").css({"border-right-color":o.tipColor})},function(){o.tipLeft=o.left-m[0]+10,o.tipTop=o.top,p.removeClass("layerTipsR").addClass("layerTipsL").css({"border-bottom-color":o.tipColor})}],o.where[e.tips.guide](),0===e.tips.guide?o.top-(d.scrollTop()+m[1]+16)<0&&o.where[2]():1===e.tips.guide?d.width()-(o.left+o.width+m[0]+16)>0||o.where[3]():2===e.tips.guide?o.top-d.scrollTop()+o.height+m[1]+16-d.height()>0&&o.where[0]():3===e.tips.guide?m[0]+16-o.left>0&&o.where[1]():4===e.tips.guide,i.css({left:o.tipLeft,top:o.tipTop})}e.fadeIn&&(f.fade(i,e.fadeIn,1),f.fade(c("#xubox_shade"+a),e.fadeIn,e.shade[0])),e.fix&&""===e.offset[0]&&!e.shift&&d.on("resize",function(){i.css({top:(d.height()-i.outerHeight())/2})}),b.move()},h.pt.shift=function(a,b,c){var e=this,f=e.config,g=e.layerE,h=0,i=d.width(),j=d.height()+(f.fix?0:d.scrollTop());h="50%"==f.offset[1]||""==f.offset[1]?g.outerWidth()/2:g.outerWidth();var k={t:{top:e.offsetTop},b:{top:j-g.outerHeight()-f.border[0]},cl:h+f.border[0],ct:-g.outerHeight(),cr:i-h-f.border[0]};switch(a){case"left-top":g.css({left:k.cl,top:k.ct}).animate(k.t,b);break;case"top":g.css({top:k.ct}).animate(k.t,b);break;case"right-top":g.css({left:k.cr,top:k.ct}).animate(k.t,b);break;case"right-bottom":g.css({left:k.cr,top:j}).animate(c?k.t:k.b,b);break;case"bottom":g.css({top:j}).animate(c?k.t:k.b,b);break;case"left-bottom":g.css({left:k.cl,top:j}).animate(c?k.t:k.b,b);break;case"left":g.css({left:-g.outerWidth()}).animate({left:e.offsetLeft},b)}},h.pt.autoArea=function(a){var b,d=this,a=a||d.index,e=d.config,f=e.page,h=c("#"+g[0]+a),i=h.find(g[2]),j=h.find(g[5]),k=e.title?i.innerHeight():0,l=0;switch("auto"===e.area[0]&&j.outerWidth()>=e.maxWidth&&h.css({width:e.maxWidth}),e.type){case 0:var m=h.find(".xubox_botton>a");b=h.find(g[3]).outerHeight()+20,m.length>0&&(l=m.outerHeight()+20);break;case 1:var n=h.find(g[4]);b=c(f.dom).outerHeight(),"auto"===e.area[0]&&h.css({width:n.outerWidth()}),(""!==f.html||""!==f.url)&&(b=n.outerHeight());break;case 2:h.find("iframe").css({width:h.outerWidth(),height:h.outerHeight()-(e.title?i.innerHeight():0)});break;case 3:var o=h.find(".xubox_loading");b=o.outerHeight(),j.css({width:o.width()})}"auto"===e.area[1]&&j.css({height:k+b+l}),c("#xubox_border"+a).css({width:h.outerWidth()+2*e.border[0],height:h.outerHeight()+2*e.border[0]}),layer.ie6&&"auto"!==e.area[0]&&j.css({width:h.outerWidth()}),h.css("50%"!==e.offset[1]&&""!=e.offset[1]||4===e.type?{marginLeft:0}:{marginLeft:-h.outerWidth()/2})},h.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){if(0==parseInt(e.layerE.css("margin-left")))var a=parseInt(e.move.css("left"));else var a=parseInt(e.move.css("left"))+-parseInt(e.layerE.css("margin-left"));"fixed"!==e.layerE.css("position")&&(a-=e.layerE.parent().offset().left,e.setY=0),e.layerE.css({left:a,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layerE.find(b.move);b.move&&f.attr("move","ok"),f.css(b.move?{cursor:"move"}:{cursor:"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layerE=c(this).parents("."+g[0]);var f=e.layerE.offset().left,h=e.layerE.offset().top,i=e.layerE.width()-6,j=e.layerE.height()-6;c("#xubox_moves")[0]||c("body").append('<div id="xubox_moves" class="xubox_moves" style="left:'+f+"px; top:"+h+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#xubox_moves"),b.moveType&&e.move.css({opacity:0}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layerE.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth()-b.border[0],h=b.border[0]+e.setY;c<b.border[0]&&(c=b.border[0]),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()-b.border[0]+e.setY&&(f=d.height()-e.move.outerHeight()-b.border[0]+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=null,f=null,g=null,h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove()),e.ismove=!1}catch(a){e.ismove=!1}b.moveEnd&&b.moveEnd()})},h.pt.autoclose=function(){var a=this,b=a.config.time,c=function(){b--,0===b&&(layer.close(a.index),clearInterval(a.autotime))};a.autotime=setInterval(c,1e3)},f.config={end:{}},h.pt.callback=function(){var a=this,b=a.layerE,d=a.config,e=d.dialog;a.openLayer(),a.config.success(b),layer.ie6&&a.IE6(b),b.find(".xubox_close").on("click",function(){d.close(a.index),layer.close(a.index)}),b.find(".xubox_yes").on("click",function(){d.yes?d.yes(a.index):e.yes(a.index)}),b.find(".xubox_no").on("click",function(){d.no?d.no(a.index):e.no(a.index),layer.close(a.index)}),a.config.shadeClose&&c("#xubox_shade"+a.index).on("click",function(){layer.close(a.index)}),b.find(".xubox_min").on("click",function(){layer.min(a.index,d),d.min&&d.min(b)}),b.find(".xubox_max").on("click",function(){c(this).hasClass("xubox_maxmin")?(layer.restore(a.index),d.restore&&d.restore(b)):(layer.full(a.index,d),d.full&&d.full(b))}),f.config.end[a.index]=d.end},f.reselect=function(){c.each(c("select"),function(){var a=c(this);a.parents("."+g[0])[0]||1==a.attr("layer")&&c("."+g[0]).length<1&&a.removeAttr("layer").show(),a=null})},h.pt.IE6=function(a){var b=this,e=a.offset().top;if(b.config.fix)var f=function(){a.css({top:d.scrollTop()+e})};else var f=function(){a.css({top:e})};f(),d.scroll(f),c.each(c("select"),function(){var a=c(this);a.parents("."+g[0])[0]||"none"==a.css("display")||a.attr({layer:"1"}).hide(),a=null})},h.pt.openLayer=function(){{var a=this;a.layerE}layer.autoArea=function(b){return a.autoArea(b)},layer.shift=function(b,c,d){a.shift(b,c,d)},layer.setMove=function(){return a.move()},layer.zIndex=a.config.zIndex,layer.setTop=function(a){var b=function(){layer.zIndex++,a.css("z-index",layer.zIndex+1)};return layer.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),layer.zIndex}},f.isauto=function(a,b,c){"auto"===b.area[0]&&(b.area[0]=a.outerWidth()),"auto"===b.area[1]&&(b.area[1]=a.outerHeight()),a.attr({area:b.area+","+c}),a.find(".xubox_max").addClass("xubox_maxmin")},f.rescollbar=function(a){g.html.attr("layer-full")==a&&(g.html[0].style.removeProperty?g.html[0].style.removeProperty("overflow"):g.html[0].style.removeAttribute("overflow"),g.html.removeAttr("layer-full"))},layer.getIndex=function(a){return c(a).parents("."+g[0]).attr("times")},layer.getChildFrame=function(a,b){return b=b||c("."+g[1]).parents("."+g[0]).attr("times"),c("#"+g[0]+b).find("."+g[1]).contents().find(a)},layer.getFrameIndex=function(a){return c(a?"#"+a:"."+g[1]).parents("."+g[0]).attr("times")},layer.iframeAuto=function(a){a=a||c("."+g[1]).parents("."+g[0]).attr("times");var b=layer.getChildFrame("body",a).outerHeight(),d=c("#"+g[0]+a),e=d.find(g[2]),f=0;e&&(f=e.height()),d.css({height:b+f});var h=-parseInt(c("#xubox_border"+a).css("top"));c("#xubox_border"+a).css({height:b+2*h+f}),c("#"+g[1]+a).css({height:b})},layer.iframeSrc=function(a,b){c("#"+g[0]+a).find("iframe").attr("src",b)},layer.area=function(a,b){var d=[c("#"+g[0]+a),c("#xubox_border"+a)],e=d[0].attr("type"),h=d[0].find(g[5]),i=d[0].find(g[2]);if(e===f.type[1]||e===f.type[2]){if(d[0].css(b),h.css({width:b.width,height:b.height}),e===f.type[2]){var j=d[0].find("iframe");j.css({width:b.width,height:i?b.height-i.innerHeight():b.height})}"0px"!==d[0].css("margin-left")&&(b.hasOwnProperty("top")&&d[0].css({top:b.top-(d[1][0]?parseFloat(d[1].css("top")):0)}),b.hasOwnProperty("left")&&d[0].css({left:b.left+d[0].outerWidth()/2-(d[1][0]?parseFloat(d[1].css("left")):0)}),d[0].css({marginLeft:-d[0].outerWidth()/2})),d[1][0]&&d[1].css({width:parseFloat(b.width)-2*parseFloat(d[1].css("left")),height:parseFloat(b.height)-2*parseFloat(d[1].css("top"))})}},layer.min=function(a,b){var d=c("#"+g[0]+a),e=[d.position().top,d.position().left+parseFloat(d.css("margin-left"))];f.isauto(d,b,e),layer.area(a,{width:180,height:35}),d.find(".xubox_min").hide(),"page"===d.attr("type")&&d.find(g[4]).hide(),f.rescollbar(a)},layer.restore=function(a){{var b=c("#"+g[0]+a),d=b.attr("area").split(",");b.attr("type")}layer.area(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3])}),b.find(".xubox_max").removeClass("xubox_maxmin"),b.find(".xubox_min").show(),"page"===b.attr("type")&&b.find(g[4]).show(),f.rescollbar(a)},layer.full=function(a,b){var e,h=c("#"+g[0]+a),i=2*b.border[0]||6,j=[h.position().top,h.position().left+parseFloat(h.css("margin-left"))];f.isauto(h,b,j),g.html.attr("layer-full")||g.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(e),e=setTimeout(function(){layer.area(a,{top:"fixed"===h.css("position")?0:d.scrollTop(),left:"fixed"===h.css("position")?0:d.scrollLeft(),width:d.width()-i,height:d.height()-i})},100)},layer.title=function(a,b){var d=c("#"+g[0]+(b||layer.index)).find(".xubox_title>em");d.html(a)},layer.close=function(a){var b=c("#"+g[0]+a),d=b.attr("type"),e=c("#xubox_moves, #xubox_shade"+a);if(b[0]){if(d==f.type[1])if(b.find(".xuboxPageHtml")[0])b[0].innerHTML="",b.remove();else{b.find(".xubox_setwin,.xubox_close,.xubox_botton,.xubox_title,.xubox_border").remove();for(var h=0;3>h;h++)b.find(".layer_pageContent").unwrap().hide()}else b[0].innerHTML="",b.remove();e.remove(),layer.ie6&&f.reselect(),f.rescollbar(a),"function"==typeof f.config.end[a]&&f.config.end[a](),delete f.config.end[a]}},layer.closeLoad=function(){layer.close(c(".xubox_loading").parents("."+g[0]).attr("times"))},layer.closeTips=function(){layer.closeAll("tips")},layer.closeAll=function(a){c.each(c("."+g[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&layer.close(b.attr("times")),d=null})},f.run=function(){c=jQuery,d=c(a),g.html=c("html"),layer.use("skin/layer.css"),c.layer=function(a){var b=new h(a);return b.index},(new Image).src=layer.path+"skin/default/xubox_ico0.png"},"function"==typeof define?define(function(){return f.run(),layer}):f.run()}(window);
/*end*/
/* Swipe */
function Swipe(a,b){"use strict";function c(){var c,d;for(n=m.children,q=n.length,n.length<2&&(b.continuous=!1),B.transitions&&b.continuous&&n.length<3&&(m.appendChild(n[0].cloneNode(!0)),m.appendChild(m.children[1].cloneNode(!0)),n=m.children),o=new Array(n.length),p=a.getBoundingClientRect().width||a.offsetWidth,m.style.width=n.length*p+"px",c=n.length;c--;)d=n[c],d.style.width=p+"px",d.setAttribute("data-index",c),B.transitions&&(d.style.left=c*-p+"px",h(c,r>c?-p:c>r?p:0,0));b.continuous&&B.transitions&&(h(f(r-1),-p,0),h(f(r+1),p,0)),B.transitions||(m.style.left=r*-p+"px"),a.style.visibility="visible"}function d(){b.continuous?g(r-1):r&&g(r-1)}function e(){b.continuous?g(r+1):r<n.length-1&&g(r+1)}function f(a){return(n.length+a%n.length)%n.length}function g(a,c){var d,e,g;if(r!=a){if(B.transitions){for(d=Math.abs(r-a)/(r-a),b.continuous&&(e=d,d=-o[f(a)]/p,d!==e&&(a=-d*n.length+a)),g=Math.abs(r-a)-1;g--;)h(f((a>r?a:r)-g-1),p*d,0);a=f(a),h(r,p*d,c||s),h(a,0,c||s),b.continuous&&h(f(a-d),-(p*d),0)}else a=f(a),j(r*-p,a*-p,c||s);r=a,A(b.callback&&b.callback(r,n[r]))}}function h(a,b,c){i(a,b,c),o[a]=b}function i(a,b,c){var d=n[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)"+"translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function j(a,c,d){var e,f;return d?(e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(m.style.left=c+"px",t&&k(),b.transitionEnd&&b.transitionEnd.call(event,r,n[r]),clearInterval(f),void 0):(m.style.left=(c-a)*(Math.floor(100*(g/d))/100)+a+"px",void 0)},4),void 0):(m.style.left=c+"px",void 0)}function k(){u=setTimeout(e,t)}function l(){t=0,clearTimeout(u)}var m,n,o,p,q,r,s,t,u,v,w,x,y,z=function(){},A=function(a){setTimeout(a||z,0)},B={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b,c=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(b in c)if(void 0!==a.style[c[b]])return!0;return!1}(document.createElement("swipe"))};return a?(m=a.children[0],b=b||{},r=parseInt(b.startSlide,10)||0,s=b.speed||300,b.continuous=void 0!==b.continuous?b.continuous:!0,t=b.auto||0,v={},w={},y={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":A(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":A(this.transitionEnd(a));break;case"resize":A(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];v={x:b.pageX,y:b.pageY,time:+new Date},x=void 0,w={},m.addEventListener("touchmove",this,!1),m.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];w={x:c.pageX-v.x,y:c.pageY-v.y},"undefined"==typeof x&&(x=!!(x||Math.abs(w.x)<Math.abs(w.y))),x||(a.preventDefault(),l(),b.continuous?(i(f(r-1),w.x+o[f(r-1)],0),i(r,w.x+o[r],0),i(f(r+1),w.x+o[f(r+1)],0)):(w.x=w.x/(!r&&w.x>0||r==n.length-1&&w.x<0?Math.abs(w.x)/p+1:1),i(r-1,w.x+o[r-1],0),i(r,w.x+o[r],0),i(r+1,w.x+o[r+1],0)))}},end:function(){var a,c=+new Date-v.time,d=Number(c)<250&&Math.abs(w.x)>20||Math.abs(w.x)>p/2,e=!r&&w.x>0||r==n.length-1&&w.x<0;b.continuous&&(e=!1),a=w.x<0,x||(d&&!e?(a?(b.continuous?(h(f(r-1),-p,0),h(f(r+2),p,0)):h(r-1,-p,0),h(r,o[r]-p,s),h(f(r+1),o[f(r+1)]-p,s),r=f(r+1)):(b.continuous?(h(f(r+1),p,0),h(f(r-2),-p,0)):h(r+1,p,0),h(r,o[r]+p,s),h(f(r-1),o[f(r-1)]+p,s),r=f(r-1)),b.callback&&b.callback(r,n[r])):b.continuous?(h(f(r-1),-p,s),h(r,0,s),h(f(r+1),p,s)):(h(r-1,-p,s),h(r,0,s),h(r+1,p,s))),m.removeEventListener("touchmove",y,!1),m.removeEventListener("touchend",y,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==r&&(t&&k(),b.transitionEnd&&b.transitionEnd.call(a,r,n[r]))}},c(),t&&k(),B.addEventListener?(B.touch&&m.addEventListener("touchstart",y,!1),B.transitions&&(m.addEventListener("webkitTransitionEnd",y,!1),m.addEventListener("msTransitionEnd",y,!1),m.addEventListener("oTransitionEnd",y,!1),m.addEventListener("otransitionend",y,!1),m.addEventListener("transitionend",y,!1)),window.addEventListener("resize",y,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){l(),g(a,b)},prev:function(){l(),d()},next:function(){l(),e()},getPos:function(){return r},getNumSlides:function(){return q},kill:function(){var a,b;for(l(),m.style.width="auto",m.style.left=0,a=n.length;a--;)b=n[a],b.style.width="100%",b.style.left=0,B.transitions&&i(a,0,0);B.addEventListener?(m.removeEventListener("touchstart",y,!1),m.removeEventListener("webkitTransitionEnd",y,!1),m.removeEventListener("msTransitionEnd",y,!1),m.removeEventListener("oTransitionEnd",y,!1),m.removeEventListener("otransitionend",y,!1),m.removeEventListener("transitionend",y,!1),window.removeEventListener("resize",y,!1)):window.onresize=null}}):void 0}(window.jQuery||window.Zepto)&&function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto);

!function(a){a.fn.extend({soLazy:function(b){var c,d,e,f,g,h;return b=a.extend({scrollWrap:null,type:"scroll",imgTag:"src2",defHeight:40,defDelay:4e3},b||{}),c=a(this),d=c.find("img"),e=b.imgTag,"scroll"==b.type&&(f=function(){return b.scrollWrap?a(b.scrollWrap).height()+a(b.scrollWrap).scrollTop()-b.defHeight:document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-b.defHeight},g=function(){d.each(function(){if(a(this).offset().top<=f()){var b=a(this).attr(e);b&&a(this).attr("src",b).removeAttr(e)}})},g(),h=b.scrollWrap?a(b.scrollWrap):a(window),h.bind("scroll",function(){g()})),"delay"==b.type&&setTimeout(function(){d.each(function(){var b=a(this).attr(e);b&&a(this).attr("src",b).removeAttr(e)})},b.defDelay),c}})}(jQuery);

/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"cls",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?_self.find(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),r[c]&&b&&(f=r[c].rule(b,d)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^\w+$/.test(a)},msg:function(){return"只能用英文字母、数字和下划线"}},baseCnChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},plateNum:{rule:function(a){return/^[A-Za-z0-9]{6}$/.test(a)},msg:function(){return"请填写正确的车牌号码！"}},remote:{rule:function(val,param){var data,b,d={};return d[param.key]=val,data=$.extend(d,param.data||{}),b=!1,$.ajax({url:param.url,data:data,async:!1,success:function(data){var data="string"==typeof data?eval("("+data+")"):data;b=data.success},error:function(){alert("向服务器请求验证失败！")}}),b},msg:function(){return"手机号码已存在！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

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
            case  "Confirmed":// 发货中
            case  "Paid":// 已付款
                state = 'true';
                break;
            case  "NotPaid":// 未付款
            case  "Wait_Confirm":// 待确认
                state = 'false';
                break;
            default ://如果为空值或非法值
                state = 'true';
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
        //me.listEventDetails();//单品页点击图片显示详情介绍
        me.sliderGallery();
        me.scorllBanner();
        me.proNumTotal();
        me.cartChangeTotal();
        me.cartChkAll();
        me.formValidate();
        me.renderDropDistinct();
        me.changeExpress();
        me.addCart();//加入购物车事件 pro
        me.getKindOrder();//order 加载更多方法
        me.getMoreOrder();//order 加载更多方法
        me.subBooking();//提交订单 cart
        me.checkBooking();//确认订单 booking
        me.backPage();//订单修改数量 bookig
        me.imPay();//立即支付 bookingDetails.vm
        me.orderDatil()//订单详情 order
        me.payOrder()//订单支付(order页面)
        me.sendOrder();//传递发货清单所需要的值
        me.loginOut();//退出注销 setting
        me.sendWaiting();
        //me.listEventBuy();//收藏页面点击弹窗采购信息
        me.favAddCart();//获取弹窗信息 fav pro
        me.kindsTab();//点击一级分类js方法 kinds
        me.changefav();//控制显示加入收藏还是已收藏按钮  pro
        me.changefav2();//控制显示加入收藏还是已收藏按钮  列表页
    },
	changefav : function(){
		var me = this;
		var ajaxaddurl = '/html/item/itemCollection.do';
		var ajaxdelurl = '/html/item/delCollection.do';
		$('.addfav').on('click', function() {//ajax方法
			 var iId = $(this).attr('iId');
			 $.get(ajaxaddurl,{//ajax传送参数，参数名为iid，值为iId
				 iid : iId
			 },function (data) {//返回后进行的操作
				 $('.addfav').hide();
				 $('.delfav').show();
				 layer.msg('收藏成功！', 1, -1);
			 	})
		});
		$('.delfav').on('click', function() {//同上
			 var iId = $(this).attr('iId');
			 $.get(ajaxdelurl,{
				 iid : iId
			 },function (data) {
				 $('.addfav').show();
				 $('.delfav').hide();
				 layer.msg('已取消收藏！', 1, -1);
			 	})

		});
	},
	changefav2 : function(){
		var me = this;
		var ajaxaddurl = '/html/item/itemCollection.do';
		var ajaxdelurl = '/html/item/delCollection.do';
		$('.s-clickNum').find('.addfav').on('click', function() {//ajax方法
			var _self = $(this);
			 var iId = _self.attr('iId');
			 window.console && console.log(iId);
			 // $.get(ajaxaddurl,{//ajax传送参数，参数名为iid，值为iId
				//  iid : iId
			 // },function (data) {//返回后进行的操作
				_self.hide();
				 _self.siblings('.delfav').show();
				//  layer.msg('收藏成功！', 1, -1);
			 // 	})
		});
		$('.s-clickNum').find('.delfav').on('click', function() {//同上
			 var iId = $(this).attr('iId');
			 window.console && console.log(iId);
			 // $.get(ajaxdelurl,{
				//  iid : iId
			 // },function (data) {
				 $(this).hide();
				 $(this).siblings('.addfav').show();
				//  $('.addfav').show();
				//  $('.delfav').hide();
				//  layer.msg('已取消收藏！', 1, -1);
			 // 	})

		});
	},
    exSubNav: function() { //主导航点击展开子菜单
        var st = null;
        $('.fn-subnav').click(function() {
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
     kindsTab : function () {//分类页面相关class控制
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
         var $orderTitle = $('.h3-order');
         var $orderTitle1 = $('.h3-order1');
            $status.click(function() {//分类订单
            	var from = $(".from").val();
        		var uId = $(".uId").val();
                // var ix = $status.index(this);
                $status.removeClass('a-status-now');
                $(this).addClass('a-status-now');
                $orderTitle1.removeClass('p-emptytipHide');//点击order页面头上四个状态时最近XXX的订单的显示 p-emptytipHide隐藏
                $orderTitle.addClass('p-emptytipHide');
                var statusT = $(this).find('.em-status').text();
                $('.s-order-title').text('最近'+statusT+'的订单');
                var ajaxurl = $(this).attr('href');
                loadOpt.url = ajaxurl;
                me.pageNow = 1;
                me.loadMore(loadOpt.url,true);//加载更多事件
                return false;
            });

            $('.a-ordermore').click(function() {//所有订单
                $status.removeClass('a-status-now');
                $orderTitle1.removeClass('p-emptytipHide');//点击全部订单时所有订单的显示 p-emptytipHide隐藏
                $orderTitle.addClass('p-emptytipHide');
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
            $('.p-loadMore').click(function () {//点击加载更多
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
        $.get(ajaxurl,{//第几页参数名page ,每页多少条参数名：pageSize
            page :me.pageNow,
            pageSize : loadOpt.pageSize,
            from : from,
            uId : uId
        },function (data) {
        	var dataa = eval('(' + data + ')');//将取得数据json化操作,判断是否有订单
        	if(dataa.msg=='您还没有订单'){
        	     //var $list = $('#orderTem').render('')
        		var $list = $('#orderTem2').render('');//如果为空则使用jsrender模板2载入数据
            if(refresh){//如果为true则载入新页面，否则子啊原页面中拼接上去
                $('.ul-order').html($list);
            }else{
                $('.ul-order').append($list);
            }
        	$('.p-loadMore').hide();//隐藏加载更多按钮
    	}
    	else{
            //var data = eval(data);
            var data = eval('(' + data + ')');//将取得数据json化操作
            window.console && console.log(data);
//            if(data.totalCount==0){
//                $('.p-emptytip').removeClass('p-emptytipHide');
//            }else{
//                $('.p-emptytip').addClass('p-emptytipHide');
//            }
            if (data.orderStatuesList.length) {//如果订单list中有值
            	var totalCount = data.totalCount;//数据总长度
            	var orderData = data.orderStatuesList;//json中订单列表orderStatuesList赋值给orderData
                var dataAllLen = (me.pageNow-1)*loadOpt.pageSize+data.orderStatuesList.length;//当前已获得数据总长度 = (当前页码-1)*每页数量+当前获得数据长度
                if(data.orderStatuesList.length%10!=0){//当传过来的数据小于10时隐藏点击加载更多按钮
                	$('.p-loadMore').hide();
                }
                else if (totalCount<=dataAllLen) {//当当前用户的订单总数totalCount与当前已获得数据总长度dataAllLen相等时隐藏点击加载跟多按钮
                    $('.p-loadMore').hide();
                    window.console && console.log('全部加载完毕');//如果当前中数据长度大于等于数据中长度，则隐藏更多按钮
                }else{
                    $('.p-loadMore').show();
                };
                $.each(orderData,function () {//订单列表页面只显示前4张不同的图片，该操作在js中处理，不放入模板中
                    var imgList = this.imageList;
                    var newImgArr = [];
                    var tempImg = '';
                    if (imgList.length) {
                        $.each(imgList,function (i,v) {
                            if (v !== tempImg) {newImgArr.push(v)};
                            tempImg = v;
                        });
                    };
                    this.imageList = newImgArr;
                });
                var $list = $('#orderTem').render(data.orderStatuesList)//使用jsrender来模板载入数据
                if(refresh){
                    $('.ul-order').html($list);
                }else{
                    $('.ul-order').append($list);
                }
                me.pageNow++;//增加页码
            };
    	}
        })
    },
    favAddCart : function () {//fav，pro页面弹窗控制js
        var me = this;
		var ajaxurl = '/html/orderList/getSingleItemjson.do';
		$('.fn-buy').on('click',function() { //ajax操作
			 var iId = $(this).attr('iId');
			 $.get(ajaxurl,{
				 iid : iId
			 },function (data) {
				 //var data = eval(data);
				 var data = eval('(' + data + ')');//取得弹窗中所需要的数据
				 window.console && console.log(data);
				 me.listEventBuy(data);//调用方法listEventBuy，传入data数据填入页面
			 	})
		 });
    },
    sendOrder : function(){
    	$('.send').click(function () {//发货清单调用js，订单详情页面
    		var orderId = $('.orderId').attr('orderId');
    		var array = new Array();
        	$(this).parents('.li-list-c').find('.dId').each(function(){
                var dId = $(this).attr('dId');
                array.push(dId);//拼装后台所需参数
        	});
        	window.location="/html/order/deliverDetail.do?orderId="+orderId+"&dids="+array.toLocaleString()
    	})
    },
    loginOut : function(){//当前用户注销退出
    	$('.loginOut').click(function () {
        	window.location="/html/user/loginOut.do";
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
                    $('.btnValidate').text('正在提交中...');
            		$(".btnValidate").css('background-color','#d9d9d9');
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
    addCart : function(){//cart.vm
    	$(".a-toCart").click(function(){
//    		var itemname = encodeURI(encodeURI($(".h2-pro-title").text()));
    		var uId = $(".uId").val();
    		var htmlflag = $(".htmlflag").val();
    		if(uId==''){
    			$('.a-toCart').text('请先登录!');
    		}else{
    			if(htmlflag==0){
    				$('.a-toCart').text('您的账号正在审核');
    			}else{
    				var array = new Array();
    				var tn = 0;
    				$(".txt-num").each(function(){
    					var v = $(this).val();
    					if(v>0){
    						tn += v*1;
    						var sku = $(this).attr('sku');
    						var spu = $(this).attr('spuNo');
    						array.push(sku+'-'+v+'-'+spu);
    					}
    				});
    				if($(".em-totalNum").text()==0){
    					layer.msg('请点击 + 添加商品', 1, -1);
    				}else{
    					$('.a-toCart').text('正在提交中...');
    					$(".a-toCart").css('background-color','#d9d9d9');
    					var ajaxurl = "/html/orderList/addCartjson.do";
    		    		 $.get(ajaxurl,{//ajax传送参数，参数名为skuNum
    		    			 skuNum : array.toLocaleString(),
    					 },function (data) {//返回后进行的操作
    						 $('.a-toCart').text('加入购物车');
    						 $(".a-toCart").css('background-color','#DA2E35');
//    						 var data = eval('(' + data + ')');
//    						 var cartnum = data.cartnum;
//    						 var totalnum = cartnum*1 +  $('.s-num').text()*1;
//    						 $('.s-num').text(totalnum);
    						 location.reload(true)
    					 	})
    					//window.location="/html/cart/addCart.do?skuNum="+array.toLocaleString()
    				}
    			}
    		}
    	});
    },
    subBooking : function(){//购物车提交订单
    	$(".a-gotoBooking").click(function(){
    		var from = $(".from").val();
    		var uId = $(".uId").val();
    		//var skuNum = $(".txt-skuNumString").val();//换了一种sku-num拼接方法
    		var totalNum = 0;
    		var array = new Array();
    		$(".txt-num").each(function(){
    			if($(this).parents('.li-list').find('.chk').attr('checked')=='checked'){//判断提交的商品数时是否已选择(checkbox)
    				var v = $(this).val();//取得该商品的数量
                    totalNum += v*1; //统计总商品数量
                    if(v!=0){//如果件数为0则不传到后台
						var spu = $(this).attr('sku');
						var sysNo = $(this).attr('sysNo');//采购车编号
						array.push(spu+'-'+v+'-'+sysNo);
                    }
    			}
        	});
        	if(totalNum==0){
        		//$('.a-gotoBooking').text('您未选择商品！');
        		layer.msg('亲，您还未选择商品哦！', 1, -1);
        	}else{
    		if(uId==null){
    			$('.a-gotoBooking').text('请先登录!');
    		}else{
    			window.location="/html/cart/submitOrder.do?skuNum="+array.toLocaleString()+"&from="+from+"&uId="+uId
        		$('.a-gotoBooking').text('正在提交中...');
        		$(".a-gotoBooking").css('background-color','#d9d9d9');
    		}
        	}
    	});
    },
    backPage : function(){//booking页面右上角修改商品数量按钮js，返回购物车
    	$(".back").click(function(){
    		var from = $(".from").val();
    		var uId = $(".uId").val();
//    		var array = new Array();
//    		$(".right").each(function(){
//    			var sku = $(this).attr('sku');
//    			array.push(sku+'-'+0);
//    		});
//    		window.location="/html/cart/addCart.do?skuNum="+array.toLocaleString()+"&from="+from+"&uId="+uId
    		window.location="/html/cart/readCart.do?from="+from+"&uId="+uId
    	});
    },
    checkBooking : function(){//确认订单js  booking.vm
    	$(".cherckbook").click(function(){
    		var from = $(".from").val();
    		var uId = $(".uId").val();
    		var logistics = $(".s-exSel").text();//运送方式
    		var receiverId = $(".receiverId").val();//收货人id
    		var remark = document.getElementById("remark").value;//客户留言
    		var array = new Array();
        	$(".right").each(function(){
                var v = $(this).attr("num");
                if(v>0){
                    var sku = $(this).attr('sku');
                   // var sysNo = $(this).attr('sysNo');
                    array.push(sku+'-'+v);
                }
        	});
    		window.location="/html/order/confirmOrder.do?skuNum="+array.toLocaleString()+"&from="+from+"&uId="+uId
    		+"&logistics="+logistics+"&receiverId="+receiverId+"&remark="+remark
    		$(".cherckbook").text('确认订单中...');
    		$(".cherckbook").css('background-color','#d9d9d9');
    	});
    },
    imPay : function(){//立即支付按钮js控制方法  bookingDetails.vm
    	$(".imPay").click(function(){
    		var orderId = $('.orderId').attr('orderId');
    		var from = $(".from").val();
    		window.location="/html/order/payment.do?orderId="+orderId+"&from="+from
    		$(".imPay").text('请稍等...');
    		$(".imPay").css('background-color','#d9d9d9');
    	})
    },
    orderDatil : function(){//order.vm 订单详情
    	$(".xiangqing").click(function(){
    		var from = $(".from").val();
    		var uId = $(".uId").val();
    		var orderId = $(this).attr('oId');
    		window.location="/html/order/orderDetail.do?orderId="+orderId+"&from="+from+"&uId="+uId;
    	});
    },
    payOrder : function(){//order.vm 付款按钮
    	$('.a-orderbuy').click(function(){
    		var orderId = $(this).attr('oId');
    		var from = $(".from").val();
    		window.location="/html/order/payment.do?orderId="+orderId+"&from="+from
    	})
    },
    regLoginTab : function () {//注册登录tab reglogin.vm
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
    buyPop : null,
    listEventBuy: function(data) { //收藏页面点击弹窗采购信息 fav.vm pro.vm弹窗方法
        var me = this;
        if ($('.fn-buy').length) {
                var data = data;
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

            $('.fn-inCart').on('click',function() {//弹窗加入购物车按钮
            	if($('.pro-totalCart').find('.em-totalNum').text()!=0){
                sos.base.buyPop.removePop();
                $.loadTip({
                    content : '购买成功！',
                    removeDelay : 1500//1.5s,默认1s
                });
                return false;
            }
            });
            return false;
        };

    },
    listEventDetails: function() { //未启用方法，前pro页面点击图片弹窗js
        if ($('.fn-details').length) {
            var detailsPop = null;
            $('.fn-details').click(function() { //查看详情
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
            $('.fn-delFav').click(function () {
                detailsPop.removePop();
                $.loadTip({
                    content :'从常用配料中删除成功！'
                });
            });
        }
    },
    proNumTotal : function () {//pro页面弹窗左下角商品件数统计
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
    numAd: function(callback) { //数字加减 pro cart页面
        if ($('.fn-op-num').length) {
            var $fn = $('.fn-op-num');
            $fn.find('.em-op-d').on('click',function() { //减少 cart页面
                var $num = $(this).next('.txt-num');
                var num = $num.val();
                var min = $num.attr('rel') || 0;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);
                if (num-1==0) {
                	layer.msg('哎呀，真的不能再少了！', 1, -1);
				}
                var stock =parseInt($num.attr("stock"));
                if(callback){callback();}
            });
            $fn.find('.proem-op-d').on('click',function() { //减少 pro页面
                var $num = $(this).next('.txt-num');
                var num = $num.val();
                var min = $num.attr('rel') || 0;
                num = (num * 1 - 1) < min ? min : (num * 1 - 1);
                $num.val(num);
                if(callback){callback();}
            });
            $fn.find('.em-op-a').on('click',function() { //增加  cart页面
                var $num = $(this).prev('.txt-num');
                var num = $num.val();
                var stock =parseInt($num.attr("stock"));
                if (num>=stock) {
                	layer.msg('亲，我们没有库存了-_-！', 1, -1);
                	$num.val(stock);
				}else{
					 num = num * 1 + 1;
					 $num.val(num);
				}
                if(callback){callback();}
            });
            $fn.find('.proem-op-a').on('click',function() { //增加  pro页面
                var $num = $(this).prev('.txt-num');
                var num = $num.val();
                var stock =parseInt($num.attr("stock"));
                if (num>=stock) {
                	$num.val(stock);
				}else{
					 num = num * 1 + 1;
		             $num.val(num);
				}
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
    changeExpress : function () {//booking页面 快递 物流按钮点击js
        if ($('.s-exStyle').length) {
            $('.s-exStyle').click(function () {
                $('.s-exStyle').removeClass('s-exSel');
                $(this).addClass('s-exSel');
                var exPrice = $(this).attr('price');
                var exname = $(this).attr('exname');
                $('.em-express').text(exname);
                $('.s-totalExPrice').text(exPrice);
                $('.em-stylePrice').text(exPrice);
                if(typeof(exPrice)!="undefined"){
                	$('.em-totalAllPrice').text($('.s-totalProPrice').text()*1+exPrice*1);
                }else{
                }
                var from = $(".from").val();
        		var uId = $(".uId").val();
        		var ls= $(this).attr('ls');
          		var array = new Array();
            	$(".right").each(function(){
                    var v = $(this).attr("num");
                    var sku = $(this).attr('sku');
                    var sysNo = $(this).attr('sysNo');

                    array.push(sku+'-'+v+'-'+sysNo);
            	});
        		window.location="/html/cart/submitOrder.do?skuNum="+array.toLocaleString()+"&from="+from+"&uId="+uId+"&ls="+ls
            })
        };
    },
    cartChangeTotal: function () {//cart.vm 当点击提交订单按钮是讲sku与mun拼接成sku-num形式填入txt-skuNumString隐藏域中方便提交方法取值做为参数调用
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
    cartChkAll: function() {//购物车选择商品事件 cart.vm
        var me = this;
        if ($('.chkall').length) {
            var $t = $('.s-tipSel'),
                $go = $('.a-gotoBooking'),
                $one = $('.chkone'),
                $all = $('.chkall');

            triggerStatus();//初始检查是否有已选中
            $one.click(function() {//单项点击事件
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
                 		var cartId = _self.attr('value');
                 		var urlStr = '/html/orderList/cartDel.do';
                 		$.ajax({
                 			url : urlStr,
                 			type : 'POST',
                 			data : {cartId:cartId},
                 			dataType :'json',
                 			success:function(data){
                 				$t.remove();
                                triggerStatus();
                                layer.msg('删除成功！', 1, -1);
                 			},
                 			error: function(){
                 				layer.msg('删除失败！', 1, -1);
                 			}
                 		});
                    }
                })

            });

            $all.click(function() { //全选点击事件
                if ($('.chkone:checked').length == $('.chkone').length) {//如果已经都全选则反选
                    $one.removeAttr('checked');
                } else {//全选
                    $one.attr('checked', 'checked');
                };
                triggerStatus();
            });
        };

        function triggerStatus() {//检查跟踪选择状态，设置提交状态 cart检查是否全选
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