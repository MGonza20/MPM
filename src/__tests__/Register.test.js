import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from '../pages/Register'

describe('Register Component Testings', () => {
    test('Testing Render Register Page', () => {
        render(<Register />)
        const registerElement = screen.getByTestId('register-page-test')
        expect(registerElement).toBeInTheDocument()
    })

    test('Name input has value', () => {
        render(<Register />);
        const nameInput = screen.getByTestId('name-input-test')
        const emailInput = screen.getByTestId('email-input-test')
        const passwordInput = screen.getByTestId('password-input-test')
        const password2Input = screen.getByTestId('password-veri-input-test')

        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(password2Input).toBeInTheDocument()
    }) 

    test('Not matching passwords', () => {
        render(<Register />);
        const passwordInput = screen.getByTestId('password-input-test')
        const password2Input = screen.getByTestId('password-veri-input-test')
        const passwordEq = screen.getByTestId('password-test')

        fireEvent.change(passwordInput, {
            persist: jest.fn(),
            target: { name: "password", value: "123"}
        });

        fireEvent.change(password2Input, {
            persist: jest.fn(),
            target: { name: "password", value: "12"}
        });

        expect(passwordEq.value).toEqual("not match");
    }) 
})
