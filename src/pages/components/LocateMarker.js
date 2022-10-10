// Librerias para usar el Mapa
import { useMapEvents, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

const iconHouse = new Icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
})

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
