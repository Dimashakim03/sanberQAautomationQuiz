import LoginPage from '../pages/LoginPage'
import loginData from '../fixtures/loginData.json'

describe('OrangeHRM Login POM', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('TC01 - Login dengan credential valid', () => {
    loginPage.login(
      loginData.validUsername,
      loginData.validPassword
    )

    cy.url().should('include', '/dashboard')
  })

  it('TC02 - Username kosong', () => {
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickLogin()

    cy.contains('Required').should('be.visible')
  })

  it('TC03 - Password kosong', () => {
    loginPage.inputUsername(loginData.validUsername)
    loginPage.clickLogin()

    cy.contains('Required').should('be.visible')
  })

  it('TC04 - Username tidak valid', () => {
    loginPage.login(
      loginData.invalidUsername,
      loginData.validPassword
    )

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC05 - Password tidak valid', () => {
    loginPage.login(
      loginData.validUsername,
      loginData.invalidPassword
    )

    cy.contains('Invalid credentials').should('be.visible')
  })
})