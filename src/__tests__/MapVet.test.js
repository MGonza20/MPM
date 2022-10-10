import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MapVet from '../pages/MapVet'

describe('Main Component Testings', () => {
    test('Testing Render Main', () => {
        render(<MapVet />)
        const mapvetElement = screen.getByTestId('all-map-page-test')
        expect(mapvetElement).toBeInTheDocument()
    })
})
