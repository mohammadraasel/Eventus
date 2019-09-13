import React, { Component } from 'react'
import EventListItem from './EventListItem'
export class EventList extends Component {
    render() {
        return (
            <>
                {
                    this.props.events.map(event => {
                        return <EventListItem key={event.id} event={event}/> 
                    })
                } 
            </>
        )
    }
}

export default EventList
