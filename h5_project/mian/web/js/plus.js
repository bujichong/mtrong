//mdater
!function(a){a.fn.mdater=function(b){var g,c={maxDate:null,minDate:new Date(1970,0,1)},d=a.extend(c,b),e=this,f={getDaysInMonth:function(a,b){return new Date(a,b+1,0).getDate()},getWeekInMonth:function(a,b){return new Date(a,b,1).getDay()},getMonth:function(a){return["一","二","三","四","五","六","七","八","九","十","十一","十二"][a]},getLastDayInMonth:function(a,b){return new Date(a,b,this.getDaysInMonth(a,b))}};a.fn.delegates=function(b){var c,d,e,f;el=a(this[0]);for(c in b){d=b[c],"function"==typeof d&&(e={},e.tap=d,d=e);for(f in d)el.delegate(c,f,d[f])}return this},g={value:{year:"",month:"",date:""},lastCheckedDate:"",init:function(){this.initListeners()},renderHTML:function(){var b=a('<div class="md_mask"></div><div class="md_panel"><div class="md_head"><div class="md_selectarea"><a class="md_prev change_year" href="javascript:void(0);">&lt;</a> <a class="md_headtext yeartag" href="javascript:void(0);"></a> <a class="md_next change_year" href="javascript:void(0);">&gt;</a></div><div class="md_selectarea"><a class="md_prev change_month" href="javascript:void(0);">&lt;</a> <a class="md_headtext monthtag" href="javascript:void(0);">月</a> <a class="md_next change_month" href="javascript:void(0);">&gt;</a></div></div><div class="md_body"><ul class="md_weekarea"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class="md_datearea in"></ul></div><div class="md_foot"><a href="javascript:void(0);" class="md_ok">确定</a> <a href="javascript:void(0);" class="md_cancel">取消</a></div></div>');return 0==a(".md_mask").length&&a(document.body).append(b),b},_showPanel:function(){this.refreshView(),a(".md_panel, .md_mask").addClass("show")},_hidePanel:function(){a(".md_panel, .md_mask").remove()},_changeMonth:function(b,c){var d,e,g;this.saveCheckedDate(),d=a(".md_selectarea").find(".monthtag"),e=~~d.data("month")+b,e>11?(e=0,this.value.year++,a(".yeartag").text(this.value.year).data("year",this.value.year)):0>e&&(e=11,this.value.year--,a(".yeartag").text(this.value.year).data("year",this.value.year)),g=f.getMonth(e)+"月",d.text(g).data("month",e),this.value.month=e,c?this.value.date=c:this.setCheckedDate(),this.updateDate(b)},_changeYear:function(b){this.saveCheckedDate();var c=a(".md_selectarea").find(".yeartag"),d=~~c.data("year")+b;c.text(d+"年").data("year",d),this.value.year=d,this.setCheckedDate(),this.updateDate(b)},saveCheckedDate:function(){this.value.date&&(this.lastCheckedDate={year:this.value.year,month:this.value.month,date:this.value.date})},setCheckedDate:function(){this.value.date=this.lastCheckedDate&&this.lastCheckedDate.year==this.value.year&&this.lastCheckedDate.month==this.value.month?this.lastCheckedDate.date:""},getDateStr:function(a,b,c){var i,j,k,l,n,o,p,q,r,s,e="",g=f.getWeekInMonth(a,b),h=f.getDaysInMonth(a,b-1);for(i=g-1;i>=0;i--)e+='<li class="prevdate" data-day="'+(h-i)+'">'+(h-i)+"</li>";for(j=f.getDaysInMonth(a,b),k=1,l=j,new Date(a,b,c),n=new Date(a,b,1),lastDate=new Date(a,b,j),minDateDay=d.minDate.getDate(),d.minDate>lastDate?k=j+1:d.minDate>=n&&d.minDate<=lastDate&&(k=minDateDay),d.maxDate&&(o=d.maxDate.getDate(),d.maxDate<n?l=k-1:d.maxDate>=n&&d.maxDate<=lastDate&&(l=o)),p=1;k>p;p++)e+='<li class="disabled" data-day="'+p+'">'+p+"</li>";for(i=k;l>=i;i++)q="",a==this.value.year&&b==this.value.month&&c==i&&(q="current"),e+='<li class="'+q+'" data-day="'+i+'">'+i+"</li>";for(r=l+1;j>=r;r++)e+='<li class="disabled" data-day="'+r+'">'+r+"</li>";if(s=(j+g)%7,0!==s)for(p=1;7-s>=p;p++)e+='<li class="nextdate" data-day="'+p+'">'+p+"</li>";return e},updateDate:function(b){var d,e,f,c=a(".md_datearea.in");1==b?(d="out_left",e="out_right"):(d="out_right",e="out_left"),f=a('<ul class="md_datearea '+e+'"></ul>'),f.html(this.getDateStr(this.value.year,this.value.month,this.value.date)),a(".md_body").append(f),setTimeout(function(){f.removeClass(e).addClass("in"),c.removeClass("in").addClass(d)},0)},refreshView:function(){var d,e,g,h,i,b=this.input.val(),c=null;b?(d=b.split("-"),c=new Date(d[0],d[1]-1,d[2])):c=new Date,e=this.value.year=c.getFullYear(),g=this.value.month=c.getMonth(),h=this.value.date=c.getDate(),a(".yeartag").text(e).data("year",e),a(".monthtag").text(f.getMonth(g)+"月").data("month",g),i=this.getDateStr(e,g,h),a(".md_datearea").html(i)},input:null,initListeners:function(){var b=this;e.on("tap",function(){if(b.input=a(this),a(".md_mask").length)b._hidePanel();else{b.renderHTML();var c=a(".md_panel"),d=a(".md_mask");b.afterShowPanel(d,c),setTimeout(function(){b._showPanel()},50)}})},afterShowPanel:function(b,c){var d=this;b.on("tap",function(){d._hidePanel()}),c.delegates({".change_month":function(){var b=a(this).hasClass("md_next")?1:-1;d._changeMonth(b)},".change_year":function(){var b=a(this).hasClass("md_next")?1:-1;d._changeYear(b)},".out_left, .out_right":{webkitTransitionEnd:function(){a(this).remove()}},".md_datearea li":function(){var c,b=a(this);b.hasClass("disabled")||(d.value.date=b.data("day"),c=0,b.hasClass("nextdate")?c=1:b.hasClass("prevdate")&&(c=-1),0!==c?d._changeMonth(c,d.value.date):b.addClass("current").siblings(".current").removeClass("current"))},".md_ok":function(){var b,a=~~d.value.month+1;10>a&&(a="0"+a),b=d.value.date,""===b&&(b=d.value.date=1),10>b&&(b="0"+b),d.input.val(d.value.year+"-"+a+"-"+b),d._hidePanel()},".md_cancel":function(){d._hidePanel()}})}},g.init()}}(Zepto);
//monther
!function(a){return a.fn.monther=function(b){var c={title:"请选择年月",yearStart:1980,yearEnd:null,onOk:null,onCancel:null},d=a.extend(c,b),e=a(this),f=48,g={input:null,init:function(){var b=this;e.on("tap",function(){if(b.input=a(this),a(".mt_mask").length)b.hidePanel();else{b.renderHTML();var c=a(".mt_poppanel"),d=a(".mt_date",c),e=a(".mt_time",c);b.afterRenderHTML(c,d,e),b.pancelBind(c,d,e),b.showPanel(),b.setValue()}})},renderHTML:function(){var b='<div class="mt_mask"></div><div id="mtimer" class="mt_poppanel"><div class="mt_panel"><h3 class="mt_title">'+d.title+'</h3><div class="mt_body"><div class="mt_date"><ul><li class="mt_note">上下滚动选取年</li><li></li></ul></div><div class="mt_time"><ul><li class="mt_note">上下滚动选取月</li><li></li></ul></div><div class="mt_indicate"></div></div><div class="mt_confirm"><a href="javascript:void(0);" class="mt_ok">确定</a> <a href="javascript:void(0);" class="mt_cancel">取消</a></div></div></div>';a(document.body).append(b)},afterRenderHTML:function(a,b,c){var j,k,l,m,n,p,q,e=this,g="",h=d.yearStart,i=d.yearEnd||(new Date).getFullYear();for(j=h;i>=j;j++)sel=j==h?"selected":"",g+='<li class="'+sel+'" data-date="'+j+'年">'+j+"年</li>";for(g+="<li></li><li></li>",b.find("ul").append(g),k=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],l=k.length,m="",n=0;l>n;n++)sel=0==n?"selected":"",m+='<li class="'+sel+'" data-time="'+k[n]+'">'+k[n]+"</li>";m+="<li></li><li></li>",c.find("ul").append(m),p=new IScroll(".mt_date",{snap:"li",probeType:2,tap:!0}),p.on("scroll",function(){e.updateSelected(b,this)}),p.on("scrollEnd",function(){e.updateSelected(b,this)}),q=new IScroll(".mt_time",{snap:"li",probeType:2,tap:!0}),q.on("scroll",function(){e.updateSelected(c,this)}),q.on("scrollEnd",function(){e.updateSelected(c,this)}),this.dateScroll=p,this.timeScroll=q},pancelBind:function(b,c,e){var f=this;c.find("li").on("tap",function(){f.checkDate(a(this))}),e.find("li").on("tap",function(){f.checkTime(a(this))}),a(".mt_ok",b).on("tap",function(){var a=c.find(".selected").data("date"),g=e.find(".selected").data("time");f.input.val(a+" "+g),f.hidePanel(),d.onOk&&"function"==typeof d.onOk&&d.onOk(b)}),a(".mt_cancel",b).on("tap",function(){f.hidePanel(),d.onCancel&&"function"==typeof d.onCancel&&d.onCancel(b)}),a(".mt_mask").on("tap",function(){f.hidePanel()})},updateSelected:function(a,b){var c=-b.y/f+2,d=a.find("li").eq(c);d.addClass("selected").siblings().removeClass("selected")},showPanel:function(){a(".mt_poppanel, .mt_mask").addClass("show")},hidePanel:function(){a(".mt_poppanel, .mt_mask").remove()},setValue:function(){var b=this.input.val(),c=b.split(" "),d=c[0],e=c[1],f=a('.mt_date li[data-date="'+d+'"]'),g=a('.mt_time li[data-time="'+e+'"]');this.checkDate(f),this.checkTime(g)},checkDate:function(a){var b=a.prev("li").prev("li");this.dateScroll.scrollToElement(b[0])},checkTime:function(a){var b=a.prev("li").prev("li");this.timeScroll.scrollToElement(b[0])}};return g.init(),g},a.fn.monther}(Zepto);
//mtimer
!function(a){return a.fn.mtimer=function(b){var c={dateStart:new Date,dateNum:10,timeStart:9,timeNum:12,onOk:null,onCancel:null},d=a.extend(c,b),e=a(this),f=48,g={input:null,init:function(){var b=this;e.on("tap",function(){if(b.input=a(this),a(".mt_mask").length)b.hidePanel();else{b.renderHTML();var c=a(".mt_poppanel"),d=a(".mt_date",c),e=a(".mt_time",c);b.afterRenderHTML(c,d,e),b.pancelBind(c,d,e),b.showPanel(),b.setValue()}})},renderHTML:function(){var b=d.timeStart+":00",c=d.timeStart+d.timeNum+":00",e='<div class="mt_mask"></div><div id="mtimer" class="mt_poppanel"><div class="mt_panel"><h3 class="mt_title">请选择时间</h3><div class="mt_body"><div class="mt_date"><ul><li class="mt_note">上下滚动选取时间</li><li></li></ul></div><div class="mt_time"><ul><li class="mt_note">可选时间：'+b+"-"+c+'</li><li></li></ul></div><div class="mt_indicate"></div></div><div class="mt_confirm"><a href="javascript:void(0);" class="mt_ok">确定</a> <a href="javascript:void(0);" class="mt_cancel">取消</a></div></div></div>';a(document.body).append(e)},afterRenderHTML:function(a,b,c){var l,m,n,o,p,q,r,s,t,u,w,x,e=this,g="",h=d.dateStart,i=h.getFullYear(),j=h.getMonth(),k=h.getDate();for(l=0;l<d.dateNum;l++)m=new Date(i,j,k+l),n=m.getMonth()+1,o=m.getDate(),p=m.getDay(),q="日一二三四五六".charAt(p),r=0==l?"selected":"",10>n&&(n="0"+n),10>o&&(o="0"+o),g+='<li class="'+r+'" data-date="'+n+"-"+o+'">'+n+"月"+o+"日&nbsp;星期"+q+"</li>";for(g+="<li></li><li></li>",b.find("ul").append(g),s="",t=0;t<d.timeNum;t++)u=d.timeStart+t,r=0==t?"selected":"",s+='<li class="'+r+'" data-time="'+u+':00">'+u+':00</li><li data-time="'+u+':30">'+u+":30</li>",t==d.timeNum-1&&(s+='<li data-time="'+(u+1)+':00">'+(u+1)+":00</li>");s+="<li></li><li></li>",c.find("ul").append(s),w=new IScroll(".mt_date",{snap:"li",probeType:2,tap:!0}),w.on("scroll",function(){e.updateSelected(b,this)}),w.on("scrollEnd",function(){e.updateSelected(b,this)}),x=new IScroll(".mt_time",{snap:"li",probeType:2,tap:!0}),x.on("scroll",function(){e.updateSelected(c,this)}),x.on("scrollEnd",function(){e.updateSelected(c,this)}),this.dateScroll=w,this.timeScroll=x},pancelBind:function(b,c,e){var f=this;c.find("li").on("tap",function(){f.checkDate(a(this))}),e.find("li").on("tap",function(){f.checkTime(a(this))}),a(".mt_ok",b).on("tap",function(){var a=c.find(".selected").data("date"),g=e.find(".selected").data("time");f.input.val(a+" "+g),f.hidePanel(),d.onOk&&"function"==typeof d.onOk&&d.onOk(b)}),a(".mt_cancel",b).on("tap",function(){f.hidePanel(),d.onCancel&&"function"==typeof d.onCancel&&d.onCancel(b)}),a(".mt_mask").on("tap",function(){f.hidePanel()})},updateSelected:function(a,b){var c=-b.y/f+2,d=a.find("li").eq(c);d.addClass("selected").siblings().removeClass("selected")},showPanel:function(){a(".mt_poppanel, .mt_mask").addClass("show")},hidePanel:function(){a(".mt_poppanel, .mt_mask").remove(),this.dateScroll=null,this.timeScroll=null},setValue:function(){var b=this.input.val(),c=b.split(" "),d=c[0],e=c[1],f=a('.mt_date li[data-date="'+d+'"]'),g=a('.mt_time li[data-time="'+e+'"]');this.checkDate(f),this.checkTime(g)},checkDate:function(a){var b=a.prev("li").prev("li");this.dateScroll.scrollToElement(b[0])},checkTime:function(a){var b=a.prev("li").prev("li");this.timeScroll.scrollToElement(b[0])}};return g.init(),g},a.fn.mtimer}(Zepto);

var sos = sos || {};
sos.plus ={
    init : function () {
        var me = this;
        me.initDateTimeInput();//日历、月、时间控件加载
        me.dateToNow();
        me.renderDropDistinct();
    },
    initDateTimeInput : function () {

        if ($('.txt-date').length) {
            $('.txt-date').mdater({
                minDate : new Date(1970, 1, 1)//最小日期
            });
        };

        if ($('.txt-month').length) {
            $('.txt-month').monther();
        };

        if ($('.txt-time').length) {
            $('.txt-time').mtimer();
        };
    },
    dateToNow : function () {
        var $end = $('.txt-endMonth');
        $('.fn-dateNow').on('tap',function  () {
            var $input = $(this).find('input');
            if($(this).hasClass('chked')){
                $(this).removeClass('chked');
                $input.prop('checked',false);
                sos.base.formV.addInputs($end);
                $end.show();
            }else{
                $(this).addClass('chked');
                $input.prop('checked',true);
                sos.base.formV.removeInputs($end);
                $end.hide();
            }
        });
    },
    getSelTxt : function (option) {
        return $(option).not(function(){ return !this.selected }).text();
    },
    renderDropDistinct : function () {
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
                var pName = t.getSelTxt($(this).find('option'));
                t.changeProvince(this.value,pName);
            });
            // change city
            $('.drop-city').change(function () {
                var districtData = t.addOptHtml(region.data.district,this.value);
                $('.drop-distinct').html(districtData.html);
                $('#city').val(t.getSelTxt('.drop-city option'));
                $('#district').val(t.getSelTxt('.drop-distinct option'));
            });
            // change distinct
            $('.drop-distinct').change(function () {
                $('#district').val(t.getSelTxt('.drop-distinct option'));
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
        window.console && console.log(v1,t1,t2,t3);
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
        //window.console && console.log(t1,t2,t3);
          //$zip.text(v3||$('.drop-distinct option:first').val());
        $('#province').val(t1);
        $('#city').val(t2);
        $('#district').val(t3);
    }

}


$(function() {
    sos.plus.init();


});