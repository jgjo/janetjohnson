function main() {
(function () {
   'use strict';
//    
//    $('html,body').animate({
//      scrollTop: $(window.location.hash).offset().top
//    });
    
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
    });

//    Portfolio Isotope Filter
    $(window).load(function() {
        var $container = $('#projectsgrid');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.filter a').click(function() {
            $('.filter .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

}());

}
main();