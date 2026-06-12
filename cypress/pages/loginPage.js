class LoginPage {

  usernameField = 'input[name="username"]'
  passwordField = 'input[name="password"]'
  loginButton = 'button[type="submit"]'
  requiredMessage = '.oxd-input-field-error-message'

  visit() {
    cy.visit('/web/index.php/auth/login')
  }

  inputUsername(username) {
    cy.get(this.usernameField).type(username)
  }

  inputPassword(password) {
    cy.get(this.passwordField).type(password)
  }

  clickLogin() {
    cy.get(this.loginButton).click()
  }

  login(username, password) {
    this.inputUsername(username)
    this.inputPassword(password)
    this.clickLogin()
  }
}

export default LoginPage