import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MapContainer, TileLayer } from 'react-leaflet'

import '../styles/map.css'

// Componentes
import VetPopup from './VetPopup'
import LocationMarker from './components/LocationMarker'
import AddVet from './components/AddVet'
import SeeVetInfo from './components/SeeVetInfo'

import FetchVets from './functions/FetchVets'

const centerPosition = [14.6050635, -90.4893286]

const MapVet = () => {
    const [vets, setVets] = useState(null)
    const [seeInfo, setSeeInfo] = useState(null)
    const [seePopup, setSeePopup] = useState(false)

    React.useEffect(() => {
        FetchVets(setVets)
    }, [])

    return (
        <div data-testid={'all-map-page-test'}>
            {seePopup && (
                <VetPopup vet={seeInfo} regretOriginal={setSeePopup} />
            )}
            {!seePopup && (
                <div data-testid={'map-vet-test'}>
                    <SeeVetInfo seeInfo={seeInfo} setSeePopup={setSeePopup} />
                    <MapContainer center={centerPosition} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                        {vets !== null && (
                            <AddVet vets={vets} setSeeInfo={setSeeInfo} />
                        )}
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
