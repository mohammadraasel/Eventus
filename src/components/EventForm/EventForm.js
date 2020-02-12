import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addEvent, updateEvent } from '../../redux/events/actions'
import cuid from 'cuid'

const EventForm = () => {
	const { id } = useParams()
	const history = useHistory()
	const dispatch = useDispatch()
	const event = useSelector(state => {
		const foundEvent = state.events.find(evnt => evnt.id === id)
		return foundEvent
			? foundEvent
			: {
					title: '',
					date: '',
					city: '',
					venue: '',
					hostedBy: ''
			  }
	})
	const [state, setState] = useState({ ...event })

	const handleFormSubmit = e => {
		e.preventDefault()
		if (state.id) {
			dispatch(updateEvent(state))
			history.push(`/events/${state.id}`)
		} else {
			const newEvent = {
				...state,
				id: cuid(),
				hostPhotoURL: '/assets/user.png',
				attendees: []
			}
			dispatch(addEvent(newEvent))
			history.push('/events')
		}
	}

	const handleInputChange = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Segment>
			<Form onSubmit={handleFormSubmit} autoComplete='off'>
				<Form.Field>
					<label>Event Title</label>
					<input
						type='text'
						name='title'
						value={state.title}
						onChange={handleInputChange}
						placeholder='First Name'
					/>
				</Form.Field>
				<Form.Field>
					<label>Event Date</label>
					<input
						type='date'
						name='date'
						value={state.date}
						onChange={handleInputChange}
						placeholder='Event Date'
					/>
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input
						type='text'
						name='city'
						value={state.city}
						onChange={handleInputChange}
						placeholder='City event is taking place'
					/>
				</Form.Field>
				<Form.Field>
					<label>Venue</label>
					<input
						type='text'
						name='venue'
						value={state.venue}
						onChange={handleInputChange}
						placeholder='Enter the Venue of the event'
					/>
				</Form.Field>
				<Form.Field>
					<label>Hosted By</label>
					<input
						type='text'
						name='hostedBy'
						value={state.hostedBy}
						onChange={handleInputChange}
						placeholder='Enter the name of person hosting'
					/>
				</Form.Field>
				<Button positive type='submit'>
					Submit
				</Button>
				<Button onClick={history.goBack} type='button'>
					Go Back
				</Button>
			</Form>
		</Segment>
	)
}

export default EventForm
