import { fireEvent, render, screen } from '@testing-library/react'
import InputComponent from '../pages/components/InputComponent'

/**
 * @jest-enviroment jsdom
 */

describe('Vet Popup Component Testings', () => {
    test('Testing Render The Vet Popup', () => {
        const dumFunc = () => {}
        render(
            <InputComponent
                getter={dumFunc}
                title={'Hola'}
                message={'Mensaje'}
            />
        )
        const infoElement = screen.getByTestId('handleChange')
        fireEvent.click(infoElement)
    })
})
