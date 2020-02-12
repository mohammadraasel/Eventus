import React, { Fragment } from 'react'
import EventListItem from './EventListItem'
const EventList = ({ events }) => {
	return (
		<Fragment>
			{events.map(event => {
				return <EventListItem key={event.id} event={event} />
			})}
		</Fragment>
	)
}

export default EventList
