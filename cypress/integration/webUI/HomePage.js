/* eslint-disable no-undef */
describe("Renders the home page", () => {
    it("Renders the home page", () => {
        cy.visit("/");
        cy.get("h2").should("contain", "My Pet & Me");
    });

    it("Renders the home page, goes to a vet", () => {
        cy.visit("/");
        cy.get("h3").should("contain", "Brindandote tranquilidad a ti y bienestar a tu mascota.");
        cy.get('[data-testid="search"] > a').click();
        cy.get(':nth-child(1) > [data-testid="card-component-test"] > .chakra-stack > [data-testid="image-card-test"]').click();
        cy.get("h1").should("contain", "Correo");
        
    });
});