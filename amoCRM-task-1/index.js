const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const resetButtonEl = document.getElementById('reset')
const timerEl = document.querySelector('span')

let intervalId

const createTimerAnimator = () => {
  return (inputValue) => {
    intervalId = setInterval(() => {
      const seconds = Math.trunc(inputValue % 60)
      const minutes = Math.trunc(inputValue / 60 % 60)
      const hours = Math.trunc(inputValue / 60 / 60 % 60)

      const renderSeconds = (seconds < 10) ? `0${seconds}` : seconds
      const renderMinutes = (minutes < 10) ? `0${minutes}` : minutes
      const renderHours = (hours < 10) ? `0${hours}` : hours

      if (inputValue === 0) {
        clearInterval(intervalId)
        inputEl.removeAttribute('disabled')
      }

      const strTimer = `${renderHours}:${renderMinutes}:${renderSeconds}`
      timerEl.innerHTML = strTimer

      --inputValue
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  const inputValue = Number(e.target.value)

  if (!inputValue) {
    inputEl.value = ''
  }
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  if (!seconds) return

  animateTimer(seconds)

  inputEl.setAttribute('disabled', '')
  inputEl.value = ''
})

resetButtonEl.addEventListener('click', () => {
  clearInterval(intervalId)
  inputEl.removeAttribute('disabled')
  timerEl.innerHTML = 'hh:mm:ss'
})




