import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../pages/Main'

describe('Main Component Testings', () => {
    test('Testing Render Main', () => {
        render(<Main />)
        const mainElement = screen.getByTestId('main-test')
        expect(mainElement).toBeInTheDocument()
    })

    // test('Testing Text of Main', () => {
    //     render(<Main />)
    //     const mainTitle = screen.getByTestId('main-title')
    //     expect(mainTitle).toHaveTextContent('My Pet & Me')
    // })
})
