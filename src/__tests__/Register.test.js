import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/test-utils'
import Register from '../pages/Register'
import { BrowserRouter } from 'react-router-dom'


describe('Register Component Testings', () => {
    
    test('Testing Render Register', () => {
        renderWithProviders(
            <BrowserRouter>
                <Register />
            </BrowserRouter>)
    })

})
