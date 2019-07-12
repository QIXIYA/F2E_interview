define([
    'jquery.min',
], function () {
    return {
        nav: (function () {
            $('.nav-mask-cover').on('click', function () {
                $('.nav-mask-cover').css({
                    'display': 'none'
                });
                $('#u-main-nav-list').children('div').each(function () {
                    $(this).css({
                        'display': 'none'
                    });
                  });
            })
            $('.left-nav li').not('.nav-logo').each(function () {
                $(this).on('click', function () {
                    let $sum = '.' + $(this).attr('class') + '-list';
                    $('.nav-mask-cover').css({
                        'display': 'block'
                    });
                    $($sum).toggle().siblings().css({
                        'display': 'none'
                    });
                    if ($($sum).css('display') == 'none') {
                        $('.nav-mask-cover').css({
                            'display': 'none'
                        });
                    };
                });
            });

            $('.right-nav li').not('.nav-guide').not('.nav-announcement').not('.nav-shoplist').not('.nav-ele-paper').each(function () {
                $(this).on('click', function () {
                    let $sum = '.' + $(this).attr('class') + '-div';
                    $('.nav-mask-cover').css({
                        'display': 'block'
                    });
                    $($sum).toggle().siblings().css({
                        'display': 'none'
                    });
                    if ($($sum).css('display') == 'none') {
                        $('.nav-mask-cover').css({
                            'display': 'none'
                        });
                    };
                });
            });



            $('.nav-close-btn').each(function () {
                $(this).on('click', function () {
                    $('.nav-mask-cover').css({
                        'display': 'none'
                    });
                    $('#u-main-nav-list').children('div').css({
                        'display': 'none'
                    });
                });
            });
        }())
    }
});