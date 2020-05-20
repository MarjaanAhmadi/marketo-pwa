import React,{useState} from 'react';
import ReactMapGl from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
const Test = () => {
	const [viewport, setViewport] = useState({
		width: 400,
		height: 400,
		latitude: 37.3,
		longitude: -122,
		zoom: 8
	});
	const accessToken = 'pk.eyJ1IjoiaGFkaWVza2FuZGFyaSIsImEiOiJjam9uMDdmMDkxNnY2M29wYzZxNzc3MzVwIn0.q4V2ENmVFJmGegA-ylUDdg'
	return (
		<ReactMapGl viewport={viewport}
		mapboxApiAccessToken={accessToken}
					/>
	)
}
export default Test;