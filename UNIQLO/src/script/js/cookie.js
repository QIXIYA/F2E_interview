define([
    'jquery.min',
    'jquery.cookie'
], function () {
    return {
        cookie: (function () {
            if($.cookie('tell') != null) {
                $('.tell_a').empty().append('<a href >'+$.cookie('tell')+'</a>');
                $('.login_a').empty().append('<a href="http://10.31.158.18/UNIQLO/src/UNIQLO.html" class="exit">退出</a>');

                $('.exit').on('click', function () {
                    $.cookie('tell', '', { expires: -1 });
                    $('.tell_a').empty().append('<a href="http://10.31.158.18/UNIQLO/src/registor.html">注册</a>');
                    $('.login_a').empty().append('<a href="http://10.31.158.18/UNIQLO/src/login.html" class="exit">登录</a>');
                  });
            }
        }())
    }
});