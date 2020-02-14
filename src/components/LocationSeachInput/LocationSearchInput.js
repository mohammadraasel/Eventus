import React, { useState } from 'react'
import { create } from 'apisauce'
import './LocationSearchInput.scss'

const LocationSearchInput = props => {
	const [search, setSearch] = useState('')
	const [results, setResult] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	let timeoutId

	const handleSearchChange = e => {
		setSearch(e.target.value)
		setIsLoading(true)

		// Stop the previous setTimeout if there is one in progress
		clearTimeout(timeoutId)

		timeoutId = setTimeout(() => {
			performSearch()
		}, 1000)
	}

	const performSearch = () => {
		if (search === '') {
			setResult([])
			setIsLoading(false)
			return
		}
		const api = create({
			baseURL: process.env.REACT_APP_MAPBOX_GEOCODE_URL
		})
		api.get(
			`/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
		).then(response => {
			setResult(response.data.features ? response.data.features : [])
			setIsLoading(false)
		})
	}

	const handleItemClicked = place => {
		setSearch(place.place_name)
		setResult([])
		props.onSelect(place)
	}

	return (
		<div className='location-search-input-container'>
			<input
				className='location-search-input'
				type='search'
				value={search}
				onChange={handleSearchChange}
				placeholder='Type address'
			/>
			<ul className='search-results'>
				{results.map(place => (
					<li
						key={place.id}
						className='search-item'
						onClick={() => handleItemClicked(place)}
					>
						{place.place_name}
					</li>
				))}
				{isLoading && <li className='search-item'>Loading...</li>}
			</ul>
		</div>
	)
}

LocationSearchInput.propTypes = {}

export default LocationSearchInput
