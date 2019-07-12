define([
    'jquery.min',
    'jquery.lazyload'
], function() {
    return {
        lazy: (function () {
            $("img").lazyload({
                threshold : 200,
                effect : "fadeIn"
                });
          }()),
    }
    
});