define([
    'jquery.min'
], function () {
    return {
        fn: (function () {
            this.temp2 = $('.nav2');
            this.picdiv2 = $('.nav2 .bd');
            this.picli2 = $('.nav2 .bd li');
            this.btnli = $('#u-main-slider .hd ul li');
            this.left2 = $('.h-content .h-component .btn2_left');
            this.right2 = $('.h-content .h-component .btn2_right');
            this.num2 = 0;
            this.timer2 = null;
            this.wait2 = false;
            let _this2 = this;

            let $first2 = this.picli2.first().clone();
            // /* 克隆第一个li */
            let $last2 = this.picli2.last().clone();
            // /* 克隆最后一个li */
            this.picdiv2.prepend($last2);
            // /* 向后添加li */
            this.picdiv2.append($first2);
            /* 向前添加li */
            this.liwidth2 = this.picli2.eq(0).width();

            this.picdiv2.width($('.nav2 .bd li').size() * this.liwidth2).css('left', -this.liwidth2);

            this.btnli.on('click', function () {
                _this2.num2 = $(this).index(); //当前的按钮的索引
                console.log(num2);
                _this2.piculmove2(_this2.num2);
                _this2.btnli.eq(_this2.num2).addClass('on').siblings().removeClass('on');
            });
            this.temp2.prev().andSelf().hover(function () {
                clearInterval(_this2.timer2);
            }, function () {
                _this2.autoplay2();
            });

            this.right2.on('click', function () {
                if (!_this2.wait2) {
                    _this2.num2++;
                    if (_this2.num2 === _this2.btnli.length) {
                        _this2.btnli.eq(0).addClass('on').siblings().removeClass('on');
                    } else {
                        _this2.btnli.eq(_this2.num2).addClass('on').siblings().removeClass('on');
                    }
                    _this2.piculmove2(_this2.num2);
                }
            });

            this.left2.on('click', function () {
                if (!_this2.wait2) {
                    _this2.num2--;
                    _this2.btnli.eq(_this2.num2).addClass('on').siblings().removeClass('on');
                    _this2.piculmove2(_this2.num2);
                }
            });

            this.autoplay2 = function () {
                let _this2 = this;
                this.timer2 = setInterval(function () {
                    _this2.right2.click();
                }, 2000);
            };

            this.piculmove2 = function (index) {
                let _this2 = this;
                this.wait2 = true;
                if (this.wait2) {
                    this.picdiv2.animate({
                        left: -(this.num2 + 1) * this.liwidth2
                    }, 1000, function () {
                        if (_this2.num2 === _this2.btnli.length) {
                            _this2.picdiv2.css('left', -_this2.liwidth2);
                            _this2.num2 = 0;
                        }
                        if (_this2.num2 === -1) {
                            _this2.picdiv2.css('left', -_this2.liwidth2 * _this2.btnli.length - 1);
                            _this2.num2 = _this2.btnli.length - 1;
                        }
                        _this2.wait2 = false;
                    });
                }
            }
            this.autoplay2();
        })()
    }
})