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
        // -> Hora de apertura [apertura-test]
        // -> Hora de cierre [cierre-test]
    })
})
