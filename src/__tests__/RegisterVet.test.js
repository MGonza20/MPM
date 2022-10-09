import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import RegisterVet from '../pages/RegisterVet'
import { MemoryRouter } from 'react-router-dom'

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
})
