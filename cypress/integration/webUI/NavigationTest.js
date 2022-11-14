/* eslint-disable no-undef */
describe("Renders the project, verifies you can navigate", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("Renders the home page", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
    });

    it("Renders FAQ page", () => {
        cy.wait(1000);
        cy.get(':nth-child(4) > a').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > a').click();
        cy.url().should("include", "/faq");
        cy.findByText("Preguntas Frecuentes").should("exist");
    });

    it("Renders the search page, goes to a vet, verifies popup, back to homepage", () => {
        cy.get("h3").should("contain", "Brindandote tranquilidad a ti y bienestar a tu mascota.");
        cy.wait(1000);
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.url().should("include", "/search");
        cy.wait(1000);
        cy.get(':nth-child(1) > [data-testid="card-component-test"] > .chakra-stack > [data-testid="image-card-test"]').click();
        cy.wait(1000);
        cy.get("h1").should("contain", "Correo");
        cy.wait(100);
        cy.get('b').click();
        cy.get("h2").should("contain", "My Pet & Me");
        cy.get('.active > a').click();

    });

    
});