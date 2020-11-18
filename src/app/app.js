import _ from 'lodash'
import moment from 'moment'
import './style.css'
import img from './logo-page.png'

const template = (title, date) => `
  <section class="jumbotron text-center">
    <div class="container">
      <div>
        <img src="${img}" alt="Webpack assets loader" />
      </div>
      <h1>${title}</h1>
      <p class="lead">
        All JavaScript and CSS assets for this page are loaded dynamically.
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
