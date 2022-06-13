(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  for (let i = 0; i < refs.openModalBtn.length; i++) {
    refs.openModalBtn[i].addEventListener('click', toggleModal);
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('fixedBody');
  }
})();
