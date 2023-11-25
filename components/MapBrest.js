import React from 'react'
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapBrest() {
    return (
        <Map
            className="!absolute top-0 left-0 right-0 h-screen w-screen bg-gray-secondary mapboxgl-map"
            mapboxAccessToken="pk.eyJ1IjoibHlkaWVwIiwiYSI6ImNscGVrbnMwMzFkbW8yaHJsM3NxYWEyYWYifQ.H6r8YZNEibvRDLUvd7IgYg"
            initialViewState={{
                longitude: -4.48,
                latitude: 48.39,
                zoom: 9
            }}
            style={{ width: "100%", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    )
}
