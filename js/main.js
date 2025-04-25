var iUp = (function () {
	var t = 0,
		d = 150,
		clean = function () {
			t = 0;
		},
		up = function (e) {
			setTimeout(function () {
				$(e).addClass("up")
			}, t);
			t += d;
		},
		down = function (e) {
			$(e).removeClass("up");
		},
		toggle = function (e) {
			setTimeout(function () {
				$(e).toggleClass("up")
			}, t);
			t += d;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	}
})();

$(document).ready(function () {

	// 获取一言数据
	fetch('https://v1.hitokoto.cn').then(function (res) {
		return res.json();
	}).then(function (e) {
		$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
	}).catch(function (err) {
		console.error(err);
	})


	// var url = 'https://query.yahooapis.com/v1/public/yql' + 
	// '?q=' + encodeURIComponent('select * from json where url=@url') +
	// '&url=' + encodeURIComponent('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8') +
	// '&format=json&callback=?';

	/**
	 * 获取Bing壁纸
	 * 原先 YQL 已经无法提供服务了
	 * 改用 JsonBird：https://www.yzfyd.cn
	 * 
	 */
// ... 其他的 main.js 代码 ...

// 使用新的Bing Wallpaper API接口
var url = 'https://api.bimg.cc/random?w=1920&h=1080&mkt=zh-CN';
var $panel = $('#panel');
// 获取随机Bing壁纸
$.get(url, function (data) {
    // 由于API返回的是图片URL，我们直接将其设置为背景
    $panel.css("background", "url('" + data + "') center center no-repeat #666");
    $panel.css("background-size", "cover");
}).fail(function() {
    console.error("无法加载图片，使用默认图片。");
    var backupUrl = "url_to_backup_image.jpg"; // 替换为您的备用图片URL
    $panel.css("background", "url('" + backupUrl + "') center center no-repeat #666");
    $panel.css("background-size", "cover");
});

// ... 其余的 main.js 代码 ...


	$(".iUp").each(function (i, e) {
		iUp.up(e);
	});

	$(".js-avatar")[0].onload = function () {
		$(".js-avatar").addClass("show");
	}
});

$('.btn-mobile-menu__icon').click(function () {
	if ($('.navigation-wrapper').css('display') == "block") {
		$('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
			$('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		});
		$('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

	} else {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown');
	}
	$('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-ngleup animated fadeIn');
});
// ... 其他的 main.js 代码 ...

// 使用新的 Bing Wallpaper API 接口
var url = 'https://api.bimg.cc/random?w=1920&h=1080&mkt=zh-CN';
var $panel = $('#panel');

// 请求随机的 Bing 壁纸图片
$.get(url, function (result) {
    // 假设 API 直接返回图片的 URL
    $panel.css("background", "url('" + result + "') center center no-repeat #666");
    $panel.css("background-size", "cover");
}).fail(function() {
    console.error("无法加载图片，使用备用图片。");
    var backupUrl = "url_to_backup_image.jpg"; // 替换为您的备用图片 URL
    $panel.css("background", "url('" + backupUrl + "') center center no-repeat #666");
    $panel.css("background-size", "cover");
});

// ... 其余的 main.js 代码 ...

