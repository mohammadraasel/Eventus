import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types'

export const addEvent = eventData => {
	return dispatch => {
		dispatch({ type: CREATE_EVENT, payload: { event: eventData } })
	}
}

export const updateEvent = eventData => {
	return dispatch => {
		dispatch({ type: UPDATE_EVENT, payload: { event: eventData } })
	}
}

export const deleteEvent = eventId => {
	return dispatch => {
		dispatch({ type: DELETE_EVENT, payload: { eventId } })
	}
}
