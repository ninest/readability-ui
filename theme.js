document.querySelector('#theme_toggle').onclick = () => {
  let currentTheme = document.body.getAttribute('data-theme')
  if (currentTheme === 'light') {
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }
}

document.querySelector('#font_toggle').onclick = () => {
  let currentTheme = document.body.getAttribute('data-font')
  if (currentTheme === 'sansserif') {
    document.body.setAttribute('data-font', 'serif')
  } else {
    document.body.setAttribute('data-font', 'sansserif')
  }
}