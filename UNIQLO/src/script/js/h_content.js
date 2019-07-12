define([
    'jquery.min',
], function () {
    return {
        head: (function () {
            $(window).on('scroll', function () {
                let $top = $(window).scrollTop();
                if ($top >= 130) {
                    $('.head_sup').addClass('shortcut-fixed');
                    $('.head_area').css({
                        'width': '1280px',
                        'height': '42px;'
                    });
                    $('.head_box').addClass(
                        'h-affix').css({
                        'position': 'fixed',
                        'top': '-111px',
                        'left': '35.5px',
                        'width': '1280px'
                    });
                } else {
                    $('.head_sup').removeClass('shortcut-fixed');
                    $('.head_area').css({
                        'width': '',
                        'height': ''
                    });
                    $('.head_box').removeClass(
                        'h-affix').css({
                        'position': 'static',
                        'top': '',
                        'left': '',
                        'width': ''
                    });
                }
            });
        }()),
    };
});