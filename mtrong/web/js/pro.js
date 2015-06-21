var mTrong = mTrong||{};
mTrong.pro = {
	init : function () {
		var t = this;
		$('.li-allSku').hoverClass('li-allSku-over');
		$('.li-mySku').hoverClass('li-mySku-over',function (t) {
			var $img=$(t).find('.img-pop');
			var src = $img.attr('src4');
			src&&$img.attr('src',src).removeAttr('src4');
		});
		$('.li-allSku-b .p-item').hoverClass('p-item-over');
		t.detailsTab();
		t.thumbShow();
		t.popShow();
		t.fixMySkuList();
		t.opProlist();
		t.toCart();
	},
	detailsTab : function () {//详细介绍tab切换
		$('.detailsBox').soChange({
			thumbObj : '.h3-details .s-title',
			thumbNowClass :'s-title-now',
			autoChange : false,
			slideTime : 0
		});
	},
	thumbShow : function () {//大图相册事件
		$('.a-thumb').click(function () {
			var src = $(this).attr('href');
			$('.img-bigShow').attr('src',src);
			return false;
		});
	},
	popShow : function () {
		$('.li-allSku').find('.a-thumb').mouseenter(function () {//左侧商品列表图片鼠标经过事件
			var $p = $(this).next('.s-popshow');
			var $img=$p.find('.img-pop');
			var src = $img.attr('src4');
			$p.show();
			src&&$img.attr('src',src).removeAttr('src4');
		}).mouseleave(function () {
			$(this).next('.s-popshow').hide();
		});
	},
	opProlist : function () {//操作商品列表事件
		var t = this;
		$('.allSkuList .em-op-d').click(function () {//减少
			var $num = $(this).next('.txt-num');
			var $s = $(this).parent('.s-op');
			var num = $num.val();
			//var min = $num.attr('rel')||1;
			num = (num * 1 - 1) < 0 ? 0 : (num * 1 - 1);
			var stock = $num.attr("stock");
			if (num > stock) {
			    alert("对不起，库存数不足");
			    num = stock;
			}
			$num.val(num);
			var d = {
				sku : $s.attr('sku'),
				color : $s.attr('color'),
				price : $.attr('price')
			}
			t.opMyHtml(num,d);
		});

		$('.allSkuList .em-op-a').click(function () {//增加商品事件
			var $num = $(this).prev('.txt-num');
			var $s = $(this).parent('.s-op');
			var num = $num.val();
			window.console && console.log(num);
			num = num * 1 + 1;
			var stock = $num.attr("stock");
			if (num > stock) {
			    alert("对不起，库存数不足");
			    num = stock;
			}
			$num.val(num);
			var d = {
				sku : $s.attr('sku'),
				color : $s.attr('color'),
				price : $s.attr('price'),
				img : $s.attr('img')
			}
			t.opMyHtml(num,d);
		});

		$('.txt-num').keyup(function () {//按键事件
			var num = $(this).val();
			var $s = $(this).parent('.s-op');
			num = num.replace(/\D/g,'');
			window.console && console.log(num);
			num = (isNaN(num) ? 0 : num) * 1;
			var stock = $(this).attr("stock");
			if (num > stock) {
			    alert("对不起，库存数不足");
			    num = stock;
			}
			$(this).val(num);
			var d = {
				sku : $s.attr('sku'),
				color : $s.attr('color'),
				price : $s.attr('price'),
				img : $s.attr('img')
			}
			t.opMyHtml(num,d);
		});
	},
	opMyHtml : function (num,d) {//操作公用事件函数
		var t = this;
		var $m = $('#my-'+d.sku); 
		if (num==0&&$m.length) {//为0
			$m.remove();
		}
		if (num>0) {//大于0
			if ($m.length) {//已有节点
				$m.find('.em-num').text(num);
			}else {//还未创建节点
				$('.ul-mySku').append(t.myListHtml(num,d));
				t.addMyLiE($('.ul-mySku li:last'));
			}
		}
		t.isTotal();
	},
	myListHtml : function (num,data) {//已选列表html行
		window.console && console.log(data);
		return '<li id="my-'+data.sku+'" class="li-mySku">'+
			'<span class="s-s s-1">'+data.sku+'</span><span class="s-s s-2">'+data.color+'</span><span class="s-s s-3"><em class="em-num" rel="'+data.price+'">'+num+'</em>个</span><a class="a-op-x" href="#">删除</a>'+
			'<span class="s-popshow"><img class="img-pop" src="'+data.img+'" width="125" height="125" alt="" /><strong class="strong-t">'+data.sku+' <br />'+data.color+'</strong><em class="em-3j"></em></span>'+
		'</li>';
	},
	isTotal : function () {//每次更改已选列表更新商品总额
		var $p = $('.mySkuList .p-total');
		var $num = $p.find('.em-num'),$total = $p.find('.em-total');
		var num = 0 , total = 0;
		$('.li-mySku').find('.em-num').each(function () {
			var n = $(this).text();
			var price = $(this).attr('rel');
			num += n*1;
			total += n*100*price;
		});
		$num.text(num);
		$total.text((total/100).toFixed(2));
	},
	addMyLiE : function ($li) {
		var t = this;
		$li.hoverClass('li-mySku-over');//hoverClass，显示隐藏图片
		$li.find('.a-op-x').click(function () {//删除已选择的商品行
			$li.remove();
			var sku = $(this).parent('.li-mySku').attr('id').split('-')[1];
			$('.allSkuList .s-op[sku="'+sku+'"]').find('.txt-num').val(0);
			t.isTotal();
			return false;
		});
	},
	tipToCartHtml : function () {//点击“添加到购物车”后弹出tip html
		var html = '<div class="sucInCart">'+
			'<p class="p-tipInCart">加入购物车成功！</p>'+
			'<p class="p-tipDe">经小的们努力，您选购的商品已经搬上<em class="red">采购车</em><br />您现在可以：</p>'+
			'<p class="p-tipBtn"><a class="s-tipBtn s-toPro" href="'+mTrong.opt.redirct_url+'">继续采购</a> 或 <a class="s-tipBtn s-toCart" href="/site/truck/sheet.aspx">立即结算</a></p>'+
		'</div>';
		return html;
	},
	toCart : function () {//加入购物车，进入购物车页面事件
		var t = this;
		var chooseCart = null;
		$('.a-gotoCart').click(function () {
			var listArr = [];
			$('.li-mySku').each(function () {//循环获取提交数据数组
				listArr.push({
					sku_id:$(this).find('.s-1').text(),
					qty:$(this).find('.em-num').text()
				});
			});
			if (listArr.length>0) {
				mTrong.base.ajaxUrlSa('/site/api/Truck.aspx/add',{add_infos:listArr},function () {
					mTrong.base.miniCartGet();//刷新mini购物车

					$('.allSkuList').find('.txt-num').val(0);//重置选择列表
					$('.ul-mySku').empty();

					if ($('.sucInCart').length==0) {//判断添加tip html
						$('body').append(t.tipToCartHtml());
					}
					chooseCart = $.sobox.pop({//弹出tip框
						cls : 'mtrongBox-c',
						type : 'target',
						target : '.sucInCart',
						width:350
//						,onPop : function () {//把关闭时间绑定到“继续购物”按钮上
//							$('.sucInCart .s-toPro').unbind('click').bind('click',function () {
//								chooseCart.removePop();
//							});
//						}
					});

				});
			}
			return false;
		});

	},
	fixMySkuList : function () {//已选商品列表随屏固定
		var $allList = $('.allSkuList');
		var $myList = $('.mySkuList');
		var ah = $allList.height();
		var at = $allList.offset().top;
		var ml = $myList.offset().left;
		$(window).scroll(function () {
			var mh = $myList.height();
			if (ah>mh) {//只有当mylist高度大于alllist高度时
				var st = $(window).scrollTop();
				var eh = ah+at-mh;
				if (st>at&&st<eh) {//固定
					$myList.css({'position':'fixed','marginTop':'0px','left':ml,'top':'0px'});
					if (!-[1,]&&!window.XMLHttpRequest) {
						$myList.css({'position':'absolute','marginTop':'0px','left':ml,'top':st});
					}
				}else if (st>eh) {//滚动高度超出固定底部
					$myList.css({'position':'absolute','marginTop':'0px','left':ml,'top':eh});
				}else{//还未滚动到列表顶部
					$myList.css({'position':'relative','marginTop':'20px','left':'0px','top':'0px'});
				}
			}
		});
	}

};

$(function () {
	mTrong.pro.init();
});
