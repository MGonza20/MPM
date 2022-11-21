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

    test('Verify CheckBoxes of the Form', () => {
        render(
            <MemoryRouter>
                <RegisterVet />
            </MemoryRouter>
        )

        const [
            Vacunacion,
            RayosX,
            ExamenesCorporales,
            Hematologias,
            Hospedajes,
            Grooming,
            Desparacitacion,
            Castraciones,
            Operacion,
        ] = screen.getAllByRole('checkbox')

        userEvent.dblClick(Vacunacion)
        expect(Vacunacion).not.toBeChecked()

        userEvent.dblClick(RayosX)
        expect(RayosX).not.toBeChecked()

        userEvent.dblClick(ExamenesCorporales)
        expect(ExamenesCorporales).not.toBeChecked()

        userEvent.dblClick(Hematologias)
        expect(Hematologias).not.toBeChecked()

        userEvent.dblClick(Hospedajes)
        expect(Hospedajes).not.toBeChecked()

        userEvent.dblClick(Grooming)
        expect(Grooming).not.toBeChecked()

        userEvent.dblClick(Desparacitacion)
        expect(Desparacitacion).not.toBeChecked()

        userEvent.dblClick(Castraciones)
        expect(Castraciones).not.toBeChecked()

        userEvent.dblClick(Operacion)
        expect(Operacion).not.toBeChecked()
    })

    test('Verify Form Label of the Form', () => {
        render(
            <MemoryRouter>
                <RegisterVet />
            </MemoryRouter>
        )

        const aperturaInput = screen.getByTestId('apertura-test')
        aperturaInput.setSelectionRange(0, 4)
        userEvent.type(aperturaInput, '08:00')
        expect(aperturaInput).toHaveValue('08:00')

        const cierreInput = screen.getByTestId('cierre-test')
        cierreInput.setSelectionRange(0, 4)
        userEvent.type(cierreInput, '20:00')
        expect(cierreInput).toHaveValue('20:00')
    })
})
