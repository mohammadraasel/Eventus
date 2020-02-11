import { combineReducers } from 'redux'
import { events } from './events/reducer'
import { people } from './people/reducer'
export const rootReducer = combineReducers({
	events,
	people
})