import React, { Component } from "react"
import { Grid, Button } from "semantic-ui-react"
import EventList from "../EventList/EventList"
import EventForm from "../EventForm/EventForm"
import cuid from "cuid"

const events = [
	{
		id: "1",
		title: "Trip to Tower of London",
		date: "2018-03-27",
		category: "culture",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
		city: "London, UK",
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: "Bob",
		hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
		attendees: [
			{
				id: "a",
				name: "Bob",
				photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
			},
			{
				id: "b",
				name: "Tom",
				photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
			}
		]
	},
	{
		id: "2",
		title: "Trip to Punch and Judy Pub",
		date: "2018-03-28",
		category: "drinks",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
		city: "London, UK",
		venue: "Punch & Judy, Henrietta Street, London, UK",
		hostedBy: "Tom",
		hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
		attendees: [
			{
				id: "b",
				name: "Tom",
				photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
			},
			{
				id: "a",
				name: "Bob",
				photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
			}
		]
	}
]

class EventDashboard extends Component {
	state = {
		events: events,
		isOpen: false,
		selectedEvent: null
	}

	createEvent = newEvent => {
		newEvent.id = cuid()
		newEvent.hostPhotoURL = "/assets/user.png"
		newEvent.attendees = []
		this.setState(prevState => ({
			events: [...prevState.events, newEvent],
			isOpen: false
		}))
	}
	// toggleForm = () => {
	//   this.setState(({ isOpen }) => {
	//       return {
	//           isOpen: !isOpen
	//       }
	//   })
	// }

	handleCreateFormOpen = () => {
		this.setState({
			isOpen: true,
			selectedEvent: null
		})
	}

	handleCreateFormCancel = () => {
		this.setState({ isOpen: false })
	}

	handleSelectEvent = event => {
		this.setState({
			selectedEvent: event,
			isOpen: true
		})
	}

	handleUpdateEvent = updatedEvent => {
		this.setState(prevState => ({
			events: prevState.events.map(event =>
				event.id === updatedEvent.id ? { ...updatedEvent } : event
			),
			isOpen: false,
			selectedEvent: null
		}))
	}
	handleDeleteEvent = eventId => {
		this.setState(prevState => ({
			events: prevState.events.filter(event => event.id !== eventId)
		}))
	}

	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList
						events={this.state.events}
						deleteEvent={this.handleDeleteEvent}
						selectEvent={this.handleSelectEvent}
					/>
				</Grid.Column>
				<Grid.Column width={6}>
					<Button
						onClick={this.handleCreateFormOpen}
						positive
						content='Create Event'
					/>
					{this.state.isOpen && (
						<EventForm
							key={
								this.state.selectedEvent
									? this.state.selectedEvent.id
									: 0
							}
							selectedEvent={this.state.selectedEvent}
							updateEvent={this.handleUpdateEvent}
							cancelForm={this.handleCreateFormCancel}
							createEvent={this.createEvent}
						/>
					)}
				</Grid.Column>
			</Grid>
		)
	}
}

export default EventDashboard
