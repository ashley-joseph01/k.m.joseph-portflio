console.log("Starting JS!")

const modal = document.querySelector('#project-modal');
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector("dialoge button");

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
