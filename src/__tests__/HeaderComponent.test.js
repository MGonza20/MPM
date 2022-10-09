import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HeaderComponent from '../pages/components/HeaderComponent'

describe('Header Component Testings', () => {
    test('Header Component Render Main', () => {
        render(<HeaderComponent />)
        const mainElement = screen.getByTestId('header-test')
        expect(mainElement).toBeInTheDocument()
    })
})
