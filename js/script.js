const mainNavToggleBtn = document.getElementById('main-nav-toggle');
const mainNav = document.getElementById('main-nav');

mainNavToggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});