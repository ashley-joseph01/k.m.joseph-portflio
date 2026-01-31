console.log("Starting JS #2!")
console.log(":3 #2")

document.addEventListener("DOMContentLoaded", () => {

    const ageText = document.getElementById('karzAge');
    const copyrightText = document.getElementById('copyrightYear');
    const currentDate = new Date();
    let age = currentDate.getFullYear() - 2004;

    if ((currentDate.getMonth() > 9) || (currentDate.getMonth() == 9 && currentDate.getDate() >= 28)) age++;

    copyrightText.innerText = currentDate.getFullYear();
    ageText.innerText = age;
})













