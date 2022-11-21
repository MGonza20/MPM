/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, getByText, screen } from '@testing-library/react'
import Login from '../pages/Login'
import { renderWithProviders } from '../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'

/**
 * @jest-enviroment jsdom
 */
describe('Login component Testings', () => {
    test('Testing Render login', () => {
        renderWithProviders(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        const infoElement = screen.getByTestId('login-test')
        expect(infoElement).toBeInTheDocument()
    })
})

describe('Testing On Submit', () => {
    test('Testing Button of Form', () => {
        const onSubmit = jest.fn()
        renderWithProviders(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        fireEvent.submit(screen.getByTestId('onSubmit'))
        expect(onSubmit).toHaveBeenCalled()
    })
})
