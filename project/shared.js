const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});

const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal();
});

noButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
});