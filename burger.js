const oopenModalBtn = document.querySelector('.burger-open');
const clooseModalBtn = document.querySelector('.burger-close');
const burger = document.querySelector('.burger_window');

oopenModalBtn.addEventListener('click', toggleModal);

clooseModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  burger.classList.toggle('is-hiddenn');
}
