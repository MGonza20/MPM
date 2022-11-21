/* eslint-disable no-undef */
describe("Testing the buttons on our search page", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("Search emergency No ", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .chakra-select__wrapper > .chakra-select').select('false');
        cy.get('form > .chakra-button').click();
        cy.get(':nth-child(1) > .chakra-select__wrapper > .chakra-select').select('false');
        cy.get('form > .chakra-button').click();
        cy.findByText("Sara Tech Maxi Vet 2").should("exist");
    });   

});