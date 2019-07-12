define([
    'jquery.min',
], function () {
    return {
        sign: (function () {
            let differ = false;
            $('.h-combo-box').on('click', function () {
                if (differ = !differ) {
                    $('.popup-container').append('<div class="h-popup h-combo-box-popup" style="min-width: 480px; left: 435.5px; top: 128px;"><ul><li class="active"><span style="margin-right: 50px;">中国内地</span><span style="position: absolute; right: 7px;">+86</span></li><li><span style="margin-right: 50px;">中国香港</span><span style="position: absolute; right: 7px;">+852</span></li><li><span style="margin-right: 50px;">中国澳门</span><span style="position: absolute; right: 7px;">+853</span></li></ul></div>');
                } else {
                    $('.popup-container').empty();
                }
            });
            $('.popup-container').on('mouseover', '.h-popup li', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });

            $('.popup-container').on('click', '.h-popup li', function () {
                $(this).children('span').each(function () {
                    let num = $(this).index();
                    $('.h-combo-box-editor-inner span').eq(num).text($(this).text());
                })
                $('.popup-container').empty();
                differ = !differ;
            });
        }())
    };
});