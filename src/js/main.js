
 
  document.addEventListener('DOMContentLoaded', function () {
    var menuBar = document.getElementById('menu-bar');
    var mobileMenu = document.getElementById('mobil-menu');
    var noMenu = document.getElementById('no-menu');
    var menuLinks = document.querySelectorAll('#mobil-menu ul li a');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('opacity-0');
    }

    menuBar.addEventListener('click', toggleMenu);
    noMenu.addEventListener('click', toggleMenu);

    menuLinks.forEach(function (link) {
        link.addEventListener('click', toggleMenu);
    });
});
