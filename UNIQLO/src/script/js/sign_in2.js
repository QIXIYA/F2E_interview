define([
    'jquery.min',
], function () {
    return {
        sign_in: (function () {
            let $phone = $('.sign_phone');
            let $code = $('.sign_code');
            let $pass = $('.sign_pass');
            let $verify = $('.sign_verify');
            let $num = false;
            let $num_code = false;
            let $num_pass = false;
            let $num_verify = false;
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
            });
            $phone.on('blur', function () {
                $('.phone_div .icon-left').removeClass('h-focus');

                $.ajax({
                    type: "post",
                    url: "http://10.31.158.18/UNIQLO/php/reg.php",
                    data: {
                        tel: $phone.val()
                    },
                    success: function (d) {
                        if (!d) {
                            if ($.trim($phone.val()) != 0) {
                                $num = true;
                            }
                        } else {
                            $('.phone_div').append('<p class="error-msg">手机号码已注册</p>');
                            $num = false;
                        }
                    }
                });

                if ($.trim($phone.val()).length == 0) {
                    if ($('.phone_div .error-msg').length == 0) {
                        $('.phone_div').append('<p class="error-msg">手机号不能为空，请输入</p>');
                        $num = false;
                    } else {
                        $('.phone_div .error-msg').text('手机号不能为空，请输入');
                        $num = false;
                    }
                } else if (isPhoneNo($.trim($phone.val())) == false) {
                    if ($('.phone_div .error-msg').length == 0) {
                        $('.phone_div .phone_div').append('<p class="error-msg">您输入的手机号码格式有误，请重新输入</p>');
                        $num = false;
                    } else {
                        $('.phone_div .error-msg').text('您输入的手机号码格式有误，请重新输入');
                        $num = false;
                    }

                } else if (isPhoneNo($.trim($phone.val())) == true) {
                    $('.phone_div .error-msg').remove();
                    $('.code-btn').removeAttr('disabled');
                    $num = true;
                }

            });
            //验证码
            $code.on('focus', function () {
                $('.code_div .h-text-box').addClass('h-focus');
            });
            $code.on('blur', function () {
                $('.code_div .h-text-box').removeClass('h-focus');
                if ($.trim($code.val()).length == 0) {
                    if ($('.code_div .error-msg').length == 0) {
                        $('.code_div').append('<p class="error-msg">验证码不能为空，请输入</p>');
                        $num_code = false;
                    } else {
                        $('.code_div .error-msg').text('验证码不能为空，请输入');
                        $num_code = false;
                    }
                } else {
                    $('.code_div .error-msg').remove();
                    $num_code = true;
                }
            });
            // 密码
            $pass.on('focus', function () {
                $('.pass_div .icon-left').addClass('h-focus');
            });
            $pass.on('blur', function () {
                $('.pass_div .icon-left').removeClass('h-focus');
                if ($.trim($pass.val()).length == 0) {
                    if ($('.pass_div .error-msg').length == 0) {
                        $('.pass_div').append('<p class="error-msg">密码不能为空，请输入</p>');
                        $num_pass = false;
                    } else {
                        $('.pass_div .error-msg').text('密码不能为空，请输入');
                        $num_pass = false;
                    }
                } else if (isPassNo($.trim($pass.val())) == false) {
                    if ($('.pass_div .error-msg').length == 0) {
                        $('.pass_div').append('<p class="error-msg">您输入的密码格式有误，请重新输入</p>');
                        $num_pass = false;
                    } else {
                        $('.pass_div .error-msg').text('您输入的密码格式有误，请重新输入');
                        $num_pass = false;
                    }
                } else if (isPassNo($.trim($pass.val())) == true) {
                    $('.pass_div .error-msg').remove();
                    $num_pass = true;
                }
            });
            //确认密码
            $verify.on('focus', function () {
                $('.verify_div .icon-left').addClass('h-focus');
            });
            $verify.on('blur', function () {
                $('.verify_div .icon-left').removeClass('h-focus');
                if ($.trim($verify.val()).length == 0) {
                    if ($('.verify_div .error-msg').length == 0) {
                        $('.verify_div').append('<p class="error-msg">密码不能为空，请输入</p>');
                        $num_verify = false;
                    } else {
                        $('.verify_div .error-msg').text('密码不能为空，请输入');
                        $num_verify = false;
                    }
                } else if ($.trim($verify.val()) != $.trim($pass.val())) {
                    if ($('.verify_div .error-msg').length == 0) {
                        $('.verify_div').append('<p class="error-msg">您两次输入的密码不一致，请重新输入</p>');
                        $num_verify = false;
                    } else {
                        $('.verify_div .error-msg').text('您两次输入的密码不一致，请重新输入');
                        $num_verify = false;
                    }
                } else if ($.trim($verify.val()) == $.trim($pass.val())) {
                    $('.verify_div .error-msg').remove();
                    $num_verify = true;
                }
            });
            $('.h-radio').on('click', function () {
                $('.h-radio').addClass('checked');
                $('.h-radio input').attr('value', 'Y');
                if ($('.h-radio input').attr('value') === 'Y') {
                    $('.sign-btn').removeAttr('disabled');
                }
            });

            $('.sign-btn').on('click', function () {
                if (!$num || !$num_code || !$num_pass || !$num_verify) {
                    return false;
                } else {
                    $.ajax({
                        type: "post",
                        url: "http://10.31.158.18/UNIQLO/php/reg.php",
                        data: {
                            tel: $phone.val(),
                            pass: $pass.val()
                        }
                    });

                    $(location).prop('href', 'http://10.31.158.18/UNIQLO/src/login.html')
                }

            })
        }())
    };
});