const secElement = document.querySelector('[data-sec]')
const minElement = document.querySelector('[data-min]')
const hourElement = document.querySelector('[data-hour]')
const dayElement = document.querySelector('[data-day]')
const monthElement = document.querySelector('[data-month]')

const finalDate = new Date('Jan 1, 2021 00:00').getTime()

function updateDate() {
    const now = Date.now()

    const difference = finalDate - now

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    secElement.innerHTML = (seconds < 10) ? '0' + seconds : seconds
    minElement.innerHTML = (minutes < 10) ? '0' + minutes : minutes
    hourElement.innerHTML = (hours < 10) ? '0' + hours : hours
    dayElement.innerHTML = (days < 10) ? '0' + days : days
    monthElement.innerHTML = (months < 10) ? '0' + months : months
}

setInterval(updateDate, 1000)