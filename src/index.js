import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/layout/App'
import './index.css'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

let render = () => {
  ReactDOM.render(<App />, rootElement)
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render()

serviceWorker.unregister()
