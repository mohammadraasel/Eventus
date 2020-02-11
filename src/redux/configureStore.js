import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { middlewares } from './middlewares'

export function configureStore(preloadedState) {
	const store = createStore(rootReducer, preloadedState, middlewares)
	return store
}