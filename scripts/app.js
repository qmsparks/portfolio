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


const flavorText = ["Battlebots enthusiast", "Gender hoarder", "Stack of goblins in a very nice coat", "Probably not a hairless raccoon", "Loud"]
$('#rule-of-three').text(flavorText[Math.floor(Math.random() * flavorText.length)]);