const now = new Date()

const time = document.querySelector('.time')
const date = document.querySelector('.date')

const tick = () => {
  const now = new Date()

  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()

  const currDate = now.toDateString()

  const htmlTime = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `

  const htmlDate = `
  <span>${currDate}</span>
  `

  time.innerHTML = htmlTime
  date.innerHTML = htmlDate
}

setInterval(tick, 1000)
