define([
    'jquery.min',
], function () {
    return {
        tab: (function () {
            let $tabul = $('.L1-tab .tab-heading .tab-heading__items');
            let $tabdiv = $('.L1-tab .tab-content');
            let $setction = $('.L1-tab');
            // $tabul.each(function () {
            //     var _this3 = $(this);
            //     $(this).find('li a').on('click', function () {

            //        var sum =  _this3.find("li a").index($(this));
            //         $tabul.each(function () {
            //             $(this).find('li a').removeClass('active').eq(num).addClass('active');
            //           })
            //         //   divshow(num);
            //         // $(this).addClass('active');
            //       });         
            //   }); 

            $setction.each(function () {
                var _this3 = $(this);

                $(this).find('.tab-heading__items li a').on('click', function () {
                    var sum = _this3.find(".tab-heading__items li a").index($(this));
                    $tabul.each(function () {
                        $(this).find('li a').removeClass('active').eq(sum).addClass('active');
                    });

                    $tabdiv.each(function () {
                        if ($(this).children('div').length > 1) {
                            $(this).children('div').removeClass('active').eq(sum).addClass('active');
                        }

                    })
                });
            });
        }())
    }
});