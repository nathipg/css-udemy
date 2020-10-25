const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

selectPlanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
        setTimeout(() => {
            modal.classList.add('open');
        }, 10);
    });
});

const closeModal = () => {
    backdrop.style.display = 'none';
    setTimeout(() => {
        backdrop.classList.remove('open');
    }, 10);
    if(modal) {
        modal.style.display = 'none';
        setTimeout(() => {
            modal.classList.remove('open');
        }, 10);
    }
}

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    setTimeout(() => {
        mobileNav.classList.remove('open');
    }, 10);
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', () => {
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
    mobileNav.style.display = 'block';
    setTimeout(() => {
        mobileNav.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', (event) => {
    console.log('animationstart', event);
});

ctaButton.addEventListener('animationend', (event) => {
    console.log('animationend', event);
});

ctaButton.addEventListener('animationiteration', (event) => {
    console.log('animationiteration', event);
});