
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


/* var images = [];
images[0] = "materials\miningCarHighlight.jpg";
images[1] = "https://images.unsplash.com/photo-1523660778745-247ed0bcce31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
images[2] = "https://images.unsplash.com/photo-1505833464198-4993b36cdfab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80";
images[3] = "https://images.unsplash.com/photo-1582280776971-087fe7cfa1bd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80";
images[4] = "http://i2.ytimg.com/vi/-2m1e4g2MFM/default.jpg";
images[5] = "http://i1.ytimg.com/vi/lK2TSYBh7fw/default.jpg"

var i = 0;
setInterval(fadeDivs, 3000);

function fadeDivs() {
    i = i < images.length ? i : 0;
    console.log(i)
    $('.product img').fadeOut(100, function () {
        $(this).attr('sr    c', images[i]).fadeIn(100);
    })
    i++;
}  */

var images = [
    './materials/miningBack1.jpg',
    './materials/back2.jpg',
    './materials/back3.jpg',
    './materials/back4.jpg'
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
