console.log("Starting JS!")
console.log(":3")

const projectCards = document.querySelectorAll('.project-card');
console.log("\n\nPROJECT CARDS = " + projectCards);


for (let index = 0; index < projectCards.length; index++) {
  const projectCard = projectCards[index];
  // console.log("\n\nPROJECT CARD #" + index + " = " + projectCard);
  const openBtn = projectCard.querySelector('button.open-button');
  // console.log("\n\nOPEN BUTTON #" + index + " = " + openBtn);
  const modal = projectCard.querySelector('dialog.modal');
  // console.log("\n\nDIALOG #" + index + " = " + modal);
  const closeBtn = modal.querySelector('button.close-button');
  // console.log("\n\nCLOSE BUTTON #" + index + " = " + closeBtn);
  
  modal.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      console.log("Closing Modal")
      modal.close();
    }
  })

  openBtn.addEventListener('click', () => {
    console.log("Opening Modal");
    modal.showModal();
  })

  closeBtn.addEventListener('click', () => {
    console.log("Closing Modal");
    modal.close();
  })


}












