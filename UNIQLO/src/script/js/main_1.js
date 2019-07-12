// ;!function($){
// 	//banner数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});

// 	//lunbo数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// 	//tab切换数据
// 	$.ajax({
// 		url:'php/banner.php',
// 		dataType:'json'
// 	}).done(function(bannerdata){
// 		$.each(bannerdata,function(index,value){
// 			var $bannerstr='<ul>';

// 		});
// 	});
// }(jQuery);

// !function(){
// 	//banner效果

// }(jQuery);

// !function(){
// 	//lunbo效果

// }(jQuery);

// !function(){
// 	//小效果

// }(jQuery);


define([
  'jquery.min'
], function () {
  return {
    init: (function () {
      this.temp = $('.bd .nav1');
      this.picul = $('.bd .nav1 ul');
      this.picli = $('.bd .nav1 ul li');
      this.left = $('#L1-notice #slider_1250 .prev');
      this.right = $('#L1-notice #slider_1250 .next');
      this.num = 0;
      this.timer = null;
      this.wait = false;
      let _this = this;
      let $first = this.picli.first().clone();
      /* 克隆第一个li */
      let $last = this.picli.last().clone();
      /* 克隆最后一个li */
      this.picul.prepend($last);
      /* 向后添加li */
      this.picul.append($first);
      /* 向前添加li */
      this.liwidth = this.picli.eq(0).width();
      /* 获取第一li 的长度 */
      this.picul.width($('.bd .nav1 ul li').size() * this.liwidth).css('left', -this.liwidth);
      /* 给ul设置长度为li长度乘以li的数量， 再给ul设置left 向左移动一个li的长度 */

      $('#slider_1250').hover(function () {
        clearInterval(_this.timer);
      }, function () {
        _this.autoplay();
      });

      this.right.on('click', function () {
        if (!_this.wait) {
          _this.num++;
          _this.piculmove(_this.num);
        }
      });

      this.left.on('click', function () {
        if (!_this.wait) {
          _this.num--;
          _this.piculmove(_this.num);
        }
      });

      this.piculmove = function (index) {
        let _this = this;
        this.wait = true;
        if (this.wait) {
          this.picul.animate({
            left: -(this.num + 1) * this.liwidth
          }, 500, function () {
            if (_this.num === _this.picli.length) {
              _this.picul.css('left', -_this.liwidth);
              _this.num = 0;
            }
            if (_this.num === -1) {
              _this.picul.css('left', -_this.liwidth * _this.picli.length - 1);
              _this.num = _this.picli.length - 1;
            }
            _this.wait = false;
          });
        }
      };

      this.autoplay = function () {
        let _this = this;
        this.timer = setInterval(function () {
          _this.right.click();
        }, 2000);
      };
      this.autoplay();
    }())
  }
});