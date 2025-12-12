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

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    $('.skill-card, .content-card, .interest-item').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    $('.resume-section, .biodata-section, .skill-card').each(function() {
        observer.observe(this);
    });

    let lastScroll = 0;
    $(window).scroll(function() {
        const currentScroll = $(this).scrollTop();
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            $('.navbar').css('transform', 'translateY(-100%)');
        } else {
            $('.navbar').css('transform', 'translateY(0)');
        }
        lastScroll = currentScroll;
    });

    $('.navbar').css('transition', 'transform 0.3s ease');

    $('.btn').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const codeLines = $('.code-line');
        let delay = 0;
        codeLines.each(function() {
            $(this).css({
                'opacity': '0',
                'transform': 'translateX(-20px)'
            });
            
            setTimeout(() => {
                $(this).animate({
                    opacity: 1
                }, 500).css('transform', 'translateX(0)');
            }, delay);
            
            delay += 100;
        });
    }

    $('.info-row').hover(
        function() {
            $(this).css({
                'background': 'rgba(99, 102, 241, 0.1)',
                'transform': 'translateX(5px)'
            });
        },
        function() {
            $(this).css({
                'background': 'rgba(99, 102, 241, 0.05)',
                'transform': 'translateX(0)'
            });
        }
    );

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

});