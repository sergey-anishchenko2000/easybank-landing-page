var navbar_toggler = document.getElementById('navbar-toggler');
var navbar_mobile = document.getElementById('navbar-mobile');
var navbar_toggler_icon = document.getElementById('navbar-toggler-icon');

var toggle = function () {
    console.log('navbar-toggler clicked');
    navbar_mobile.classList.toggle('d-none');
    navbar_toggler_icon.classList.toggle('close');
};

if (navbar_toggler) {
    navbar_toggler.addEventListener('click', toggle);
    navbar_mobile.addEventListener('click', toggle);
}
