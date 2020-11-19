class LoginPage {

    visit() {
        cy.visit('http://localhost:8080/login')
    }

    fillLogin(value){
        const filled = cy.get('input[name=login]')
        filled.clear()
        filled.type(value)
        return this
    }

    fillPassword(value){
        const filled = cy.get('input[name=password]')
        filled.clear()
        filled.type(value)
        return this
    }
    submit(){
        const submit = cy.get('[type=button]')
        submit.click()
    }
}

export default LoginPage