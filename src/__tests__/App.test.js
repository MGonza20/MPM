import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'

describe('App Component Testings', () => {
    test('App Component Render Main', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const mainElement = screen.getByTestId('header-test')
        expect(mainElement).toBeInTheDocument()
    })
})
