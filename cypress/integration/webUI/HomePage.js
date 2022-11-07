/* eslint-disable no-undef */
describe("Renders the home page", () => {
    it("Renders the home page", () => {
        cy.visit("/");
        cy.get("h2").should("contain", "My Pet & Me");
    });

    it("Renders FAQ page", () => {
        cy.visit("/"); 
        cy.get(':nth-child(4) > a').click();
        cy.get(':nth-child(4) > a').click();
        cy.get("h1").should("contain", "1. ¿Cómo debo usar la página en caso de una emergencia?");
    });

    it("Renders the search page, goes to a vet, verifies popup, back to homepage", () => {
        cy.visit("/");
        cy.get("h3").should("contain", "Brindandote tranquilidad a ti y bienestar a tu mascota.");
        cy.get('[data-testid="search"] > a').click();
        cy.get(':nth-child(1) > [data-testid="card-component-test"] > .chakra-stack > [data-testid="image-card-test"]').click();
        cy.get("h1").should("contain", "Correo");
        cy.get('b').click();
        cy.get("h2").should("contain", "My Pet & Me");
        
    });

    
});