import React, { Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const EventDetailSidebar = ({ attendees }) => {
	const isHost = false
	return (
		<Fragment>
			<Segment
				textAlign='center'
				style={{ border: 'none' }}
				attached='top'
				secondary
				inverted
				color='teal'
			>
				{attendees && attendees.length}{' '}
				{attendees && attendees.length === 1 ? 'Person' : 'People'}{' '}
				Going
			</Segment>
			<Segment attached>
				<Item.Group divided>
					{attendees.map(attendee => (
						<Item
							key={attendee.id}
							style={{ position: 'relative' }}
						>
							{isHost && (
								<Label
									style={{ position: 'absolute' }}
									color='orange'
									ribbon='right'
								>
									Host
								</Label>
							)}
							<Item.Image size='tiny' src={attendee.photoURL} />
							<Item.Content verticalAlign='middle'>
								<Item.Header as='h3'>
									{attendee.name}
								</Item.Header>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Segment>
		</Fragment>
	)
}

EventDetailSidebar.propTypes = {
	attendees: PropTypes.arrayOf(PropTypes.object)
}

export default EventDetailSidebar
