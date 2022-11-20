/* eslint-disable no-undef */
import Main from '../../src/pages/Main'

describe('MyPetAndMe.cy.js', () => {
    it('playground', () => {
        cy.viewport(1280, 720)
        cy.mount(<Main />)
    })
})
