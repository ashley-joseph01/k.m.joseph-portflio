console.log("Starting JS #2!")
console.log(":3 #2")

document.addEventListener("DOMContentLoaded", () => {

    const ageText = document.getElementById('karzAge');
    const copyrightText = document.getElementById('copyrightYear');
    const currentDate = new Date();

    copyrightText.innerText = currentDate.getFullYear();

})













