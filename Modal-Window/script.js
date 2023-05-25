'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const show = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); // use hidden as a class to implement DRY principle
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', show);

btnCloseModal.addEventListener('click', hide);

overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hide();
  }
});
