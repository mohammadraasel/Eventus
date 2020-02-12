import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailChat from './EventDetailChat'
import EventDetailSidebar from './EventDetailSidebar'
import { useSelector } from 'react-redux'

const EventDetail = props => {
	const { id } = useParams()
	const event = useSelector(state => {
		let foundEvent = state.events.find(event => event.id === id)
		return foundEvent ? foundEvent : {}
	})

	useEffect(() => {
		console.log(id)
	}, [id])
	return (
		<Grid>
			<Grid.Column width={10}>
				<EventDetailHeader event={event} />
				<EventDetailInfo event={event} />
				<EventDetailChat />
			</Grid.Column>
			<Grid.Column width={6}>
				<EventDetailSidebar attendees={event.attendees} />
			</Grid.Column>
		</Grid>
	)
}

EventDetail.propTypes = {}

export default EventDetail
