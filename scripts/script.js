const path = document.querySelector('path')
const pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength

path.style.strokeDashoffset = pathLength

window.addEventListener('scroll', () => {

  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

  let drawLength = pathLength * (scrollPercentage + 0.02)

  path.style.strokeDashoffset = pathLength + drawLength
})