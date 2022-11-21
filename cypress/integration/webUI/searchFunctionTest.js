/* eslint-disable no-undef */
describe("Testing the search on our search page", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("Search by keywords", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get('[data-testid="barrita"]').click();
        cy.get('[data-testid="barrita"]').clear();
        cy.get('[data-testid="barrita"]').type('zo');
        cy.get('[data-testid="botoncito"]').click();
        cy.findByText("vet zoo").should("exist");
    });   

});