import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"
import { configureStore } from './redux/configureStore'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root")
const store = configureStore({})

let render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Component />
			</Router>
		</Provider>,
		rootElement
	)
}

render(App)

serviceWorker.unregister()
