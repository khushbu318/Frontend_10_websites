// Navbar 

const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

// End of Navbar

// Section-2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if (video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    }
    else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playPause()
})

//video-bar-wrapper

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if (video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
})
// end of section-2 video

// section 3 pricing cards
// End of section 3 pricing cards