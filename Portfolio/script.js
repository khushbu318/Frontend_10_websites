//Navbar 
const navbar = document.querySelector(".navbar")
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [95, 89, 87, 85, 80, 70, 50]

window.addEventListener('scroll', () => {
mainFn();
})
//End of Navbar

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky')
    }
    else {
        navbar.classList.remove('sticky')
    }
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLinks => {
                navbarLinks.classList.remove('change')
            })
            navbarLinks[i].classList.add('change');
        }
    });
    // progress bar 
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        })
    }
    // end of progress bar
}

mainFn()

window.addEventListener('resize' , () => {
window.location.reload();
})