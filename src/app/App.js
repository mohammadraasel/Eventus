import React, { Fragment, useEffect } from 'react'
import EventDashboard from '../components/EventDashboard/EventDashboard'
import NavBar from '../components/NavBar/NavBar'
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import EventForm from '../components/EventForm/EventForm'
import HomePage from '../components/Home/HomePage'
import SettingsDashboard from '../components/Settings/SettingsDashboard'
import PeopleDashboard from '../components/PeopleDashboard/PeopleDashboard'
import EventDetail from '../components/EventDetail/EventDetail'
import { useLocation } from 'react-router-dom'

const App = () => {
	const { pathname, key } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<Fragment>
			<Route exact path='/' component={HomePage} />
			<Route
				path='/(.+)'
				render={() => (
					<Fragment>
						<NavBar />
						<Container className='main'>
							<Switch key={key}>
								<Route
									exact
									path='/events'
									component={EventDashboard}
								/>
								<Route
									exact
									path='/events/:id'
									component={EventDetail}
								/>
								<Route
									exact
									path='/people'
									component={PeopleDashboard}
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
									path={['/create-event', '/manage/:id']}
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

export default App
