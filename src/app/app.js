import _ from 'lodash'
import './style.css'

const template = (title) => `
  <section class="jumbotron text-center">
    <div class="container">
      <h1>${title}</h1>
      <p class="lead">
        This is the landing page of the application...
      </p>
    </div>
  </section>
`
function component () {
  const element = document.createElement('div')
  const title = _.join(['Welcome', 'to the app'], ' ')
  element.innerHTML = template(title)
  return element
}

document.querySelector('#app').appendChild(component())
