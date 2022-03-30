let time = 1800,
    interval

const DOMpic = document.querySelector('.image_wrapper')
const DOMtimerWrapper = document.querySelector('.timer_wrapper')
const DOMminutes = document.querySelector('.minutes')
const DOMseconds = document.querySelector('.seconds')
const DOMStartButton = document.querySelector('.start_button')
const DOMbuttons = document.querySelector('.buttons')
const DOMEnd = document.querySelector('.end_text_wrapper')
const DOMlast = document.querySelector('.last')
const DOMstart = document.querySelector('.start')
const DOMcurrent = document.querySelector('.current')
const DOMLogo = document.querySelector('.logo')


DOMStartButton.addEventListener('click', () => {
    clearInterval(interval)

    DOMpic.style.opacity = '0'
    DOMtimerWrapper.style.opacity = '1'
    DOMbuttons.style.opacity = '0'
    DOMLogo.style.opacity = '1'

    let timeNow = new Date()
    let hours = timeNow.getHours()
    let minutes = timeNow.getMinutes()
    let seconds = timeNow.getSeconds()

    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds; 
    let startTime = hours + ":" +  minutes + ":" + seconds;

    let PlusTime = new Date()
    PlusTime.setMinutes(PlusTime.getMinutes()+30)

    let endHours = PlusTime.getHours()
    let endMinutes = PlusTime.getMinutes()
    let endSeconds = PlusTime.getSeconds()

    endHours = endHours < 10 ? '0'+endHours : endHours;
    endMinutes = endMinutes < 10 ? '0'+endMinutes : endMinutes;
    endSeconds = endSeconds < 10 ? '0'+endSeconds : endSeconds; 
    
    endTime=endHours + ":" +  endMinutes + ":" + endSeconds;
    DOMstart.innerText=startTime
    DOMlast.innerText=endTime

    interval = setInterval(startTimer, 1000)
})

function startTimer() {
    
    let timeNow = new Date()
    let hours = timeNow.getHours()
    let minutes = timeNow.getMinutes()
    let seconds = timeNow.getSeconds()

    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds; 

    let currentTime = hours + ":" +  minutes + ":" + seconds;
    DOMcurrent.innerText=currentTime

    time--

    if (time == -1) {
        clearInterval(interval)
        DOMEnd.style.opacity = '1'
        DOMtimerWrapper.style.opacity = '0'
    }
}


