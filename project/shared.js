const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
});

const closeModal = () => {
    backdrop.classList.remove('open');
    if(modal) {
        modal.classList.remove('open');
    }
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});