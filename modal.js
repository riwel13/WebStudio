const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', toggleModal);

closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdrop.classList.toggle('is-hidden');
}
