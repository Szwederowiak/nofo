const mainNavToggleBtn = document.getElementById('main-nav-toggle');
const mainNav = document.getElementById('main-nav');

mainNavToggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Bottom padding;

const footer = document.getElementById('site-footer');

document.body.style.paddingBottom = footer.getBoundingClientRect().height + 'px';

window.addEventListener('resize', () => {
    document.body.style.paddingBottom = footer.getBoundingClientRect().height + 'px';
})


