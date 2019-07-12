define([
    'jquery.min',
    'jquery.cookie'
], function () {
    return {
        log_ph: (function () {
            let $phone = $('.login_phone');
            let $pass = $('.login_pass');

            let isPhoneNo = function (phone) {
                let pattern = /^1[34578]\d{9}$/;
                return pattern.test(phone);
            };

            let isPassNo = function (pass) {
                let pattern = /^[0-9a-zA-Z]{6,16}$/;
                return pattern.test(pass);
            };
            // 手机号
            $phone.on('focus', function () {
                $('.phone_div .icon-left').addClass('h-focus');
                $('.btn-login .error-msg').remove();
            });
            $phone.on('blur', function () {
                $('.phone_div .icon-left').removeClass('h-focus');
                if ($.trim($phone.val()).length == 0) {
                    if ($('.phone_div .error-msg').length == 0) {
                        $('.phone_div').append('<p class="error-msg">手机号不能为空，请输入</p>');

                    } else {
                        $('.phone_div .error-msg').text('手机号不能为空，请输入');

                    }
                    $('.login-btn').attr('disabled', 'disabled');
                } else if (isPhoneNo($.trim($phone.val())) == false) {
                    if ($('.phone_div .error-msg').length == 0) {
                        $('.phone_div').append('<p class="error-msg">您输入的手机号码格式有误，请重新输入</p>');

                    } else {
                        $('.phone_div .error-msg').text('您输入的手机号码格式有误，请重新输入');

                    }
                    $('.login-btn').attr('disabled', 'disabled');
                } else if (isPhoneNo($.trim($phone.val())) == true) {
                    $('.phone_div .error-msg').remove();
                    $('.login-btn').removeAttr('disabled');

                };
            });




            // 密码
            $pass.on('focus', function () {
                $('.pass_div .icon-left').addClass('h-focus');
                $('.btn-login .error-msg').remove();
            });
            $pass.on('blur', function () {
                $('.pass_div .icon-left').removeClass('h-focus');
                if ($.trim($pass.val()).length == 0) {
                    if ($('.pass_div .error-msg').length == 0) {
                        $('.pass_div').append('<p class="error-msg">密码不能为空，请输入</p>');

                    } else {
                        $('.pass_div .error-msg').text('密码不能为空，请输入');

                    }
                } else if (isPassNo($.trim($pass.val())) == false) {
                    if ($('.pass_div .error-msg').length == 0) {
                        $('.pass_div').append('<p class="error-msg">您输入的密码格式有误，请重新输入</p>');

                    } else {
                        $('.pass_div .error-msg').text('您输入的密码格式有误，请重新输入');

                    }
                } else if (isPassNo($.trim($pass.val())) == true) {
                    $('.pass_div .error-msg').remove();

                }
            });



            $('.login-btn').on('click', function () {
                $.ajax({
                    type: "post",
                    url: "http://10.31.158.18/UNIQLO/php/login.php",
                    data: {
                        tel: $phone.val(),
                        pass: $pass.val()
                    },
                }).done(
                    function (d) {
                        if(!d) {
                            $('.btn-login').append('<p class="error-msg">手机号或密码错误，请重新输入</p>');
                            $phone.val('');
                            $pass.val('');
                            return false;
                        }else{
                            $.cookie('tell',$($phone).val(),{expires:7});
                            $(location).prop('href', 'http://10.31.158.18/UNIQLO/src/UNIQLO.html');
                        }
                    }
                );
            })
        }())
    }
});