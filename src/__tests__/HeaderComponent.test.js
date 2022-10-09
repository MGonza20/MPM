import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HeaderComponent from '../pages/components/HeaderComponent'
import { MemoryRouter } from "react-router-dom";


describe('Header Component Testings', () => {
    test('Header Component Render Main', () => {
        render( <MemoryRouter>
                    <HeaderComponent />
                </MemoryRouter>)
        const mainElement = screen.getByTestId('header-test')
        expect(mainElement).toBeInTheDocument()
    })
})
