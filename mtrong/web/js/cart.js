$.fn.extend({
	/**
	 * 取ID范围内所有值 $('#id').vals(空或true) -->{xx:yy} $('#id').vals(flase)
	 * -->xx=yy 赋值 $('#id').vals({xx:yy})
	 */
	vals : function(param) {
		if (typeof (param) == 'boolean' || param === undefined) {
			var c = {};// 暂存checkbox,选中的值用逗号隔开
			this.each(function() {
				if(/input/i.test(this.tagName)){
					var key = this.name || this.id;
					if (/checkbox/i.test(this.type)) {
						var val = this.checked ? (this.value || 'on') : '';
						if(val!=''){
							if (c[key]) {
								c[key] = c[key] + "," + val;
							} else {
								c[key] = val;
							}
						}
					} else if (/radio/i.test(this.type)) {
						if (this.checked){
							c[key] = $.trim($(this).val());
						}
					} else {
						c[key] = $.trim($(this).val());
					}
				} else if (/select/i.test(this.tagName)) {
					var key = this.name || this.id;
					c[key] = $.trim($(this).val()) + "";
				} else if ($(this).has(":input").length) {
					var sub = $(":input", this).vals();
					$.extend(c, sub);
				} else {
					var key = this.name || this.id;
					c[key] = $.trim($(this).val());
				}
				//console.timeEnd(xx);
			});
			return param !== false ? c : $.param(c);
		} else if (typeof (param) == 'object') {
			this.each(function() {
				if (/div|span|table|form|ul|li/i.test(this.tagName)) {
					$(":input,label,b", this).vals(param);
				} else {
					var nm = this.name || this.id;
					if(nm){
						var vl    = param[nm],
						  arr  = nm.match(/(\w*)\[(\d*)\]/),
						  obj  = nm.match(/(\w*)\.(\w*)/);
					if(arr&&arr.length==3){
						vl=param[arr[1]][arr[2]];
					}
					if(obj&&obj.length==3){
						vl=param[arr[1]][arr[2]];
					}
					if (vl !== undefined && vl !== null) {
						if (/label|b/i.test(this.tagName)) {
							$(this).text(vl);
						}else if(/checkbox/i.test(this.type)){
							if(vl===true) {
								$(this).attr("checked","checked");
							}else{
								$(this).removeAttr("checked");
							}
						}else if(/radio/i.test(this.type)){
							if(vl===true){
								if($(this).val()==='true'||$(this).val()==='1'){
									$(this).attr("checked","checked");
								}
							}else{
								if($(this).val()==='false'||$(this).val()==='0'){
									$(this).attr("checked","checked");
								}
							}
						}else  {
							$(this).val(vl);
						}
					}
					}
				}
			});
		}
	},
	clearForm : function(data) {
		$(":input:not(:submit)", this).val("");
		if (data)$(this).vals(data);
	}
});
var mTrong = mTrong||{};
mTrong.cart = {
	init : function () {
		var t = this;
		t.cartTotalFix();
		t.changeNum();
		t.delSomePros();
		t.bookingE();
		t.payE();
		$('.li-item').hoverClass('li-item-over');
	},
	bookingE : function () {//booking event
		if ($('.bookingBox').length) {
			var t = this;
			t.adrE();
			t.loadRegionAndRender();//加载地区数据，并初始化省市区
			t.validateAdr();
			t.addNewAdr();
			t.repairAdr();
			t.delAdr();
			t.stepStateInit();
			t.stepSomeE();
		}
	},
	payE : function () {//pay event
		if ($('.a-payByAlipay').length) {
			var t = this;
			t.aliPayTip();
		}
	},
	delSomePros : function () {
		if ($('.chk-selAllPros').length) {
			$one = $('.chk-one'),
			$all = $('.chk-selAllPros');

			$one.on('click',function() {//单项点击事件
			    if ($('.chk-one:checked').length == $('.chk-one').length) {//如果都选中则设置全选为真
			        $all.prop('checked', true);
			    }else{
			        $all.prop('checked',false);
			    };
			});
			$all.on('click',function() { //全选点击事件
			    if ($('.chk-one:checked').length == $('.chk-one').length) {//如果已经都全选则反选
			        $one.prop('checked',false);
			    } else {//全选
			        $one.attr('checked',true);
			    };
			});

			$('.a-delSomePros').click(function() {//删除事件
				var $chked = $('.chk-one:checked');
				if ($chked.length) {//当有选中商品
					var chkId = [];
					$chked.each(function(i,v) {
						var id = $(this).attr('name');//对应商品id放在check的name属性里
						chkId.push(id);
					});
					chkId = chkId.join(',');
					//window.console && console.log(chkId);
					$.ajax({
						url : 'js/true.json',//请求链接
						data : {chkId : chkId},//{chkId : '12457,1245,147'}
						type : 'get',
						success : function  (data) {//data返回至少为 : {"success":true}
							if (data.success) {
								window.location.reload();
							};
						}
					});
				}else{//如果一个商品都没有选择
					$.sobox.tip({cls:'so-popTip-sel',width:160,stayTime:2000,content:'请选择需要删除的商品！'});
				};
				return false;
			});
		};
	},
	cartTotalFix : function () {
		var ft = Math.floor($('.all-footer').offset().top);
		var $cartT = $('.cartTotalBox');
		$(window).scroll(function () {
			var st = $(window).scrollTop();
			var wh =$(window).height();
			var fh = Math.floor(st+wh);
			if (fh>ft) {
				$cartT.css({'position':'relative'});
				if (!-[1,]&&!window.XMLHttpRequest) {//ie6
					$cartT.css({top:'0px'});
				}
			}else {
				$cartT.css({'position':'fixed'});
				if (!-[1,]&&!window.XMLHttpRequest) {//ie6
					$cartT.css({'position':'absolute',top:(fh-40)+'px'});
				}
			}
		});
	},
	cartDoChange : function (num,ajaxUrl,ajaxBack) {
		//当前级
		var $num = $(this);
		var price = $num.attr('price');
		var sku = $num.attr('sku');
		//father级
		var $father = $(this).parents('.p-item');
		var $skuSunPrice = $father.find('.em-skuSumPrice');
		//parent级
		var $par = $(this).parents('.li-item');
		 var $nums = $par.find('.txt-num');
		var $itemSunNum = $par.find('.em-itemSumNum');
		var $itemSunPrice = $par.find('.em-itemSumPrice');
		//all级
		var $allSumNum = $('.em-ttNum');
		var $allSumPrice = $('.em-ttPrice');
		var $allPar = $(this).parents('.ul-cart');
		var $allNums = $allPar.find('.txt-num');

		var sendData = {
			sku : sku,
			num : num
		};

		$.ajax({
			url : ajaxUrl,
			data : sendData,
			type : "get",
			success : function (data) {
				if (data.success) {
					$num.val(num);
					$skuSunPrice.text(num*price);
					mTrong.cart.sumResult($nums,$itemSunNum,$itemSunPrice);
					mTrong.cart.sumResult($allNums,$allSumNum,$allSumPrice);
					if (ajaxBack) {ajaxBack()};
				};
			}
		});

	},
	sumResult : function ($nums,$sumNum,$sumPirce) {
		var sumNum=0,sumPrice=0;
		$nums.each(function (i,v) {
			var num = $(this).val()*1;
			var price = $(this).attr('price')*1;
			sumNum += num;
			sumPrice += price*num;
		});
		$sumNum.text(sumNum);
		$sumPirce.text(sumPrice);
	},
	changeNum : function () {
		var t =this;
		var $carPar = $('.ul-cart');
		$carPar.find('.em-op-d').click(function () {
			var $num = $(this).siblings('.txt-num');
			var num = $num.val();
			num = (num * 1 - 1) < 0 ? 0 : (num * 1 - 1);
			t.cartDoChange.call($num,num,'js/true.json');
		});
		$carPar.find('.em-op-a').click(function () {
			var $num = $(this).siblings('.txt-num');
			var num = $num.val();
			num = num * 1 + 1;
			t.cartDoChange.call($num,num,'js/true.json');

		});
		$carPar.find('.txt-num').keyup(function () {
			var num = $(this).val();
			num = num.replace(/\D/,'');
			num = (num==''?0:num)*1;
			t.cartDoChange.call(this,num,'js/true.json');
		});
		$carPar.find('.a-del').click(function() {
			var $father = $(this).parents('.p-item');
			var $num = $father.find('.txt-num');
			if(confirm("你确定删除此商品？")){
				t.cartDoChange.call($num,0,'js/true.json',function () {
					$father.remove();
				});
			}
			return false;
		});
		$('.a-clearAllPros').click(function() {
			$('.minicart .a-clearCart').trigger('click');
			return false;
		});
	},
	//booking step begin
	stepStateInit : function () {
		var t = this;
		if ($('.li-adrNow').length||$('.rad-adr:checked').length) {
			$('.li-step-1').addClass('step-ed');
		}
		if ($('.lab-radPay .rad:checked').length) {
			$('.li-step-2').addClass('step-ed');
		}
		if ($('.lab-radPass .rad:checked').length) {
			$('.li-step-3').addClass('step-ed');
		}
		t.canToPay();
	},
	stepSomeE : function () {
		var t = this;
		$('.li-adr').click(function () {
			var id = $(this).attr('id').split('-')[1];
			$('.payAll_receiver_id').val(id);
			$('.li-step-1').addClass('step-ed');
			t.canToPay();
		});
		$('#a-addNewAdr').click(function () {
			$('.li-step-1').removeClass('step-ed');
			t.canToPay();
		});
		$('.lab-radPay .rad').click(function () {
			$('.payAll_payment').val($(this).val());
			$('.li-step-2').addClass('step-ed');
			t.canToPay();
		});
		$('.lab-radPass .rad').click(function () {
			$('.payAll_logistics').val($(this).val());
			$('.em-tty').text($(this).attr('freight'));
			$('.em-ttPrice').text($(this).attr('total_amount'));
			$('.li-step-3').addClass('step-ed');
			t.canToPay();
		});
	},
	canToPay : function () {
		if ($('.step-ed').length==3) {
			$('.a-gotoPay').removeClass('unGotoPay').bind('click.submit',function () {
				$('form.payAll_CheckoutInfo').submit();
			});
		}else {
			$('.a-gotoPay').addClass('unGotoPay').unbind('click.submit').click(function () {
				return false;
			});
		}
	},
	//booking step end
	//booking adr event
	adrE : function () {
		var t = this;
		var $liAdr = $('.li-adr');
		$liAdr.bind('click.set',function () {
			$liAdr.removeClass('li-adrNow');
			$(this).addClass('li-adrNow').find('.rad').attr('checked','checked');
		});
		$('.a-setDef').bind('click.set',function () {
			var $parLi = $(this).parents('.li-adr');
			var id = $parLi.attr('id').split('-')[1];
			mTrong.base.ajaxUrlSa('/site/api/region.aspx/SetDefault',{receiver_id:id},function(){
				$liAdr.removeClass('li-defAdr');
				$parLi.addClass('li-defAdr');
			});
			return false;
		});
	},
	adrSoPop : null,
	adrValidate : null,
	validateAdr : function () {
		var t = this;
		t.adrValidate = $('.form-addAdr').soValidate({
			submit : function (form) {//默认验证成功提交submit事件
				var $mobile = $('.txt-addMobile'),$phone = $('.txt-addPhone');
				if ($.trim($mobile.val())==''&&$.trim($phone.val())=='') {
					$('.em-phoneTip').show();
				}else {
					$('.em-phoneTip').hide();
					t.adrSoPop.removePop();
					var adrData = form.vals();
					adrData = $.extend(adrData,{
						provinceTxt : $('.drop-province option:selected').text(),
						cityTxt : $('.drop-city option:selected').text(),
						distinctTxt : $('.drop-distinct option:selected').text()
					});
					if ($('.form-addAdr').attr('rel')=='new') {
						window.console && console.log(1,adrData);
						mTrong.base.ajaxUrlSa('/site/api/region.aspx/addorupdate',{
							receiver_id:0,
							receiver_state_id:adrData.province,
							receiver_city_id:adrData.city,
							receiver_district_id:adrData.district,
							receiver_address:adrData.address,
							receiver_name:adrData.receiver,
							receiver_phone:adrData.tel,
							receiver_mobile:adrData.mobile,
							isDefault:adrData.set_default_address=='on'},function (result) {
								adrData = $.extend(adrData,{addressNo:result.data.id});
								t.addAdrItem(adrData);
							});

					}else {
						window.console && console.log(2,adrData);
						mTrong.base.ajaxUrlSa('/site/api/region.aspx/addorupdate',{
							receiver_id:adrData.addressNo,
							receiver_state_id:adrData.province,
							receiver_city_id:adrData.city,
							receiver_district_id:adrData.district,
							receiver_address:adrData.address,
							receiver_name:adrData.receiver,
							receiver_phone:adrData.tel,
							receiver_mobile:adrData.mobile,
							isDefault:adrData.set_default_address=='on'},function () {
								t.repairAdrItem(adrData);
							});
					}
				}
			},
			fail : function (form,failInputs) {
				var $mobile = $('.txt-addMobile'),$phone = $('.txt-addPhone');
				if ($.trim($mobile.val())==''&&$.trim($phone.val())=='') {
					$('.em-phoneTip').show();
				}else {
					$('.em-phoneTip').hide();
				}
				var $failF = $(failInputs[0]);
				//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
				$failF.focus();
			}
		});

		$('.b-usezip').click(function () {
			$('.txt-zipCode').val($('.b-zipcode').text());
		});

	},
	addNewAdr : function () {
		var t = this;
		$('#a-addNewAdr').click(function () {
			t.adrSoPop = $.sobox.pop({
				type : 'target',
				target : '.addAdrBox',
				width : 820,
				cls : 'popAddNewAdr',
				title : '请填写收货地址',
				maskClick : false,
				beforePop : function () {
					t.resetPopAdr();
					t.adrValidate.clear();
					$('.form-addAdr').attr('rel','new');
				},
				closePop : function () {
					if ($('.li-adrNow').length||$('.rad-adr:checked').length) {
						$('.li-step-1').addClass('step-ed');
						t.canToPay();
					}
					$('.em-phoneTip').hide();
				}
			});
			return false;
		});


		$('.a-cancelAddAdr').click(function () {// cancel addPop
			t.adrSoPop.removePop();
			return false;
		});

	},
	resetPopAdr : function () {
		var t = this;
		$('.addAdrBox .txt').val('');
		$('.chk-setDefault').attr('checked','checked');
		t.provinceInit();
	},
	regionData : null,
	loadRegionAndRender : function () {
		var t = this;
		$.ajax({
			url: 'region.js',
			type: 'get',
			success : function  (data) {
				t.regionData = data;
				t.renderDropDistinct();
			}
		});
	},
	//booking distinct select begin
	renderDropDistinct : function () {
		var t = this, $zip = $('.b-zipcode');
		var region = t.regionData;
		//初始化
		t.provinceInit();

		// change province
		$('.drop-province').change(function () {
			t.changeProvince(this.value);
		});
		// change city
		$('.drop-city').change(function () {
			var districtData = t.addOptHtml(region.data.district,this.value);
			$('.drop-distinct').html(districtData.html);
			$zip.text($('.drop-distinct option:first').val());
		});
		// change distinct
		$('.drop-distinct').change(function () {
			$zip.text(this.value);
		});
	},
	provinceInit : function (v1,v2,v3) {
		var t = this;
		var region = t.regionData;
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
	changeProvince : function (v1,v2,v3) {
		var t = this;
		var region = t.regionData;
		var $zip = $('.b-zipcode');
		var cityData = t.addOptHtml(region.data.city,v1);
		$('.drop-city').html(cityData.html);
		$('.drop-city').val(v2);
		var disParId = v2||cityData.arr[0].id;
		var districtData = t.addOptHtml(region.data.district,disParId);
		$('.drop-distinct').html(districtData.html);
		if (v3) {$('.drop-distinct').val(v3);}
		$zip.text(v3||$('.drop-distinct option:first').val());
	},
	//booking distinct select end
	addAdrItem : function (data) {
		var t = this;
		data.addressNo = data.addressNo||1;
		var defCls = data.set_default_address=='on';
		var $liAdr = '	<li id="adr-'+data.addressNo+'" class="li-adr'+(defCls?' li-defAdr':'')+' li-adrNow">'+
				'<span class="s-mark">寄送至</span>'+
				'<label class="lab-adr">'+
					'<input type="radio" class="rad rad-adr" value="'+data.addressNo+'" name="addressNo" checked="checked" />'+
					'<span class="s-adr"> '+data.provinceTxt+' '+data.cityTxt+' '+data.distinctTxt+' '+data.address+'</span>（<span class="s-receiver">'+data.receiver+'</span>收） <em class="em-tel">'+data.mobile+' '+data.tel+'</em>'+
				'</label>'+
				'<span class="s-setAdr">'+
					'<em class="em-def">默认地址</em>'+
					'<a class="a-setDef" href="#">设置为默认</a>'+
				'</span>'+
				'<a class="a-repairAdr" href="#">修改本地址</a>'+
				'<a class="a-delAdr" href="#">删除</a>'+
				'<input type="hidden" value="'+data.province+'" class="province" name="province" />'+
				'<input type="hidden" value="'+data.city+'" class="city" name="city" />'+
				'<input type="hidden" value="'+data.district+'" class="district" name="district" />'+
				'<input type="hidden" value="'+data.address+'" class="address" name="address" />'+
				'<input type="hidden" value="'+data.receiver+'" class="receiver" name="receiver" />'+
				'<input type="hidden" value="'+data.zipcode+'" class="zipcode" name="zipcode" />'+
				'<input type="hidden" value="'+data.mobile+'" class="mobile" name="mobile" />'+
				'<input type="hidden" value="'+data.tel+'" class="tel" name="tel" />'+
			'</li>';
		//处理地址当前或者默认地址状态
		$('.li-adr').removeClass('li-adrNow');
		$('.li-adr .rad-adr').attr('checked','');
		defCls&&$('.li-adr').removeClass('li-defAdr');

		//重新绑定点击事件
		$('.li-adr').unbind('click.set');
		$('.a-setDef').unbind('click.set');
		$('.adr-list').prepend($liAdr);
		t.adrE();
		t.repairAdr('.li-adr:first');
		t.delAdr('.li-adr:first');
		//如果设为默认则向服务器提交默认事件
		if (data.set_default_address=='on') {
			mTrong.base.ajaxUrlSa('/site/api/region.aspx/SetDefault',{receiver_id:data.addressNo},function(){});
		}
		$('.li-step-1').addClass('step-ed');
		t.canToPay();
		$('.payAll_receiver_id').val(data.addressNo);//给提交的表单赋值地址id
	},
	repairAdrItem : function (data) {
		var addressNo = data.addressNo;
		var $li = $('#adr-'+addressNo);
		//window.console && console.log(data);
		$li.vals(data);
		$li.find('.s-adr').text(data.provinceTxt+' '+data.cityTxt+' '+data.distinctTxt+' '+data.address);
		$li.find('.s-receiver').text(data.receiver);
		$li.find('.em-tel').text(data.mobile+' '+data.tel);
		if (data.set_default_address=='on') {
			mTrong.base.ajaxUrlSa('/site/api/region.aspx/SetDefault',{receiver_id:data.addressNo},function(){
				$('.li-adr').removeClass('li-defAdr');
				$li.addClass('li-defAdr');
			});
		}
	},
	repairAdr : function (li) {
		var t = this;
		var li = li ||'.li-adr';
		$(li).find('.a-repairAdr').click(function () {
			var $li = $(this).parent('.li-adr');
			var adrData = t.adrItemVal($li);
			t.adrSoPop = $.sobox.pop({
				type : 'target',
				target : '.addAdrBox',
				width : 820,
				cls : 'popAddNewAdr',
				title : '请填写收货地址',
				maskClick : false,
				beforePop : function () {
					t.resetPopAdr();
					t.adrValidate.clear();
					$('.form-addAdr').attr('rel','repair');
					window.console && console.log(adrData);
					$('.form-addAdr').vals(adrData);
					var p = adrData.province;
					var c = adrData.city;
					var d = adrData.district;
					window.console && console.log(p,c,d);
					t.provinceInit(p,c,d);
				},
				closePop : function () {
					if ($('.li-adrNow').length) {
						$('.li-step-1').addClass('step-ed');
						t.canToPay();
					}
					$('.em-phoneTip').hide();
				}
			});
			return false;
		});
	},
	delAdr : function (li) {
		var t = this;
		var li = li ||'.li-adr';
		$(li).find('.a-delAdr').click(function () {
			var $par = $(this).parents('.li-adr');
			var id = $par.attr('id').split('-')[1];
			mTrong.base.ajaxUrlSa('/site/api/region.aspx/delete',{receiver_id:id},function(){
				$par.remove();
				$('.li-adr').unbind('click.set');
				$('.a-setDef').unbind('click.set');
				$('.li-step-1').removeClass('step-ed');
				t.canToPay();
				t.adrE();
			});
			return false;
		});
	},
	adrItemVal : function (par) {
		var data = {};
		$(par).find('input').each(function () {
			data[this.name]=this.value;
		});
		return data;
	},
	aliPayTip : function () {
		$('.a-payByAlipay').click(function () {
			$.sobox.pop({
				cls : 'mtrongBox-a',
				type : 'target',
				target : '.aliPayingTip',
				width :450,
				title : '登陆支付宝进行付款',
				drag : false
			});
		});
	}
};

$(function () {
	mTrong.cart.init();
});
