function _load (tag) {
  return function (url) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function (resolve, reject) {
      const element = document.createElement(tag)
      let parent = 'body'
      let attr = 'src'

      // Important success and error for the promise
      element.onload = function () {
        resolve(url)
      }
      element.onerror = function () {
        reject(url)
      }

      // Need to set different attributes depending on tag type
      switch (tag) {
        case 'script':
          element.async = false
          break
        case 'link':
          element.type = 'text/css'
          element.rel = 'stylesheet'
          attr = 'href'
          parent = 'head'
      }

      // Inject into document to kick off loading
      element[attr] = url
      document.head.appendChild(element)
    })
  }
}

export const load = {
  css: _load('link'),
  js: _load('script'),
  img: _load('img')
}
