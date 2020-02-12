import React, { useState } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
	const [isAuthenticated, setAuth] = useState(false)
	const history = useHistory()

	const signIn = () => {
		setAuth(true)
	}

	const signOut = () => {
		setAuth(false)
		history.push('/')
	}
	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item as={NavLink} exact to='/' header>
					<img src='/assets/logo.png' alt='logo' />
					Revents
				</Menu.Item>
				<Menu.Item as={NavLink} exact to='/events' name='Events' />
				<Menu.Item as={NavLink} to='/people' name='People' />
				<Menu.Item>
					<Button
						as={Link}
						to='/create-event'
						floated='right'
						positive
						inverted
						content='Create Event'
					/>
				</Menu.Item>
				{isAuthenticated ? (
					<SignedInMenu signOut={signOut} />
				) : (
					<SignedOutMenu signIn={signIn} />
				)}
			</Container>
		</Menu>
	)
}

export default NavBar
