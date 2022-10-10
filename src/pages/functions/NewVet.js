const NewVet = (theNewVet, dicServices, position) => {
    if (isNaN(theNewVet.telefono) && isNaN(theNewVet.zona)) {
        return { info: 'Debe ingresar solo numeros en telefono y zona.' }
    }

    const services = []
    for (const [key, value] of Object.entries(dicServices)) {
        if (value === true) {
            services.push(key)
        }
    }

    if (services.length === 0) {
        return { info: 'Porfavor ingrese como mínimo un servicio' }
    }

    if (position === null) {
        return { info: 'No has seleccionado una posicion/ubicacion en el mapa' }
    }

    return fetch('http://localhost:5000/api/vets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: theNewVet.nombre,
            direction: {
                city: theNewVet.ciudad,
                zone: theNewVet.zona,
                address: theNewVet.direccion,
            },
            email: theNewVet.correo,
            services: services,
            lat: position.lat,
            long: position.lng,
            phone: theNewVet.telefono,
            emergency: theNewVet.emergencia,
            open_time: theNewVet.apertura,
            close_time: theNewVet.cierre,
        }),
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.success === true) {
                return { info: 'Se agrego la nueva vet exitosamente' }
            }
            return { info: result.message }
        })
        .catch((error) => {
            return { info: error }
        })
        .then(() => {
            window.location.href = '/'
        })
}

export default NewVet
