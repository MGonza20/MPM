import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'

import '../styles/map.css'

import VetPopup from './VetPopup'
import LocationMarker from './components/LocationMarker'

import GetVets from './functions/GetVets'

const iconVet = new Icon({
    iconUrl: '/icons8-marker-a-48.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
    iconSize: [48, 48],
})

const centerPosition = [14.6050635, -90.4893286]

const MapVet = () => {
    const [vets, setVets] = useState(null)
    const [seeInfo, setSeeInfo] = useState(null)
    const [seePopup, setSeePopup] = useState(false)

    const styles = {
        dispInfo: {
            left: 60,
            top: 100,
        },
    }

    const fetchVets = async () => {
        const data = await GetVets()
        if (!data['success']) {
            alert(data['error'])
        } else {
            setVets(data['data'])
        }
    }

    React.useEffect(() => {
        fetchVets()
    }, [])

    const AddVet = ({ lat, long, vet }) => {
        const map = useMap()

        return (
            <Marker
                position={[lat, long]}
                icon={iconVet}
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, map.getZoom())
                        setSeeInfo(vet)
                    },
                }}
            >
                <Tooltip>
                    {vet['name']} <br />
                </Tooltip>
            </Marker>
        )
    }

    const SeeVetInfo = () => {
        return (
            <>
                {seeInfo !== null && (
                    <div className="displayInfo" style={styles.dispInfo}>
                        <h2>Información</h2>
                        <div className="vetInfo">
                            <h4>
                                Nombre: <p>{seeInfo['name']}</p>
                            </h4>
                            <h4>Dirección: {seeInfo['direction']['city']}</h4>
                            <h4>Número de teléfono: {seeInfo['phone']}</h4>
                        </div>
                        <button
                            className="emmBtn"
                            onClick={() => setSeePopup(true)}
                        >
                            Ver Más Detalles
                        </button>
                    </div>
                )}
            </>
        )
    }

    return (
        <div data-testid={'all-map-page-test'}>
            {seePopup && (
                <VetPopup vet={seeInfo} regretOriginal={setSeePopup} />
            )}
            {!seePopup && (
                <div>
                    <SeeVetInfo />
                    <MapContainer center={centerPosition} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                        {vets !== null &&
                            vets.map((vet) => (
                                <AddVet
                                    key={vet['id']}
                                    lat={vet['lat']}
                                    long={vet['long']}
                                    vet={vet}
                                />
                            ))}
                    </MapContainer>
                </div>
            )}
        </div>
    )
}

MapVet.propTypes = {
    lat: PropTypes.number,
    long: PropTypes.number,
    vet: PropTypes.object,
}

export default MapVet
