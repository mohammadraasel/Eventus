import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addEvent, updateEvent } from '../../redux/events/actions'
import { useForm } from 'react-hook-form'
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

	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			...event
		}
	})

	const onSubmitted = data => {
		if (id) {
			dispatch(updateEvent({ ...event, ...data }))
			history.push(`/events/${id}`)
		} else {
			const newEvent = {
				...data,
				id: cuid(),
				hostPhotoURL: '/assets/user.png',
				attendees: []
			}
			dispatch(addEvent(newEvent))
			history.push('/events')
		}
	}

	return (
		<Segment>
			<Form onSubmit={handleSubmit(onSubmitted)} autoComplete='off'>
				<Form.Field>
					<label>Event Title</label>
					<input
						type='text'
						name='title'
						placeholder='First Name'
						ref={register({ required: true })}
					/>
					{errors.title && (
						<span style={{ color: 'red' }}>Title is required.</span>
					)}
				</Form.Field>
				<Form.Field>
					<label>Event Date</label>
					<input
						type='date'
						name='date'
						placeholder='Event Date'
						ref={register({ required: true })}
					/>
					{errors.date && (
						<span style={{ color: 'red' }}>
							Event Date is required.
						</span>
					)}
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input
						type='text'
						name='city'
						placeholder='City event is taking place'
						ref={register({ required: true })}
					/>
					{errors.city && (
						<span style={{ color: 'red' }}>City is required.</span>
					)}
				</Form.Field>
				<Form.Field>
					<label>Venue</label>
					<input
						type='text'
						name='venue'
						placeholder='Enter the Venue of the event'
						ref={register({ required: true })}
					/>
					{errors.venue && (
						<span style={{ color: 'red' }}>Venue is required.</span>
					)}
				</Form.Field>
				<Form.Field>
					<label>Hosted By</label>
					<input
						type='text'
						name='hostedBy'
						placeholder='Enter the name of person hosting'
						ref={register({ required: true })}
					/>
					{errors.hostedBy && (
						<span style={{ color: 'red' }}>
							HostedBy is required.
						</span>
					)}
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
