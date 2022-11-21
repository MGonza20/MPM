import '@testing-library/jest-dom/extend-expect'
import NewVet from '../pages/functions/NewVet'

describe('New Vet Function Testings', () => {
    test('Testing Invalid Condition new Phone and Zone', async () => {
        const newVet = {
            nombre: 'prueba',
            ciudad: 'prueba',
            direccion: 'prueba',
            correo: 'prueba',
            telefono: 'asdfasdf',
            emergencia: 'hola',
            apertura: 'hola',
            cierre: 'hola',
        }
        const dicServices = {
            vacunacion: false,
            rayos_x: false,
            examenes_corporales: false,
            hematologias: false,
            hospedaje: false,
            grooming: false,
            desparacitacion: false,
            castraciones: false,
            operacion: false,
        }
        const position = null

        // Call Function of New Vet
        const infoNewVet = await NewVet(newVet, dicServices, position)
        expect(infoNewVet.info).toBe(
            'Debe ingresar solo numeros en telefono y zona.'
        )
    })

    test('Testing Amount of services', async () => {
        const newVet = {
            nombre: 'prueba1',
            ciudad: 'prueba1',
            zona: '15',
            direccion: 'prueba1',
            correo: 'prueba1',
            telefono: '12345678',
            emergencia: 'prueba1',
            apertura: 'prueba1',
            cierre: 'prueba1',
        }
        const dicServices = {
            vacunacion: false,
            rayos_x: false,
            examenes_corporales: false,
            hematologias: false,
            hospedaje: false,
            grooming: false,
            desparacitacion: false,
            castraciones: false,
            operacion: false,
        }
        const position = null

        // Call Function of New Vet
        const infoNewVet = await NewVet(newVet, dicServices, position)
        expect(infoNewVet.info).toBe('Porfavor ingrese como mínimo un servicio')
    })

    test('Testing Position if is Null', async () => {
        const newVet = {
            nombre: 'pruebaNull',
            ciudad: 'pruebaNull',
            zona: '15',
            direccion: 'pruebaNull',
            correo: 'pruebaNull',
            telefono: '12345678',
            emergencia: 'pruebaNull',
            apertura: 'pruebaNull',
            cierre: 'pruebaNull',
        }
        const dicServices = {
            vacunacion: false,
            rayos_x: true,
            examenes_corporales: false,
            hematologias: false,
            hospedaje: false,
            grooming: false,
            desparacitacion: false,
            castraciones: false,
            operacion: false,
        }
        const position = null

        // Call Function of New Vet
        const infoNewVet = await NewVet(newVet, dicServices, position)
        expect(infoNewVet.info).toBe(
            'No has seleccionado una posicion/ubicacion en el mapa'
        )
    })

    // test('Testing Creation of New Vet', async () => {
    //     const newVet = {
    //         nombre: 'Prueba Real 01',
    //         ciudad: 'Prueba Real',
    //         zona: '15',
    //         direccion: 'Prueba Real',
    //         correo: 'Prueba Real',
    //         telefono: '12345678',
    //         emergencia: 'Prueba Real',
    //         apertura: 'Prueba Real',
    //         cierre: 'Prueba Real',
    //     }
    //     const dicServices = {
    //         vacunacion: false,
    //         rayos_x: true,
    //         examenes_corporales: false,
    //         hematologias: false,
    //         hospedaje: false,
    //         grooming: true,
    //         desparacitacion: false,
    //         castraciones: false,
    //         operacion: false,
    //     }
    //     const position = {
    //         lat: 14.647018,
    //         lng: -90.348618,
    //     }

    //     // Call Function of New Vet
    //     const infoNewVet = await NewVet(newVet, dicServices, position)
    //     expect(infoNewVet.info).toBe(null)
    // })
})
