import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from '../pages/Register'

describe('Register Component Testings', () => {
    test('Testing Render Register Page', () => {
        render(<Register />)
        const registerElement = screen.getByTestId('register-page-test')
        expect(registerElement).toBeInTheDocument()
    })
})
