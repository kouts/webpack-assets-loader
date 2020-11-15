import files from './files.js'
import { load } from './assets-loader.js'

document.addEventListener('DOMContentLoaded', () => {
  const template = `
    <div id="loading" style="font-family: Arial; font-size: 14px; position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%);">
      Loading ...
    </div>
  `
  document.querySelector('#app').insertAdjacentHTML('beforeend', template)
  load(files.shift()).then(() => {
    setTimeout(() => {
      Promise.all(files.map(o => load(o)))
    }, 2500)
  })
})
