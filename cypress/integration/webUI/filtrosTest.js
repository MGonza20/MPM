/* eslint-disable no-undef */
describe("Testing the filtesrs on our search page", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("Search by keywords", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid="search"] > a').click();
        cy.get('[data-testid="barrita"]').clear('v');
        cy.get('[data-testid="barrita"]').type('vet zoo');
        cy.get('[data-testid="botoncito"]').click();
        cy.findByText("vet zoo").should("exist");
    });

});