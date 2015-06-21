$(function(){
	var wW = 0,wH = 0;
	var page = 0 , tIx = 0;
	var pagePre = 0;
	function setWH() {
		wW = $(window).width()+8;
		//wW = 640;
		wH = $(window).height();
		pagePre = parseInt(wH/wW*100);
		//alert(pagePre);
		//window.console && console.log(wW);
		$('#container').width(wW).height(wH).show();
		$('.page').width(wW).height(wH);


		$('#p-linebuy').width(wW*8/10);
		$('#p-linebuy img').width(wW*18/100);
		$('#msg-box').width(wW);
		$('.msg').width(wW);
		$('.user-photo').css({width:wW/2+'px',height:wW/2+'px'});
		$('.li-thumb').css({width:wW*138/1000+'px',height:wW*138/1000+'px'});
		$('.img-thumb').css({width:wW*138/1000+'px',height:wW*138/1000+'px'});
		$('#msg-cont').width(wW*$('.msg').length);
		$('#ul-photo-thumb').width(wW*1875/1000);

		$('#h1-title').animate({top:'13.5%'},400,function () {
			$('#p-sale').animate({top:'14.75%'});
			$('#p-market').animate({top:'25.2%'});
			$('#p-linebuy').animate({top:'39.4%'});
		});
		$('#infolist-box').width(wW);
		$('.info').css({width:wW*3/4+'px'});
		$('#infolist-cont').width((wW*3/4+12)*$('.info').length+70);

		if (pagePre<150) {
			var pp = 150-pagePre;
			$('.imgbg-auto').css({'marginTop':-parseInt(1.6*pp)+'px'});
			$('#msg-box').css({'marginTop':-pp*19/20+'px'});
			$('#infolist-box').css({'marginTop':-pp/2+'px'});
		}
		if (pagePre<120) {
			$('#container').addClass('container-low');
			$('.user-photo').css({width:wW*9/20+'px',height:wW*9/20+'px'});
		}

	}

	$('.li-thumb:first').addClass('li-thumb-now');
	setWH();

	$(window).resize(function () {
		setWH();
	});

	var myScroll = new IScroll('#container', {
		scrollX: false,
		scrollY: true,
		momentum: false,
		useTransition: false,
		snap: true,
		click: true,
		snapSpeed: 800,
		keyBindings: true
	});

	var myScroll2 = new IScroll('#msg-box', {
		scrollX: true,
		scrollY: false,
		momentum: false,
		useTransition: false,
		snap: true,
		snapSpeed: 800,
		keyBindings: true
	});

	var myScroll3 = new IScroll('#infolist-box', {scrollX: true, scrollY: false, mouseWheel: true});
	//var myScroll4 = new IScroll('#phto-thumb', {scrollX: true, scrollY: false, mouseWheel: true});

	function switchPage () {
		page = Math.abs(this.y>>0)/wH;
		//window.console && console.log((this.y>>0),page);
		eventPage(page);
	}

	function eventPage(page) {
		if (page == 0) {
			$('#h1-title').animate({top:'13.5%'},400,function () {
				$('#p-sale').animate({top:'14.75%'});
				$('#p-market').animate({top:'25.2%'});
				$('#p-linebuy').animate({top:'39.4%'});
				$('.s-pageprev').hide();
			});
		}else {
			$('#h1-title').css({top:'-10.42%'});
			$('#p-sale').css({top:'-15.63%'});
			$('#p-market').css({top:'-26.04%'});
			$('#p-linebuy').css({top:'-26.04%'});
			$('.s-pageprev').show();
		}
		if (page == 2) {
			$('.xxbox').animate({left:'0px'});
			$('.s-pagenext').hide();
		}else {
			$('.xxbox').css({left:'-1000px'});
			$('.s-pagenext').show();
		}
	}

	function switchThumb () {
		 tIx = Math.abs(this.x)/wW;
		//window.console && console.log(tIx);
		$('.li-thumb').removeClass('li-thumb-now').eq(tIx).addClass('li-thumb-now');
		if ((tIx+1)/5>1) {
			$('#ul-photo-thumb').animate({left:-wW*9400/10000+'px'});
		}else {
			$('#ul-photo-thumb').animate({left:'0'});
		}
	}
	$('.li-thumb').click(function () {
		tIx = $('.li-thumb').index(this);
		$('.li-thumb').removeClass('li-thumb-now').eq(tIx).addClass('li-thumb-now');
		myScroll2.scrollToElement(document.querySelector('#msg-cont div:nth-child('+(tIx+1)+')'));
	});

	myScroll.on('scrollEnd', switchPage);
	myScroll2.on('scrollEnd', switchThumb);
});


document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);