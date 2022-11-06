import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import Register from '../pages/Register'
import { BrowserRouter } from 'react-router-dom'


describe('Register Component Testings', () => {
    
    test('Testing Render Register', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>)
    })


    test('Testing Render get by id', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>)
        
        expect(screen.getByTestId('register-page-test')).toBeInTheDocument()
    })


    test('Name input has value', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>)
        const nameInput = screen.getByTestId('name-input-test')
        const emailInput = screen.getByTestId('email-input-test')
        const passwordInput = screen.getByTestId('password-input-test')
        const password2Input = screen.getByTestId('password-veri-input-test')
        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(password2Input).toBeInTheDocument()
    })
})
