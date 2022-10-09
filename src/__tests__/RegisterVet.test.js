import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RegisterVet from '../pages/RegisterVet'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('Register Vet Component Testings', () => {
    test('Testing Render Register Vet', () => {
        render(
            <MemoryRouter>
                <RegisterVet />
            </MemoryRouter>
        )
        const registerVetElement = screen.getByTestId('register-vet')
        expect(registerVetElement).toBeInTheDocument()
    })

    test('Waiting Click Of Handle Add Vet', () => {
        const onSubmit = jest.fn()

        render(
            <MemoryRouter>
                <RegisterVet />
            </MemoryRouter>
        )

        fireEvent.submit(screen.getByTestId('handle-add-vet-test'))
        expect(onSubmit).toHaveBeenCalled()
    })

    // test('Testing Click of Locate Marker', async () => {
    //     // Lineas 40-42 [map-container-test] // Si no funciona entonces se introducirá en LocateMarker
    //     // [coords-text]

    //     render(
    //         <MemoryRouter>
    //             <RegisterVet />
    //         </MemoryRouter>
    //     )
    //     // const mapContainerElement = screen.getByTestId('map-container-test')
    //     userEvent.click(screen.getByTestId('map-container-test'))
    //     // fireEvent.click(screen.getByTestId('map-container-test'))
    //     // act(() => {
    //     //     fireEvent.click(screen.getByTestId('map-container-test'))
    //     // })

    //     const coordsText = screen.getByTestId('coords-text')
    //     expect(coordsText).toHaveTextContent('Coordenadas Seleccionadas')
    // })

    // test('Testing Handle Add Vet', () => {
    //     // Lineas 53-54, 58-60, 69-104
    // })

    // test('Testing Getters Of Register Vet', () => {
    //     // Testeando los Input Components para ver Comportamiento de los Getters
    //     // -> [get-nombre-test]
    //     // -> [get-ciudad-test]
    //     // -> [get-zona-test]
    //     // -> [get-direccion-test]
    //     // -> [get-correo-test]
    // })

    test('Verify CheckBoxes [onChange] of the Form', () => {
        // Testeo de setDicServices y CheckBoxes
        render(
            <MemoryRouter>
                <RegisterVet />
            </MemoryRouter>
        )
        // -> Vacunacion [vacunacion-test]
        const vacunacion = screen.getByTestId('vacunacion-test')
        expect(vacunacion).toBeEnabled()

        // -> Rayos X [rayos-x-test]

        // const rayos_x = screen.getByTestId('rayos-x-test')
        // expect(rayos_x).toBeEnabled()

        // -> Examenes Corporales [examenes-corporales-test]
        // -> Hematologías [hematologias-test]
        // -> Hospedaje [hospedaje-test]
        // -> Grooming [grooming-test]
        // -> Desparacitacion [desparacitacion-test]
        // -> Castraciones [castraciones-test]
        // -> Operacion [operacion-test]
    })
})
