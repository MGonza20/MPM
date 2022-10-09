import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { MemoryRouter } from "react-router-dom";


describe('Header Component Testings', () => {
    test('Header Component Render Main', () => {
        render( <MemoryRouter>
                    <App />
                </MemoryRouter>)
        const mainElement = screen.getByTestId('header-test')
        expect(mainElement).toBeInTheDocument()
    })
})