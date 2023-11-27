import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapBrest({ barsData, mapRef }) {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        mapboxgl.accessToken = TOKEN;

        // Create the map
        const createMap = () => {
            return new mapboxgl.Map({
                container: 'map',
                style: theme === "dark" ? 'mapbox://styles/lydiep/clpf42epj00ei01pjd7kg2oe5' : 'mapbox://styles/lydiep/clpf47qba00ea01pag9k45mln',
                center: [-4.48, 48.39],
                zoom: 9
            });
        };

        const map = createMap();
        mapRef.current = map;

        map.on('load', () => {
            map.addSource('bars', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: barsData.map(bar => ({
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: bar.location.coordinates
                        },
                        properties: {
                            id: bar.id,
                            name: bar.name,
                            address: bar.address
                        }
                    }))
                },
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50,
            });

            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'bars',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#b786ee',
                        100,
                        '#8454bc',
                        750,
                        '#b22bc0'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ]
                }
            });

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'bars',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': ['get', 'point_count_abbreviated'],
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'bars',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#11b4da',
                    'circle-radius': 4,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff'
                }
            });

            map.on('click', 'clusters', (e) => {
                // Click on a cluster
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ['clusters']
                });
                const clusterId = features[0].properties.cluster_id;
                map.getSource('bars').getClusterExpansionZoom(
                    clusterId,
                    (err, zoom) => {
                        if (err) return;

                        map.easeTo({
                            center: features[0].geometry.coordinates,
                            zoom: zoom
                        });
                    }
                );
            });

            map.on('click', 'unclustered-point', (e) => {
                // Click on a point
                const coordinates = e.features[0].geometry.coordinates;

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML('<h3 style="color: black">' + e.features[0].properties.name + '</h3><p style="color: black">' + e.features[0].properties.address + '</p>')
                    .addTo(map);
            });
        });

        // change the theme
        const handleThemeChange = (newTheme) => {
            map.setStyle(newTheme === "dark" ? 'mapbox://styles/lydiep/clpf42epj00ei01pjd7kg2oe5' : 'mapbox://styles/lydiep/clpf47qba00ea01pag9k45mln');
        };

        // listen to theme change events
        setTheme((currentTheme) => {
            handleThemeChange(currentTheme);
            return currentTheme;
        });

        return () => {
            map.remove(); // remove the card
        };
    }, [barsData, mapRef, setTheme, theme]);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    );
};
