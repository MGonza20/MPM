/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../pages/Login'
import  { Provider } from 'react-redux'
// import store from '../app/store'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

function renderWithRedux(renderedComponent){
    const store = configureStore({
        reducer: {
            auth: authReducer,
        },
    })
    return render(<Provider store={store}>(renderedComponent)</Provider>)
}


/**
 * @jest-enviroment jsdom
 */
describe('Login component Testings', () => {
    
    test('Testing Render login', () => {
        renderWithRedux(<Login />)
        // const infoElement = screen.getByTestId('login-test')
        // expect(infoElement).toBeInTheDocument()
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
