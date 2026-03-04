console.log(this)
document.addEventListener("DOMContentLoaded",function(){
    console.log(this)
    const btnNo = document.querySelector(".btn-no")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    btnNo.addEventListener("click",function(){
        popup.classList.add("blind")
        modal.classList.add("blind")
    })
    modal.addEventListener("click",()=>{
        console.log(this)
        popup.classList.add("blind")
        this.classList.add("blind")
    })


})