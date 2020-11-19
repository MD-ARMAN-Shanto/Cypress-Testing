import LoginPage from "../PageObject/LoginPage";

describe('Login Page Testing', function () {

    beforeEach(function () {
        cy.fixture('login').then(function (data) {
            this.data = data
        })
    })

    it('Invalid Email Test', function () {
        cy.login('hello@gmail.com',`${this.data.password}` )
        //invalidLogin.fillPassword(null)
        //cy.get('.v-snack__content > .v-btn > .v-btn__content').click()
        cy.get('.v-alert > div').contains( 'Incorrect email or password')
    });

    it('Invalid Password Test', function () {
        cy.login(`${this.data.email}`, 'null')
        //cy.get('.v-snack__content > .v-btn > .v-btn__content').click()
        cy.get('.v-alert > div').contains( 'Incorrect email or password')
    });

    it('Valid Login Text', function () {
        cy.login(`${this.data.email}`, `${this.data.password}`)
        cy.get('.v-card__text > .headline').contains(`Welcome ${this.data.email}`)
        cy.get('.v-card__actions > [href="/main/profile/view"]').click({force:true})
    });



});