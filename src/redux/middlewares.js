import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const isProd = process.env.NODE_ENV === 'production'
const middlewareList = [thunk]
let composeEnhancers = compose

if (!isProd) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export const middlewares = composeEnhancers(applyMiddleware(...middlewareList))
