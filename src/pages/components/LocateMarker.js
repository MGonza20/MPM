// Librerias para usar el Mapa
import { useMapEvents, Marker } from 'react-leaflet'

import iconHouse from '../icons/IconHouse'

const LocateMarker = ({ position, setPosition }) => {
    // Métodos para obtener la ubicacion
    const map = useMapEvents({
        click(e) {
            map.locate()
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={iconHouse}></Marker>
    )
}

export default LocateMarker
