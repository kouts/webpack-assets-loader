import files from './files.js'
import { load } from './assets-loader.js'

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener('DOMContentLoaded', () => {
  const template = `
    <div id="loading" style="font-family: Arial; font-size: 14px; position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%);">
      Loading ...
    </div>
  `
  document.querySelector('#app').insertAdjacentHTML('beforeend', template)
  const scripts = files.map(o => o.replace('dist/', ''))
  load.js(scripts.shift()).then(() => {
    Promise.all(scripts.map(o => delay(1500).then(() => load.js(o))))
  })
})
