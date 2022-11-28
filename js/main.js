const navBtn = document.querySelector ('.mobile-nav-btn');
const mobileNav = document.querySelector ('.mobile-nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('mobile-nav-btn-close');
})