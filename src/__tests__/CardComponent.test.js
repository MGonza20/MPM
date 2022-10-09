import { render, screen, renderer } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CardComponent from '../pages/components/CardComponent'
import userEvent from '@testing-library/user-event'
// import { MemoryRouter } from "react-router-dom";

describe('Card Component Testings', () => {
    test('Card Component Render Main', () => {
        const vetExample = {
            name: 'card component example',
            email: 'elcorreo',
            phone: '7777-7777',
            direction: { city: 'laciudad', zone: '51', address: 'desconocido' },
        }

        render(
            <CardComponent
                vet={vetExample}
                image={'https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jp'}
                setSeePopup={() => {}}
                setSelectedVet={() => {}}
            />
        )
        const mainElement = screen.getByTestId('card-component-test')
        expect(mainElement).toBeInTheDocument()
    })

    test('Card Component Check text', () => {
        const vetExample = {
            name: 'card component example',
            email: 'elcorreo',
            phone: '7777-7777',
            direction: { city: 'laciudad', zone: '51', address: 'desconocido' },
        }

        render(
            <CardComponent
                vet={vetExample}
                image={'https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jp'}
                setSeePopup={() => {}}
                setSelectedVet={() => {}}
            />
        )
        const mainTextElement = screen.getByText(/card component example/i)
        expect(mainTextElement).toBeInTheDocument()
    })

    test('Testing Handle Click', () => {
        const vetExample = {
            name: 'card component example',
            email: 'elcorreo',
            phone: '7777-7777',
            direction: { city: 'laciudad', zone: '51', address: 'desconocido' },
        }

        render(
            <CardComponent
                vet={vetExample}
                image={'https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jp'}
                setSeePopup={() => {}}
                setSelectedVet={() => {}}
            />
        )

        userEvent.click(screen.getByTestId('card-component-test'))
        expect(screen.getByTestId('card-component-test')).toBeChecked()
    })
})
