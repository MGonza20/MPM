import React, { useEffect, useState } from 'react'
import { Marker, Tooltip, useMap } from 'react-leaflet'
import L from 'leaflet'

import iconHouse from '../icons/IconHouse'

const LocationMarker = () => {
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        map.locate().on('locationfound', function (e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            const radius = e.accuracy
            const circle = L.circle(e.latlng, radius)
            circle.addTo(map)
        })
    }, [map])

    return position == null ? null : (
        <Marker
            position={position}
            icon={iconHouse}
            eventHandlers={{
                click: (e) => {
                    map.flyTo(e.latlng, map.getZoom())
                },
            }}
        >
            <Tooltip>
                Tu estas aquí <br />
            </Tooltip>
        </Marker>
    )
}

export default LocationMarker
