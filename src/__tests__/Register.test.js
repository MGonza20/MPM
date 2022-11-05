import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from '../pages/Register'
import  { Provider } from 'react-redux'
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



describe('Register Component Testings', () => {
    
    test('Testing Render Register', () => {
        renderWithRedux(<Register />)
    })
    
    // test('Testing Render Register Page', () => {
    //     renderWithRedux(<Register />)
    //     const registerElement = screen.getByTestId('register-page-test')
    //     expect(registerElement).toBeInTheDocument()
    // })

    // test('Name input has value', () => {
    //     renderWithRedux(<Register />)
    //     const nameInput = screen.getByTestId('name-input-test')
    //     const emailInput = screen.getByTestId('email-input-test')
    //     const passwordInput = screen.getByTestId('password-input-test')
    //     const password2Input = screen.getByTestId('password-veri-input-test')

    //     expect(nameInput).toBeInTheDocument()
    //     expect(emailInput).toBeInTheDocument()
    //     expect(passwordInput).toBeInTheDocument()
    //     expect(password2Input).toBeInTheDocument()
    // }) 
})
