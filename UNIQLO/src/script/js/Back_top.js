define([
    'jquery.min',
], function () {
    return {
        back_top: (function () {
            let $top = $('.h-top');
            $(window).on('scroll', function () {
                let $scrolltop = $(window).scrollTop(); //滚动条的top值
                if ($scrolltop >= 600) {
                    $top.attr('style','display: block');
                } else {
                    $top.attr('style','display: none');
                }
            });

            $top.on('click', function () {
                $('html,body').animate({
                    scrollTop: 0
                });
            })
        }())
    }
});