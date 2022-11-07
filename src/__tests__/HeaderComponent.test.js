import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HeaderComponent from '../pages/components/HeaderComponent'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from '../utils/test-utils'

import axios from 'axios'

jest.mock('axios')

const dummyTodos = [
    {
        userId: 1,
        id: 1,
        title: 'todo 1',
        completed: false,
    },
]

describe('Header Component Testings', () => {
    test('Header Component Render Main', () => {
        renderWithProviders(
            <MemoryRouter>
                <HeaderComponent />
            </MemoryRouter>
        )
        // Render Header Component
        const mainElement = screen.getByTestId('header-test')
        expect(mainElement).toBeInTheDocument()
    })

    test('Header Component Button onLogout', async () => {
        axios.get.mockResolvedValue({ data: dummyTodos })
        renderWithProviders(
            <MemoryRouter>
                <HeaderComponent />
            </MemoryRouter>
        )
        // Click to the Button
        const buttonOnLogout = screen.getByTestId('onLogout')
        // const todoList = await waitFor(() => screen.findAllByTestId("todo"));
        fireEvent.click(buttonOnLogout)
    })
})
