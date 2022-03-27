let time = 2,
    interval

const DOMpic = document.querySelector('.image_wrapper')
const DOMtimerWrapper = document.querySelector('.timer_wrapper')
const DOMminutes = document.querySelector('.minutes')
const DOMseconds = document.querySelector('.seconds')
const DOMStartButton = document.querySelector('.start_button')
const DOMbuttons = document.querySelector('.buttons')
const DOMEnd = document.querySelector('.end_text_wrapper')




DOMStartButton.addEventListener('click', () => {
    clearInterval(interval)
    DOMpic.style.opacity = '0'
    DOMtimerWrapper.style.opacity = '1'
    DOMbuttons.style.opacity = '0'
    interval = setInterval(startTimer, 1000)
})

function startTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    DOMminutes.innerText = `${minutes}`
    DOMseconds.innerText = `${seconds}`

    time--

    if (time == -1) {
        clearInterval(interval)
        DOMEnd.style.opacity = '1'
        DOMtimerWrapper.style.opacity = '0'
    }
}


