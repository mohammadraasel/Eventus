import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.createEvent(this.state)
        this.setState({
            title: '',
            date: '',
            city: '',
            venue: '',
            hostedBy: ''
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                    <Form.Field>
                        <label>Event Title</label>
                        <input 
                            type='text'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input
                            type="date"
                            name='date'
                            value={this.state.date}
                            onChange={this.handleInputChange}
                            placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            type='text'
                            name='city'
                            value={this.state.city}
                            onChange={this.handleInputChange}
                            placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            type='text'
                            name='venue'
                            value={this.state.venue}
                            onChange={this.handleInputChange}
                            placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            type='text'
                            name='hostedBy'
                            value={this.state.hostedBy}
                            onChange={this.handleInputChange}
                            placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button onClick={this.props.cancelForm} type="button">Cancel</Button>
                </Form>
            </Segment>
        )
    }
}

export default EventForm
