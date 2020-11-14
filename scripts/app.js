$('.project').hover(
    function() {
        const id = $(this).attr("id");
        $(`ul.${id}`).addClass('active');
    }, function() {
        const id = $(this).attr("id");
        $(`ul.${id}`).removeClass('active');
    }
)


const showNav = function() {
    $('.half-circle').toggleClass('show');
    $('a').toggleClass('show');
}

$('.menu').on('click', showNav);