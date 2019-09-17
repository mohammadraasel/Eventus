import React, { Component } from 'react'
import EventListItem from './EventListItem'
export class EventList extends Component {
    render() {
        return (
            <>
                {
                    this.props.events.map(event => {
                        return <EventListItem
                            key={event.id}
                            event={event}
                            deleteEvent={this.props.deleteEvent}
                            selectEvent={this.props.selectEvent} /> 
                    })
                } 
            </>
        )
    }
}

export default EventList
