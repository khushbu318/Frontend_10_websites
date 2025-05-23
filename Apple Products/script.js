//common js
document.querySelectorAll('.watch-controls,contorls a, .iphone-btn').forEach(control=>{
control.addEventListener('click',e => {
    e.preventDefault()
})
})
// End of common js
//cube

let x = 0
let y = 20
let z = 0
let bool = true
let interval;
const cube = document.querySelector('.cube')
document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x = x + 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x = x - 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y = y - 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y = y + 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y = y + 20}deg) rotateZ(${z -= 20}deg)`
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y = y + 20}deg) rotateZ(${z += 20}deg)`
})

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}) rotateY(${y++}deg) rotateZ(${z})`
        }, 100);

    } else {
        clearInterval(interval)
    }
}

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})
//end of cube



//slideshow
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/bg${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 0

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if (a < divs.length) {
            div.nextElementSibling.classList.add('change')
        }
        else {
            divs[0].classList.add('change');
            a = 0;
        }

    }, 5000);
}

slideshow()
//end of slideshow

//seciton 3
const section3content = document.querySelector('.section-3-content')

window.addEventListener('scroll' ,() => {
    if(window.pageYOffset + window.innerHeight  >= section3content.offsetTop + section3content.offsetHeight / 2){
        section3content.classList.add('change')
    }
})
//end of section 3

// section 4 
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX = 0
const hideControl = () => {
     if(axisY === -240){
        watchTopControl.classList.add('hideControl')
     }
     else{
        watchTopControl.classList.remove('hideControl')
     }

     if(axisY === 240){
        watchBottomControl.classList.add('hideControl')
     }
     else{
        watchBottomControl.classList.remove('hideControl')
     }

     if(axisX === 240){
        watchRightControl.classList.add('hideControl')
     }
     else{
        watchRightControl.classList.remove('hideControl')
     }

     if(axisX === -240){
        watchLeftControl.classList.add('hideControl')
     }
     else{
        watchLeftControl.classList.remove('hideControl')
     }
}


//top case
watchTopControl.addEventListener('click' ,() => {
    watchCases.style.marginTop = `${axisY -= 60}rem`
    hideControl()
})

//Bottom case
watchBottomControl.addEventListener('click' ,() => {
    watchCases.style.marginTop = `${axisY += 60}rem`
    hideControl()
})

//right band
watchRightControl.addEventListener('click' ,() => {
watchBands.style.marginRight = `${axisX += 60}rem`
hideControl()
})

//left Band
watchLeftControl.addEventListener('click' ,() => {
    watchBands.style.marginRight = `${axisX -= 60}rem`
    hideControl()
})

// End of section 4