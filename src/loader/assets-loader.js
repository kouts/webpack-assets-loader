const filetypeToTag = {
  css: 'link',
  js: 'script'
}

export function load (url) {
  const filetype = url.split('.').pop()
  const tag = filetypeToTag[filetype]
  return new Promise((resolve, reject) => {
    const element = document.createElement(tag)
    let parent = 'body'
    let attr = 'src'

    element.onload = () => {
      resolve(url)
    }
    element.onerror = () => {
      reject(url)
    }

    // We need to set different attributes depending on tag type
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
