import files from './files.js'
import { load } from './assets-loader.js'
import logoLoader from './logo-loader.png'
import template from './loader.html'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').insertAdjacentHTML('beforeend', template.replace('{{logoLoader}}', logoLoader))

  setTimeout(() => {
    Promise.all(files.map(o => load(o)))
  }, 8500)
})
