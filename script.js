window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var opacity = width / 1900;
    opacity = opacity < 0.1 ? 0.1 : opacity; // Ensure minimum opacity
    var aboutImg = document.querySelector('.about-img');
    aboutImg.style.opacity = opacity;
});

window.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('about')) {
        var width = window.innerWidth;
        var opacity = width / 1900;
        opacity = opacity < 0.1 ? 0.1 : opacity; // Ensure minimum opacity
        var aboutImg = document.querySelector('.about-img');
        aboutImg.style.opacity = opacity;
    }
});