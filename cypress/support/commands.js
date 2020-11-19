import LoginPage from "../integration/PageObject/LoginPage";

Cypress.Commands.add("login", (email, password) => {
        const login = new LoginPage()
        login.visit()
        login.fillLogin(email)
        login.fillPassword(password)
        login.submit()
})
