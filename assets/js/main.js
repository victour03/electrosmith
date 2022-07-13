var mobileBtn = document.getElementById("mobile-btn")
var mobileMenu = document.getElementById("mobile-menu")
var btnToggled = false

mobileBtn.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu(){
    if(btnToggled){
        mobileMenu.classList.add('hidden')
        btnToggled = false
    }else{
        mobileMenu.classList.remove('hidden')
        btnToggled = true
    }
}