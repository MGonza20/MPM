/* eslint-disable no-undef */
describe("This is a test for emergency", () => {
    
    beforeEach(() => {
        cy.visit("/");
    });

    it("Renders the home page", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('.active > a').click();
        cy.get('[style="margin-left: -24px; margin-top: -24px; width: 48px; height: 48px; transform: translate3d(489px, 280px, 0px); z-index: 280;"]').click();
        cy.get("h2").should("contain", "Información");
        cy.get('.emmBtn').click();
        cy.get("h1").should("contain", "Correo");
        
    });

});