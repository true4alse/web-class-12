document.addEventListener("DOMContentLoaded",()=>{
    
    const clock = document.querySelector(".clock")
    const buttonDay = document.querySelector("#day-mode")
    const buttonNight = document.querySelector("#night-mode")

    buttonDay.addEventListener("click",()=>{
        clock.classList.add("day")
    })

    buttonNight.addEventListener("click",()=>{
        clock.classList.add("night")
    })

})