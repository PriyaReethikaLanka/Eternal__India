
$(".scrolling-quotes").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
})

var menuClicked = false;


function showSideHeader() {
        
    var sideHeader = document.getElementsByClassName('side-header')[0];
    var menuButton = document.getElementsByClassName('menu-button')[0];
    if (menuClicked == false || menuClicked == undefined) {
        menuClicked = true;
        menuButton.setAttribute('class', 'fa-solid fa-xmark menu-button');
        sideHeader.style.display = "flex";
    }
    else {
        menuClicked = false;
        menuButton.setAttribute('class', 'fa-solid fa-bars menu-button');
        sideHeader.style.display = "none";
    }
}

