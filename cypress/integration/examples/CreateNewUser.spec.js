import LoginPage from "../PageObject/LoginPage";

describe('Create New User', function () {
    beforeEach(function () {
        cy.fixture('login').then(function (data) {
            this.data = data
        })
    })

    it('User Creation Failed', function () {
        const name = 'Arman Shanto'
        const email = 'arman@gmail.com'
        const pass = '123456'

        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        //cy.get('.v-snack__content > .v-btn > .v-btn__content').click()
        cy.get('.v-list--subheader > :nth-child(3) > ' +
            '.v-list__tile > .v-list__tile__content >' +
            ' .v-list__tile__title').click()
        cy.get('input[type=text]').type(name)
        cy.get('input[type="email"]').clear().type(email)
        cy.get('input[type=checkbox]').check({force:true})
        cy.get('[type=checkbox]').uncheck({force:true})
        cy.get('input[data-vv-name=password]').clear().type(pass)
        cy.get('.v-card__actions > :nth-child(4)').click()
        cy.get(':nth-child(2) > ' +
            '.v-input__control > ' +
            '.v-text-field__details >' +
            ' .v-messages > ' +
            '.v-messages__wrapper >' +
            ' .v-messages__message').contains('The password field is required')
    });

    it.only('User Creation SuccessFull', function () {
        const name = 'Arman Shanto'
        const email = 'arman@gmail.com'
        const pass = '123456'

        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        //cy.get('.v-snack__content > .v-btn > .v-btn__content').click()
        cy.get('.v-list--subheader > :nth-child(3) > ' +
            '.v-list__tile > .v-list__tile__content >' +
            ' .v-list__tile__title').click()
        cy.get('input[type=text]').type(name)
        cy.get('input[type="email"]').clear().type(email)
        cy.get('input[type=checkbox]').check({force:true})
        cy.get('[type=checkbox]').uncheck({force:true})
        cy.get('input[data-vv-name=password]').clear().type(pass)
        cy.get('input[data-vv-name="password_confirmation"]').clear().type(pass)
        cy.get('.v-card__actions > :nth-child(4)').click()
        cy.get('.v-datatable').find('tr').its('length').should('eq', 5)

    });




});