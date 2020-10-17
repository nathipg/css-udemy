const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');

selectPlanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

noButton.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});