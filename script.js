$(document).ready(function() {
    
    const hamburger = $('.hamburger');
    const navMenu = $('.nav-menu');

    hamburger.on('click', function() {
        navMenu.toggleClass('active');
        $(this).toggleClass('active');
        
        const spans = $(this).find('span');
        if ($(this).hasClass('active')) {
            spans.eq(0).css('transform', 'rotate(45deg) translate(5px, 5px)');
            spans.eq(1).css('opacity', '0');
            spans.eq(2).css('transform', 'rotate(-45deg) translate(7px, -6px)');
        } else {
            spans.css({
                'transform': 'none',
                'opacity': '1'
            });
        }
    });

    $('.nav-menu a').on('click', function() {
        navMenu.removeClass('active');
        hamburger.removeClass('active');
        hamburger.find('span').css({
            'transform': 'none',
            'opacity': '1'
        });
    });

});