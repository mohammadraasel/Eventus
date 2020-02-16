import React from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addEvent, updateEvent } from '../../redux/events/actions'
import { useForm } from 'react-hook-form'
import cuid from 'cuid'
import TextInput from '../TextInput'
// import LocationSearchInput from '../LocationSeachInput'

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
		<Grid>
			<Grid.Column width={10}>
				<Segment>
					<Header sub color='teal' content='Event Details' />
					<Form
						onSubmit={handleSubmit(onSubmitted)}
						autoComplete='off'
					>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								name='title'
								placeholder='Give your event a title.'
								type='text'
							/>
						</Form.Field>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								name='category'
								placeholder='What is your event about?'
								type='text'
							/>
						</Form.Field>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								name='description'
								placeholder='Tell us about your event.'
								type='text'
							/>
						</Form.Field>
						<Header
							sub
							color='teal'
							content='Event Location Details'
						/>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								name='city'
								placeholder='Event City.'
								type='text'
							/>
						</Form.Field>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								name='venue'
								placeholder='Event Venue.'
								type='text'
							/>
						</Form.Field>
						<Form.Field>
							<TextInput
								errors={errors}
								required={true}
								register={register}
								placeholder='Event Date.'
								name='date'
							/>
						</Form.Field>

						{/* <Form.Field>
					<label>City</label>
					<LocationSearchInput />
				</Form.Field> */}
						<Button positive type='submit'>
							Submit
						</Button>
						<Button onClick={history.goBack} type='button'>
							Go Back
						</Button>
					</Form>
				</Segment>
			</Grid.Column>
		</Grid>
	)
}

export default EventForm
