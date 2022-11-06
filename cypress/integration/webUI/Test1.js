/* eslint-disable no-undef */
// cypress - Spec 

describe('My first Test Suite', function()
{
    it('My FirstTest case', function(){
        cy.visit("'http://localhost:3000/%27")
    })
})