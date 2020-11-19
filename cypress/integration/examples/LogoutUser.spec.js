import LoginPage from "../PageObject/LoginPage";

describe('Login Page Testing', function () {

    beforeEach(function () {
        cy.fixture('login').then(function (data) {
            this.data = data
        })
    })

    it('Invalid Email Test', function () {
        cy.login(`${this.data.email}`,`${this.data.password}`)
        cy.wait(3000)
        cy.get('.v-menu__activator > .v-btn > .v-btn__content > .v-icon').click({force:true})
        cy.get('.v-menu__content >.v-list > :nth-child(2) >.v-list__tile').click()
    });

});