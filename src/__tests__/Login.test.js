/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, getByText, screen } from '@testing-library/react'
import Login from '../pages/Login'
import { renderWithProviders } from '../utils/test-utils'
import { BrowserRouter } from 'react-router-dom'

// import store from '../app/store'

/**
 * @jest-enviroment jsdom
 */
describe('Login component Testings', () => {
    
    test('Testing Render login', () => {
        renderWithProviders(<BrowserRouter><Login /></BrowserRouter>)
        const infoElement = screen.getByTestId('login-test')
        expect(infoElement).toBeInTheDocument()
    })
    
    // test('Testing Render login', () => {
    //     renderWithRedux(<Login />)
    //     const infoElement = screen.getByTestId('login-test')
    //     expect(infoElement).toBeInTheDocument()
    // })

    // test('Testing if there is a Form', () => {
    //     render(<Login />)
    //     const loginElement = screen.getAllByRole('form')
    //     expect(loginElement.length).toBeGreaterThanOrEqual(1)
    // })

    // test('Testing good amount of divs', () => {
    //     render(<Login />)
    //     const loginElement = screen.getAllByRole('div')
    //     expect(loginElement.length).toBeGreaterThan(1)
    // })
})
