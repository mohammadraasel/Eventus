import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"

const rootElement = document.getElementById("root")

let render = Component => {
	ReactDOM.render(
		<Router>
			<Component />
		</Router>,
		rootElement
	)
}

render(App)

serviceWorker.unregister()
