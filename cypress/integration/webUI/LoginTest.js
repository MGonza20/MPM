/* eslint-disable no-undef */
// cypress - Spec

describe('My Pet & Me - Login Test', function () {
    // it('Test of Invalid User', function () {
    //     cy.visit('http://localhost:3000/')

    //     cy.wait(1000)

    //     cy.get(':nth-child(3) > a').click()

    //     cy.wait(1000)

    //     // Probar cuenta invalida
    //     cy.get(':nth-child(1) > .chakra-input').type(
    //         'soy_un_colado@facke.gmail'
    //     )
    //     cy.get(':nth-child(2) > .chakra-input').type('contrafake')

    //     cy.get('.chakra-button').click()

    //     cy.wait(5000) // Solamente para ver el error que puede ocurrir
    // })

    it('Test of Existing User', function () {
        cy.visit('http://localhost:3000/')

        cy.wait(1000)

        cy.get(':nth-child(3) > a').click()

        cy.wait(1000)

        // Ingresar a una cuenta ya existente
        cy.get(':nth-child(1) > .chakra-input').type('crisVet22@gmail.com')
        cy.get(':nth-child(2) > .chakra-input').type('123456')

        cy.get('.chakra-button').click() // Como es valido entonces se entrará a la cuenta :)

        // -----------------------------------------------------------------------------------
        // Como ya tenemos una veterinaria ya registrada entonces vamos a ir de una vez ------
        cy.get('#field-\\:r0\\:').type('Veterinaria Cypress 1') // Nombre
        cy.get('#field-\\:r1\\:').type('Guatemala') // Ciudad
        cy.get('#field-\\:r2\\:').type('15') // Zona
        cy.get('#field-\\:r3\\:').type('Cayala') // Dirección
        cy.get('#field-\\:r4\\:').type('vetcypress1@gmail.com') // Correo

        // Servicios ofrecidos : [data-testid="handle-add-vet-test"] > :nth-child(6)
        // Vacunacion : [data-testid="vacunacion-test"] > .chakra-checkbox__label
        // Rayos X : [data-testid="rayos-x-test"] > .chakra-checkbox__label
        // Examenes corporales : [data-testid="examenes-corporales-test"] > .chakra-checkbox__label
        // Hematologías : [data-testid="hematologias-test"] > .chakra-checkbox__label
        // Hospedaje : [data-testid="hospedaje-test"] > .chakra-checkbox__label
        // Grooming : [data-testid="grooming-test"] > .chakra-checkbox__label
        // Desparacitacion : [data-testid="desparacitacion-test"] > .chakra-checkbox__label
        // Castraciones : [data-testid="castraciones-test"] > .chakra-checkbox__label
        // Operacion : [data-testid="operacion-test"] > .chakra-checkbox__label

        // cy.get('[type="checkbox"]').check() // Check checkbox element
        // cy.get('[type="radio"]').first().check()

        // cy.get('[type="checkbox"]').check() // Check checkbox element

        // Seleccionar ubicacion en el mapa

        cy.get('#field-\\:r5\\:').type('9999-0001') // Telefono

        // Emergencia : .chakra-radio-group > .chakra-stack
        // cy.get(".chakra-radio-group > .chakra-stack > :nth-child(1)") // Si
        // cy.get('.chakra-radio-group > .chakra-stack > :nth-child(2)').check() // No

        // Tipo de veterinaria : #field-\:ra\:

        // Hora de apertura : #field-\:rb\:
        cy.get('#field-\\:rb\\:').type('08:08')

        // Hora de cierre : #field-\:rc\:
        cy.get('#field-\\:rc\\:').type('12:12')

        cy.wait(2000)

        // Boton de enviar formulario
        // cy.get('.chakra-button').click() // Como es valido entonces se entrará a la cuenta :)
        // -----------------------------------------------------------------------------------
    })
})
