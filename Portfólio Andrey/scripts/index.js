const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

 
 function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}