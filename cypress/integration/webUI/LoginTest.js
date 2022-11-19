/* eslint-disable no-undef */
// cypress - Spec

describe('My Pet & Me - Login Test', function () {
    it('Test of Invalid User', function () {
        cy.visit('http://localhost:3000/')

        cy.wait(1000)

        cy.get(':nth-child(3) > a').click()

        cy.wait(1000)

        // Probar cuenta invalida
        cy.get(':nth-child(1) > .chakra-input').type(
            'soy_un_colado@facke.gmail'
        )
        cy.get(':nth-child(2) > .chakra-input').type('contrafake')

        cy.get('.chakra-button').click()

        cy.wait(2000) // Solamente para ver el error que puede ocurrir

        cy.get('.Toastify__toast-body > :nth-child(2)').should(
            'contain',
            'Datos incorrectos'
        )

        cy.wait(3000) // Solamente para ver el error que puede ocurrir
    })

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
        cy.get('#field-\\:r0\\:').type('Veterinaria Cypress True') // Nombre
        cy.get('#field-\\:r1\\:').type('Guatemala') // Ciudad
        cy.get('#field-\\:r2\\:').type('15') // Zona
        cy.get('#field-\\:r3\\:').type('Cayala') // Dirección
        cy.get('#field-\\:r4\\:').type('vetcypressTrue@gmail.com') // Correo

        // Servicios ofrecidos : [data-testid="handle-add-vet-test"] > :nth-child(6)
        // Vacunacion : [data-testid="vacunacion-test"] > .chakra-checkbox__label
        cy.get(
            '[data-testid="vacunacion-test"] > .chakra-checkbox__label'
        ).click()
        // RayosX : [data-testid="rayos-x-test"] > .chakra-checkbox__label
        cy.get('[data-testid="rayos-x-test"] > .chakra-checkbox__label').click()
        // Examenescorporales : [data-testid="examenes-corporales-test"] > .chakra-checkbox__label
        cy.get(
            '[data-testid="examenes-corporales-test"] > .chakra-checkbox__label'
        ).click()
        // Hematologías : [data-testid="hematologias-test"] > .chakra-checkbox__label
        cy.get(
            '[data-testid="hematologias-test"] > .chakra-checkbox__label'
        ).click()
        // Hospedaje : [data-testid="hospedaje-test"] > .chakra-checkbox__label
        // cy.get(
        //     '[data-testid="hospedaje-test"] > .chakra-checkbox__label'
        // ).click()
        // Grooming : [data-testid="grooming-test"] > .chakra-checkbox__label
        // cy.get(
        // '[data-testid="grooming-test"] > .chakra-checkbox__label'
        // ).click()
        // Desparacitacion : [data-testid="desparacitacion-test"] > .chakra-checkbox__label
        // cy.get(
        // '[data-testid="desparacitacion-test"] > .chakra-checkbox__label'
        // ).click()
        // Castraciones : [data-testid="castraciones-test"] > .chakra-checkbox__label
        // cy.get(
        // '[data-testid="castraciones-test"] > .chakra-checkbox__label'
        // ).click()
        // Operacion : [data-testid="operacion-test"] > .chakra-checkbox__label
        cy.get(
            '[data-testid="operacion-test"] > .chakra-checkbox__label'
        ).click()

        cy.get(
            '[src="https://b.tile.openstreetmap.org/13/2036/3758.png"]'
        ).click()

        cy.get('#field-\\:r5\\:').type('9999-0001') // Telefono

        // 1) Si, 2) No
        cy.get('.chakra-radio-group > .chakra-stack > :nth-child(1)').click()

        /**
         * 1. Normal
         * 2. PhetShop
         * 3. Clinica
         * 4. Hospital
         * Tipo de veterinaria : #field-\:ra\:
         */
        cy.get('#field-\\:ra\\:').select(2)

        // Hora de apertura : #field-\:rb\:
        cy.get('#field-\\:rb\\:').type('08:00')

        // Hora de cierre : #field-\:rc\:
        cy.get('#field-\\:rc\\:').type('20:00')

        cy.wait(2000)

        // Boton de enviar formulario
        // cy.get('.chakra-button').click() // Como es valido entonces se entrará a la cuenta :)

        cy.wait(2000)
        // -----------------------------------------------------------------------------------
    })
})
