describe('OrangeHRM Login Intercept', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

 it('TC01 - Login valid', () => {
  cy.intercept('POST', '**/auth/validate').as('loginRequest')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@loginRequest')
  cy.url().should('include', '/dashboard')
})

 it('TC02 - Username kosong', () => {
  cy.intercept('POST', '**/auth/validate').as('emptyUsername')

  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-field-error-message')
    .should('contain.text', 'Required')
})

  it('TC03 - Password kosong', () => {
  cy.intercept('POST', '**/auth/validate').as('emptyPassword')

  cy.get('input[name="username"]').type('Admin')
  cy.get('button[type="submit"]').click()

  cy.get('.oxd-input-field-error-message')
    .should('contain.text', 'Required')
})

  it('TC04 - Username salah', () => {
    cy.intercept('POST', '**/auth/validate').as('invalidUser')

    cy.get('input[name="username"]').type('Admin123')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@invalidUser')

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC05 - Password salah', () => {
    cy.intercept('POST', '**/auth/validate').as('invalidPassword')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('salahpassword')
    cy.get('button[type="submit"]').click()

    cy.wait('@invalidPassword')

    cy.contains('Invalid credentials').should('be.visible')
  })

})