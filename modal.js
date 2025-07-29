const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', toggleModal);

closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdrop.classList.toggle('is-hidden');
}

const oopenModalBtn = document.querySelector('.burger-open');
const clooseModalBtn = document.querySelector('.burger-close');
const burger = document.querySelector('.burger_window');

oopenModalBtn.addEventListener('click', toggleModal);

clooseModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  burger.classList.toggle('is-hiddenn');
}

