const columns = document.querySelectorAll('.column')

document.addEventListener('keydown', event => {
  event.preventDefault()
  if (event.code.toLowerCase() === 'space') {
    genererateColors()
  }
})

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type

  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target
      : event.target.children[0]
      
    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyToClipboard(event.target.textContent)
  }
})

function genererateColors() {
  columns.forEach(column => {
    const isLocked = column.querySelector('i').classList.contains('fa-lock')
    const generatedColors = chroma.random()
    const h2Text = column.querySelector('h2')
    const button = column.querySelector('button')

    if (isLocked) {
      return
    }
  
    h2Text.textContent = generatedColors
    column.style.background = generatedColors

    changeColors(h2Text, generatedColors)
    changeColors(button, generatedColors)
  })
}

function copyToClipboard(text) {
  return navigator.clipboard.writeText(text)
}

function changeColors(content, color) {
  return color.luminance() > 0.5
    ? content.style.color = "#000"
    : content.style.color = "#fff"
}

genererateColors()