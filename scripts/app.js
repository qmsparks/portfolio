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


const flavorText = ["Battlebots enthusiast", "Gender connoisseur", "Probably not a hairless raccoon", "Decepticon apologist", "Meme sommelier", "Podcast snob", "Non-GMO goblin-alternative", "Dog hugger"]

const shuffleFlavorText = function() {
    if (flavorText.length === 0) {
        $('.fa-sync-alt').css("display", "none");
        $('#rule-of-three').text('Out of flavor text for you');
    } else {
        const randomIndex = Math.floor(Math.random() * flavorText.length);
        const text = flavorText.splice(randomIndex, 1)[0];
        $('#rule-of-three').text(text);

    }
}

shuffleFlavorText();

$('.fa-sync-alt').on('click', shuffleFlavorText);


$('.skill-wrapper').hover(function() {
    $(this).children('.skill-icon').addClass('colored');
}, function() {
    $(this).children('.skill-icon').removeClass('colored');
})