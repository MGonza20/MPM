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
    
    it("Search emergency Si ", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get('form > .chakra-button').click();
        cy.get('form > .chakra-button').click();
        cy.findByText("El Vet JAJA").should("exist");
    }); 
    

    it("Search by type", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .chakra-select__wrapper > .chakra-select').select('false');
        cy.get(':nth-child(3) > .chakra-select__wrapper > .chakra-select').select('Petshop');
        cy.get('form > .chakra-button').click();
        cy.get(':nth-child(1) > .chakra-select__wrapper > .chakra-select').select('false');
        cy.get(':nth-child(3) > .chakra-select__wrapper > .chakra-select').select('Petshop');
        cy.get('form > .chakra-button').click();
        cy.findByText("Pet Shop San Carlos").should("exist");
    });

    it("Search by servicios", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > .chakra-select__wrapper > .chakra-select').select('Vacunacion');
        cy.get('form > .chakra-button').click();
        cy.get(':nth-child(4) > .chakra-select__wrapper > .chakra-select').select('Vacunacion');
        cy.get('form > .chakra-button').click();
        cy.findByText("Veterinaria el Rejo").should("exist");
    });

    it("Search time filter", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get(':nth-child(2) > input').click();
        cy.get('form > .chakra-button').click();
        cy.findByText("DANA Hospital Veterinario").should("exist");
    });

    it("Search using multiple filters", () => {
        cy.get("h2").should("contain", "My Pet & Me");
        cy.findByText("Brindandote tranquilidad a ti y bienestar a tu mascota.").should("exist");
        cy.get('[data-testid="search"] > a').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .chakra-select__wrapper > .chakra-select').select('false');
        cy.get(':nth-child(3) > .chakra-select__wrapper > .chakra-select').select('Normal');
        cy.get(':nth-child(4) > .chakra-select__wrapper > .chakra-select').select('Operacion');
        cy.get('form > .chakra-button').click();
        cy.findByText("Doctor Pet").should("exist");
    });

    
});
