/* eslint-disable no-undef */
// cypress - Spec
/// <reference types="Cypress"/>

/**
 * ESTA ES UNA PRUEBA PARA REVISAR CYPRESS :)
 */

describe('My first Test Suite', function () {
    it('My FirstTest case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)

        cy.get('.products')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')
            .click()
        // cy.contains('ADD TO CART')

        cy.get('.products').as('productLocator')
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text()

                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click()
                }
            })
        cy.get('.cart-icon > img').click()
    })
})
