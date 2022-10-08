import { render, screen } from '@testing-library/react'
import ComPop from '../pages/components/ComPop'

describe('ComPop Component Testing', () => {
    test('if compop is in the dom', () => {
        render(<ComPop />)
        const compopElement = screen.getByTestId('compop-comp')
        expect(compopElement).toBeInTheDocument()
        expect(compopElement).toHaveTextContent('HOLA QUE HACE')
    })
})
