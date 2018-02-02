// particlesJS.load('particles-js', 'particles.json')

$(document).foundation();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#sticky-header").addClass("active");
    }
    else {
        $("#sticky-header").removeClass("active");
    }
});

function openNav() {
    document.getElementById("navTray").style.height = "100%";
}

function closeNav() {
    document.getElementById("navTray").style.height = "0%";
}

console.log("%cWelcome To CT WiFi", "font-size: x-large")
