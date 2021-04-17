
$(document).ready(function () {
    $('.menu-toggle').on('click', () => {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
});

$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


var images = [
    '../images/miningBack1.jpg',
    '../images/back2.jpg',
    '../images/back3.jpg',
    '../images/back4.jpg'
];

var img = document.getElementById("img");

function displayImage(x) {
    img.style.backgroundImage = "url(" + images[x] + ")";
    //img.innerText = images[x];
}
function startTimer() {
    var x = 0;
    displayImage(x);
    setInterval(function () {
        x = x + 1 >= images.length ? 0 : x + 1;
        displayImage(x);
    }, 3000);
}
