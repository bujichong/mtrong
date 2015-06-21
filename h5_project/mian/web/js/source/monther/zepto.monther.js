(function ($) {
    $.fn.monther = function(opts){
		var defaults = {
			// dateStart : new Date(),
			title : '请选择年月',
			yearStart : 2000,
			yearEnd : null,
			// dateNum : 10,
			// timeStart : 9,
			// timeNum : 12,
			onOk : null,
			onCancel : null,
		};
		var option = $.extend(defaults, opts);

		var input = $(this),
			itemHeight = 48;
		var picker = {
			input : null,
			init : function(){
				var _this = this;

				//初始化点击input事件
				input.on('tap', function(){
					_this.input = $(this);
					if($('.mt_mask').length){
						_this.hidePanel();
					}else{
						_this.renderHTML();//添加html
						var container = $('.mt_poppanel'),
							mpYear = $('.mt_date', container),
							mpMonth = $('.mt_time', container);

						_this.afterRenderHTML(container,mpYear,mpMonth);//生成日期选择和滑动事件
						_this.pancelBind(container,mpYear,mpMonth);//对html绑定日期选择事件
						_this.showPanel();
						//初始化原有的数据
						_this.setValue();
					}
				});
			},
			renderHTML : function(){
				//var stime = option.timeStart + ':00';
				//var etime = option.timeStart + option.timeNum + ':00';
				var html = '<div class="mt_mask"></div><div id="mtimer" class="mt_poppanel"><div class="mt_panel"><h3 class="mt_title">'+option.title+'</h3><div class="mt_body"><div class="mt_date"><ul><li class="mt_note">上下滚动选取年</li><li></li></ul></div><div class="mt_time"><ul><li class="mt_note">上下滚动选取月</li><li></li></ul></div><div class="mt_indicate"></div></div><div class="mt_confirm"><a href="javascript:void(0);" class="mt_ok">确定</a> <a href="javascript:void(0);" class="mt_cancel">取消</a></div></div></div>';
				$(document.body).append(html);
			},
			afterRenderHTML : function (container,mpYear,mpMonth) {
				var _this = this;
				//初始化date
				var dateStr = '',
					yearStart = option.yearStart,
					yearEnd = option.yearEnd || (new Date()).getFullYear();
					//window.console && console.log(yearStart,yearEnd);
				for(var i=yearStart; i<=yearEnd; i++){
						sel = i == yearStart ? 'selected' : '';
					dateStr += '<li class="'+sel+'" data-date="'+i+'年">'+i+'年</li>';
				}
				dateStr += '<li></li><li></li>';
				mpYear.find('ul').append(dateStr);

				//初始化time
				var monthArr = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
				var monthLen = monthArr.length;
				var monthStr = '';
				for(var j=0; j<monthLen; j++){
						sel = j == 0 ? 'selected' : '';
					monthStr += '<li class="'+sel+'" data-time="'+monthArr[j]+'">'+monthArr[j]+'</li>';
				}
				monthStr += '<li></li><li></li>';
				mpMonth.find('ul').append(monthStr);

				//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				//初始化scroll
				var elHeight = itemHeight;
				var dateScroll = new IScroll('.mt_date', {
					snap : 'li',
					probeType : 2,
					tap : true
				});
				dateScroll.on('scroll', function(){
					_this.updateSelected(mpYear, this);
				});
				dateScroll.on('scrollEnd', function(){
					_this.updateSelected(mpYear, this);
				});
				var timeScroll = new IScroll('.mt_time', {
					snap : 'li',
					probeType : 2,
					tap : true
				});
				timeScroll.on('scroll', function(){
					_this.updateSelected(mpMonth, this);
				});
				timeScroll.on('scrollEnd', function(){
					_this.updateSelected(mpMonth, this);
				});

				this.dateScroll = dateScroll;
				this.timeScroll = timeScroll;
			},
			pancelBind : function (container,mpYear,mpMonth) {
				var _this = this;
				//初始化点击li
				mpYear.find('li').on('tap', function(){
					_this.checkDate($(this));
				});
				mpMonth.find('li').on('tap', function(){
					_this.checkTime($(this));
				});
				//初始化点击事件
				$('.mt_ok', container).on('tap', function(){
					var date = mpYear.find('.selected').data('date');
					var time = mpMonth.find('.selected').data('time');
					_this.input.val(date + ' ' + time);
					_this.hidePanel();
					option.onOk && typeof option.onOk=='function' && option.onOk(container);
				});
				$('.mt_cancel', container).on('tap', function(){
					_this.hidePanel();
					option.onCancel && typeof option.onCancel=='function' && option.onCancel(container);
				});
				$('.mt_mask').on('tap', function(){
					_this.hidePanel();
				});
			},
			updateSelected : function(container, iscroll){
				var index = (-iscroll.y) / itemHeight + 2;
				var current = container.find('li').eq(index);
				current.addClass('selected').siblings().removeClass('selected');
			},
			showPanel : function(container){
				$('.mt_poppanel, .mt_mask').addClass('show');
			},
			hidePanel : function(){
				$('.mt_poppanel, .mt_mask').remove();
			},
			setValue : function(){
				var value = this.input.val();
				var dateArr = value.split(' '),
					date = dateArr[0],
					time = dateArr[1],
					dateItem = $('.mt_date li[data-date="'+date+'"]'),
					timeItem = $('.mt_time li[data-time="'+time+'"]');
				this.checkDate(dateItem);
				this.checkTime(timeItem);
			},
			checkDate : function(el){
				var target = el.prev('li').prev('li');
				this.dateScroll.scrollToElement(target[0]);
			},
			checkTime : function(el){
				var target = el.prev('li').prev('li');
				this.timeScroll.scrollToElement(target[0]);
			}
		}
		picker.init();
		return picker;
	}
	return $.fn.monther;
})(Zepto);
