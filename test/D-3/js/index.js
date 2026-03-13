document.addEventListener("DOMContentLoaded",()=>{

    const btnPopup = document.querySelector(".btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")
    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener('click',()=>{
        popup.classList.remove("on")
    })

})