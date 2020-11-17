const toggleMenu = function() {
    window.setTimeout(function() {
        $('.link-wrapper').toggleClass('show');
    }, 1);
    $('.link-wrapper a').toggleClass('clickable');
    $('.menu-overlay').toggleClass('bloom');
    $('.half-circle').toggleClass('spin');
    $('.fa-bars').toggleClass('bar-spin');
}

$('.menu').on('click', toggleMenu);