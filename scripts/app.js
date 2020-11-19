const toggleMenu = function() {
    window.setTimeout(function() {
        $('.link-wrapper').toggleClass('show');
    }, 1);
    $('.menu-overlay').toggleClass('bloom');
    $('.half-circle').toggleClass('spin');
    $('.fa-bars').toggleClass('bar-spin');
    $('.nav-link').toggleClass('clickable');
}

$('.menu').on('click', toggleMenu);


const flavorTextBase = ["Battlebots enthusiast", "Gender connoisseur", "Probably not a hairless raccoon", "Decepticon apologist", "Meme sommelier", "Podcast snob", "Non-GMO goblin-alternative", "Dog hugger"]
const flavorText = [...flavorTextBase];

const shuffleFlavorText = function() {
    if (flavorText.length === 0) {
        flavorTextBase.map(el => {
            flavorText.push(el);
        })
        $('#rule-of-three').text('Out of flavor text for you, but we can go again if you want');
    } else {
        const randomIndex = Math.floor(Math.random() * flavorText.length);
        const text = flavorText.splice(randomIndex, 1)[0];
        $('#rule-of-three').text(text);

    }
}

$(document).ready(shuffleFlavorText);

$('.fa-sync-alt').on('click', shuffleFlavorText);

let offLanding = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!offLanding) {
            offLanding = true;
            $('#to-top').slideDown();
        }
    } else {
        if (offLanding) {
            offLanding = false;
            $('#to-top').slideUp();
        }
    }
})

$('.nav-link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 750);
})

$('.skill-wrapper').hover(function() {
    $(this).children('.skill-icon').addClass('colored');
}, function() {
    $(this).children('.skill-icon').removeClass('colored');
})