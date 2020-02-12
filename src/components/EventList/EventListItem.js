import React from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'
import { deleteEvent } from '../../redux/events/actions'
import { useDispatch } from 'react-redux'

const EventListItem = ({ event }) => {
	const dispatch = useDispatch()
	const removeEvent = id => {
		dispatch(deleteEvent(id))
	}

	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image
							size='tiny'
							circular
							src={event.hostPhotoURL}
						/>
						<Item.Content>
							<Item.Header as='a'>{event.title}</Item.Header>
							<Item.Description>
								Hosted by <span>{event.hostedBy}</span>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name='clock' /> {event.date} |
					<Icon name='marker' /> {event.venue}
				</span>
			</Segment>
			<Segment secondary>
				<List horizontal>
					{event.attendees &&
						event.attendees.map(attendee => {
							return (
								<EventListAttendee
									key={attendee.id}
									attendee={attendee}
								/>
							)
						})}
				</List>
			</Segment>
			<Segment clearing>
				<span>{event.description}</span>
				<Button
					onClick={() => removeEvent(event.id)}
					as='a'
					color='red'
					floated='right'
					content='Remove'
				/>
				<Button
					as={Link}
					to={`events/${event.id}`}
					color='teal'
					floated='right'
					content='View'
				/>
			</Segment>
		</Segment.Group>
	)
}

export default EventListItem
