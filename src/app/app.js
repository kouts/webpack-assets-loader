import _ from 'lodash'
import moment from 'moment'
import './style.css'

const template = (title, date) => `
  <section class="jumbotron text-center">
    <div class="container">
      <h1>${title}</h1>
      <p class="lead">
        All JavaScript and CSS assets are loaded dynamically into the page.
      </p>
      <p class="date">${date}</p>
    </div>
  </section>
`
function component () {
  const element = document.createElement('div')
  const title = _.join(['Welcome to the ', 'webpack assets loader example application'], ' ')
  const date = moment().format('MMMM Do YYYY, h:mm:ss a')
  element.innerHTML = template(title, date)
  return element
}

document.querySelector('#app').innerHTML = ''
document.querySelector('#app').appendChild(component())
