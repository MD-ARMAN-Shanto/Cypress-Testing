import LoginPage from "../PageObject/LoginPage";

describe('User Password Change', function () {
    beforeEach(function () {
        cy.fixture('login').then(function (data) {
            this.data = data
        })
    })

    it('User Password not update Test', function () {
        const password = 'hello123'
        const confirmPassword = 'hello124'
        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        cy.get('.v-snack__content > .v-btn').click()
        cy.get(':nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click()
        cy.get('input[data-vv-name=password]').type(password)
        cy.get('input[data-vv-name=password_confirmation]').type(confirmPassword)
        cy.get('.v-messages__message').contains('The password confirmation does not match')
    });

    it('User Password Reset', function () {
        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        cy.get('.v-snack__content > .v-btn').click()
        cy.get(':nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click()
        // cy.get('input[data-vv-name=password]').type(password)
        // cy.get('input[data-vv-name=password_confirmation]').type(password)
        cy.get('.v-card__actions > :nth-child(3)').click()
        cy.get('input[data-vv-name=password]').should('be.empty')
        cy.get('input[data-vv-name=password_confirmation]').should('be.empty')
        cy.wait(2000)
    });



    it('User Password update Test', function () {
        const password = 'hello123'
        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        cy.get('.v-snack__content > .v-btn').click()
        cy.get(':nth-child(5) > .v-list__tile > .v-list__tile__content > .v-list__tile__title').click()
        cy.get('input[data-vv-name=password]').type(password)
        cy.get('input[data-vv-name=password_confirmation]').type(password)
        cy.get('.v-card__actions > :nth-child(4)').click()
        cy.get('.v-snack__content').should('be.visible')
    });
});