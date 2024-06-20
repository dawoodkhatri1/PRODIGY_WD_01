document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('nav-bar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});