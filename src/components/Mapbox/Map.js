import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
	const [viewport, setViewport] = useState({
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
		bearing: 0,
		pitch: 0
	})

	return (
		<ReactMapGL
			{...viewport}
			onViewportChange={setViewport}
			width='100vw'
			height='100vh'
			mapStyle='mapbox://styles/mapbox/streets-v11'
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
		/>
	)
}

export default Map
