document.querySelector('#theme_toggle').onclick = () => {
  let currentTheme = document.body.getAttribute('data-theme')
  if (currentTheme === 'light') {
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }
}