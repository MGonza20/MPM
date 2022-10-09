// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GetVets from '../pages/functions/GetVets'

describe('Get Vets Component Testings', () => {
    test('Testing Retorner Information Of Get Vets', async () => {
        var expected_value = false
        const data = await GetVets()
        console.log(data)
        console.log('REVISAR DATA: ' + data['success'])
        if (data['success'] === true) {
            expected_value = true
        }

        expect(expected_value).toBe(true)
    })

    test('Testing Amount Vets', async () => {
        const data = await GetVets()
        expect(data['data'].length).toBeGreaterThan(1)
    })
})
