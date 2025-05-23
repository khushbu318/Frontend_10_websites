//pages 
document.querySelectorAll('.logo').forEach(logo=>{
    logo.addEventListener(
        'click',() => {
            document.querySelector('.front-page').style.display = 'block'
            document.querySelector('.login-page').style.display = 'none'
            document.querySelector('.signup-page').style.display = 'none'
        })
})

document.querySelectorAll('.login').forEach(loginBtn=>{
    loginBtn.addEventListener(
        'click',() => {
            document.querySelector('.front-page').style.display = 'none'
            document.querySelector('.login-page').style.display = 'block'
            document.querySelector('.signup-page').style.display = 'none'
        })
})

document.querySelectorAll('.signup').forEach(signBtn=>{
    signBtn.addEventListener(
        'click',() => {
            document.querySelector('.front-page').style.display = 'none'
            document.querySelector('.login-page').style.display = 'none'
            document.querySelector('.signup-page').style.display = 'flex'
        })
})
// end of pages



// navigation 
const dorpdownItems = document.querySelectorAll('.dropdown-hover')


if(window.innerWidth < 1000 ){
    //menu 
const menuIcon = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click' , () => {
    navbar.classList.toggle('change')
    
    if(!navbar.classList.contains('change')){
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.style.left='-20rem'
        })
    }
})
// end of menu
document.querySelectorAll('.show-dropdown').forEach(link => {
    link.addEventListener('click',() => {
        link.nextElementSibling.style.left = '0'
    })
})
document.querySelectorAll('.dropdown-heading-link').forEach(headinglink => {
    headinglink.addEventListener('click' ,() =>{
        headinglink.parentElement.parentElement.style.left='-20rem'
    })
})
}
else{
    dorpdownItems.forEach(dorpdownItem=>{
        dorpdownItem.addEventListener('mouseover',()=>{
            dorpdownItem.lastElementChild.style.cssText='opacity:1; visibility:visible;'
            document.querySelector
            ('.navbar-wrapper').style.background='linear-gradient(to right, #066399,#2f8fdf,#066399)'
            dorpdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dorpdownItem.addEventListener('mouseout',()=>{
            dorpdownItem.lastElementChild.style.cssText='opacity:0; visibility:hidden;'
            document.querySelector
            ('.navbar-wrapper').style.background='none'
            dorpdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0deg)'
        })
    })
}

window.addEventListener('resize',()=>{
    window.location.reload()
})

// end of navigation

