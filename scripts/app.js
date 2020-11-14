$('.project').hover(
    function() {
        const id = $(this).attr("id");
        $(`ul.${id}`).addClass('active');
    }, function() {
        const id = $(this).attr("id");
        $(`ul.${id}`).removeClass('active');
    }
)

const openMenu = function() {
    window.setTimeout(function() {
        $('.menu').toggleClass('show');
    }, 1);
    $('.menu a').toggleClass('clickable');
    $('.menu-overlay').toggleClass('bloom');
    $('.half-circle').toggleClass('open');
}

$('.menu').on('click', openMenu);
