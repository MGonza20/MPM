import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import Register from '../pages/Register'
import { BrowserRouter } from 'react-router-dom'
// import { useAppSelector } from '../app/hooks'

describe('Register Component Testings', () => {
    test('Testing Render Register', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )
    })

    test('Testing Render get by id', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )

        expect(screen.getByTestId('register-page-test')).toBeInTheDocument()
    })

    test('Testing Form On Submit', () => {
        const onSubmit = jest.fn()
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )

        fireEvent.submit(screen.getByTestId('onSubmit'))
        expect(onSubmit).toHaveBeenCalled()
    })

    test('Fields render in app', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )
        const nameInput = screen.getByTestId('name-input-test')
        const emailInput = screen.getByTestId('email-input-test')
        const passwordInput = screen.getByTestId('password-input-test')
        const password2Input = screen.getByTestId('password-veri-input-test')
        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(password2Input).toBeInTheDocument()
    })

    test('Fill all the fields error', async () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        )
        const nameInput = screen.getByTestId('name-input-test')
        const button = screen.getByTestId('button-accept-test')
        fireEvent.change(nameInput, { target: { value: 'Sara' } })
        fireEvent.click(button)
        const toastText = await screen.findByText(/Añada todos los campos/i)
        expect(toastText).toBeInTheDocument()
    })
})

// Passwords are not equal error
