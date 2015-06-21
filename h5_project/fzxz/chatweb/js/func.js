$(function(){
	var wW = 0,wH = 0;
	var page = 0 , tIx = 0;
	function setWH() {
		wW = $(window).width()+8;
		//wW = 640;
		wH = $(window).height();
		window.console && console.log(wW);
		$('#container').width(wW).height(wH).show();
		$('.page').width(wW).height(wH);

		$('#msg-box').width(wW);
		$('.msg').width(wW);
		$('#msg-cont').width(wW*$('.msg').length);
		$('#ul-photo-thumb').width(wW*1875/1000);

		$('#h1-title').animate({top:'15%'},400,function () {
			$('#p-sale').animate({top:'16.25%'});
			$('#p-market').animate({top:'27.92%'});
		});
		$('#infolist-box').width(wW);
		$('#infolist-cont').width(691/100*wW);

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
		window.console && console.log((this.y>>0),page);
		eventPage(page);
	}

	function eventPage(page) {
		if (page == 0) {
			$('#h1-title').animate({top:'15%'},400,function () {
				$('#p-sale').animate({top:'16.25%'});
				$('#p-market').animate({top:'27.92%'});
			});
		}else {
			$('#h1-title').css({top:'-10.42%'});
			$('#p-sale').css({top:'-15.63%'});
			$('#p-market').css({top:'-26.04%'});
		}
		if (page == 2) {
			$('.xxbox').animate({left:'0px'});
		}else {
			$('.xxbox').css({left:'-1000px'});
		}
	}

	function switchThumb () {
		 tIx = Math.abs(this.x)/wW;
		window.console && console.log(tIx);
		$('.li-thumb').removeClass('li-thumb-now').eq(tIx).addClass('li-thumb-now');
		if ((tIx+1)/5>1) {
			$('#ul-photo-thumb').animate({left:-wW*9475/10000+'px'});
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