import files from './files.js'
import { load } from './assets-loader.js'
import template from './loader.html'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').insertAdjacentHTML('beforeend', template)

  setTimeout(() => {
    Promise.all(files.map(o => load(o)))
  }, 12500)
})
