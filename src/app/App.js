import React, { Component, Fragment } from "react"
import EventDashboard from "../components/EventDashboard/EventDashboard"
import NavBar from "../components/NavBar/NavBar"
import { Container } from "semantic-ui-react"
import { Route, Switch } from "react-router-dom"
import EventForm from "../components/EventForm/EventForm"
import HomePage from "../components/Home/HomePage"
import SettingsDashboard from "../components/Settings/SettingsDashboard"

class App extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path='/' component={HomePage} />
				<Route
					path='/(.+)'
					render={() => (
						<Fragment>
							<NavBar />
							<Container className='main'>
								<Switch>
									<Route
										exact
										path='/events'
										component={EventDashboard}
									/>
									<Route
										exact
										path='/events/:id'
										component={EventDashboard}
									/>
									<Route
										exact
										path='/people'
										component={EventDashboard}
									/>
									<Route
										exact
										path='/profile/:id'
										component={EventDashboard}
									/>
									<Route
										path='/settings'
										component={SettingsDashboard}
									/>
									<Route
										exact
										path='/create-event'
										component={EventForm}
									/>
								</Switch>
							</Container>
						</Fragment>
					)}
				/>
			</Fragment>
		)
	}
}

export default App
