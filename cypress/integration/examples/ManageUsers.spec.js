import LoginPage from "../PageObject/LoginPage";

describe('Fast API Testing ', function () {
    beforeEach(function () {
        cy.fixture('login').then(function (data) {
            this.data = data
        })
    })

    it('Number of Users', function () {
        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.wait(2000)
        cy.get('.v-snack__content > .v-btn')
            .click()
        cy.get('.v-list--subheader > :nth-child(2) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
            .click()
        cy.get('.v-content__wrap > :nth-child(1) > .v-toolbar > .v-toolbar__content > .v-toolbar__title')
            .contains('Manage Users')

        cy.get('.v-datatable').find('tr').its('length').should('eq', 3)

    });

})