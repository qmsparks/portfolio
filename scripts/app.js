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
    $('.menu-overlay').toggleClass('bloom');
    $('.half-circle').toggleClass('open');
    $('.menu').toggleClass('show');
}

$('.menu').on('click', openMenu);
