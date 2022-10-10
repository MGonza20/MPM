import { Marker, Tooltip, useMap } from 'react-leaflet'

import iconVet from '../icons/IconVet'

const AVet = ({ lat, long, vet, setSeeInfo }) => {
    const map = useMap()

    return (
        <Marker
            key={vet['id']}
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

const AddVet = ({ vets, setSeeInfo }) => {
    return vets.map((vet) => (
        <AVet
            lat={vet['lat']}
            long={vet['long']}
            vet={vet}
            setSeeInfo={setSeeInfo}
        />
    ))
}

export default AddVet
