const leftSide = document.querySelector('.left')
const right = document.querySelector('.right')

const container = document.querySelector('.container')
leftSide.addEventListener('mouseenter', () => container.classList.add('hover-left'))
leftSide.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))