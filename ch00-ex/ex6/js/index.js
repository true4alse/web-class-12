document.addEventListener("DOMContentLoaded",function(){

    const btnMenu = document.querySelector(".btn-menu")
    const btnMenuClose = document.querySelector(".btn-menu-close")
    const hiddenGnb = document.querySelector(".hiddenGnb")

    // 메뉴버튼을 누르면 숨겨진 메뉴가 나오는 기능
    btnMenu.addEventListener("click",()=>{
        // hiddenGnb에 on클래스가 추가되면 메뉴가 나오게 되어있음.
        hiddenGnb.classList.add("on")
    })

    // 닫기버튼을 누르면 메뉴가 다시 숨어들어가도록 하는 기능
    btnMenuClose.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })

})